import chalk from "chalk";
import { randomUUID } from "crypto";
import { LLMAdapter } from "./llmAdapter";
import { GovernanceService } from "./governance";
import { ToolExecutor } from "./executor";
import { ContextManager } from "./contextManager";
import { evaluateProposal } from "./governance/core";
import { ProposedAction, ExecutionTurn } from "./state";
import { ContextBuffer } from "./contextBuffer";
import { snapshotFromBuffer, diffContext, ContextSnapshot } from "./contextDiff";
import { ExecutionRecorder } from "./executionRecorder";
import { generateReferenceRetrospective, analyzeContextLifecycle } from "./contextProtocol";

export class AgentRuntime {
  private context: ContextManager;
  private lastContextSnapshot: ContextSnapshot | null = null;
  private executionId: string;
  private executionRecorder: ExecutionRecorder;

  constructor(initialContext: any) {
    this.context = new ContextManager(initialContext);
    this.executionRecorder = new ExecutionRecorder();
    this.executionId = randomUUID();
  }

  async run(
    userInput: string,
    mode: "chat" | "command" = "chat",
    onChunk?: (chunk: string) => void,
    model?: string,
  ) {
    let turnCount = 0;
    const maxTurns = 10;

    if (userInput) {
      this.context.addMessage("user", userInput);
    }

    while (turnCount < maxTurns) {
      const currentTurn = ++turnCount;
      if (currentTurn > 1) {
        console.log(chalk.blue(`\n--- Turn ${currentTurn} ---`));
      }

      const messages = this.context.getMessages().map((msg) => ({
        role: (msg.role === "tool" ? "system" : msg.role) as
          | "system"
          | "user"
          | "assistant",
        content: msg.content,
      }));

      // === Context Diff ===
      const currentSnapshot = snapshotFromBuffer(this.context.getContextBuffer());
      const contextDiff = diffContext(this.lastContextSnapshot, currentSnapshot);

      if (
        contextDiff.added.length ||
        contextDiff.removed.length ||
        contextDiff.changed.length
      ) {
        console.log(chalk.cyan('\n[Context Diff]'));
        if (contextDiff.added.length)
          console.log('  + added:', contextDiff.added);
        if (contextDiff.removed.length)
          console.log('  - removed:', contextDiff.removed);
        if (contextDiff.changed.length)
          console.log('  ~ changed:', contextDiff.changed);
      }

      this.lastContextSnapshot = currentSnapshot;

      // 记录执行回合
      const executionTurn: Omit<ExecutionTurn, 'turnId'> = {
        startTime: Date.now(),
        contextSnapshot: {
          inputHash: this.context.getHash(),
          systemPromptVersion: 'v1.0.0',
          toolSetVersion: 'v1.0.0',
          recentMessages: this.context.getRecentMessages(5)
        },
        contextDiff: contextDiff.added.length || contextDiff.removed.length || contextDiff.changed.length
          ? contextDiff
          : undefined
      };

      const thought = await LLMAdapter.think(
        messages,
        mode as any,
        onChunk,
        model,
        GovernanceService.getPolicyManual(),
        this.context  // 传递ContextManager以便访问ContextBuffer
      );

      const action: ProposedAction = {
        id: randomUUID(),
        type: (thought.type as any) || "answer",
        payload: thought.payload || { text: thought.raw },
        riskLevel: "low",
        reasoning: thought.reasoning || "",
      };

      // 更新executionTurn
      executionTurn.proposedAction = action;

      if (action.reasoning && !onChunk) {
        console.log(chalk.gray(`\n🤔 Reasoning: ${action.reasoning}`));
      }

      // 如果 LLM 认为已经完成或者当前的动作就是回答
      if (thought.isDone || action.type === "answer") {
        const result = await ToolExecutor.execute(action as any);
        if (!onChunk) {
          console.log(chalk.green(`\n🤖 AI：${result.output}\n`));
        }
        this.context.addMessage("assistant", result.output);

        // 更新executionTurn
        executionTurn.executionResult = result;
        executionTurn.endTime = Date.now();

        // 记录执行回合
        this.executionRecorder.recordTurn(executionTurn);

        // 任务成功完成，只更新被使用过的ContextItem的重要性
        for (const item of this.context.getContextBuffer().export()) {
          if (item.importance && item.importance.useCount > 0) {
            // 成功完成任务，增加成功计数
            item.importance.successCount++;
            item.importance.confidence = Math.min(1, item.importance.confidence + 0.05);
            item.importance.lastUsed = Date.now();
          }
        }

        // 生成Context引用回溯报告
        const retrospectiveReport = generateReferenceRetrospective(
          this.context.getContextBuffer(),
          this.executionId,
          userInput,
          result.output
        );

        console.log(chalk.magenta('\n🔍 Context Reference Retrospective:'));
        console.log(retrospectiveReport);

        // 分析ContextItem的生命周期
        const lifecycleAnalysis = analyzeContextLifecycle(this.context.getContextBuffer());
        const recommendations = lifecycleAnalysis.filter(item => item.recommendation !== 'keep');

        if (recommendations.length > 0) {
          console.log(chalk.magenta('\n💡 Context Lifecycle Recommendations:'));
          for (const rec of recommendations) {
            console.log(chalk.yellow(`  ${rec.recommendation.toUpperCase()}: ${rec.path} (quality: ${rec.qualityScore.toFixed(2)}, relevance: ${rec.relevanceScore.toFixed(2)})`));
          }
        }

        break;
      }

      // === 预检 (Pre-flight) ===
      const preCheck = evaluateProposal(
        action,
        GovernanceService.getRules(),
        GovernanceService.getLedgerSnapshot(),
      );
      if (preCheck.effect === "deny") {
        console.log(
          chalk.red(`[PRE-FLIGHT] 🛡️ Policy Blocked: ${preCheck.reason}`),
        );
        this.context.addMessage(
          "system",
          `POLICY DENIED: ${preCheck.reason}. Find a different way.`,
        );

        // 更新executionTurn
        executionTurn.executionResult = {
          success: false,
          output: `POLICY DENIED: ${preCheck.reason}`,
          error: preCheck.reason
        };
        executionTurn.endTime = Date.now();

        // 记录执行回合
        this.executionRecorder.recordTurn(executionTurn);

        continue;
      }

      // === 正式治理 (WASM + 人工/自动) ===
      const decision = await GovernanceService.adjudicate(action);
      if (decision.status === "rejected") {
        console.log(chalk.red(`[GOVERNANCE] ❌ Rejected: ${decision.reason}`));
        this.context.addMessage(
          "system",
          `Rejected by Governance: ${decision.reason}`,
        );

        // 更新executionTurn
        executionTurn.governance = decision;
        executionTurn.executionResult = {
          success: false,
          output: `GOVERNANCE REJECTED: ${decision.reason}`,
          error: decision.reason
        };
        executionTurn.endTime = Date.now();

        // 记录执行回合
        this.executionRecorder.recordTurn(executionTurn);

        // 任务被拒绝，只更新被使用过的ContextItem的重要性（失败惩罚）
        for (const item of this.context.getContextBuffer().export()) {
          if (item.importance && item.importance.useCount > 0) {
            // 任务失败，增加失败计数
            item.importance.failureCount++;
            item.importance.confidence = Math.max(0, item.importance.confidence - 0.1);
            item.importance.lastUsed = Date.now();
          }
        }

        continue;
      }

      // 更新executionTurn
      executionTurn.governance = decision;

      // === 执行 ===
      console.log(chalk.yellow(`[EXECUTING] ⚙️ ${action.type}...`));
      const result = await ToolExecutor.execute(action as any);

      // 更新executionTurn
      executionTurn.executionResult = result;
      executionTurn.endTime = Date.now();

      // 记录执行回合
      this.executionRecorder.recordTurn(executionTurn);

      if (result.success) {
        this.context.addToolResult(action.type, result.output);
        const preview = result.output.length > 300
          ? result.output.substring(0, 300) + '...'
          : result.output;
        console.log(chalk.green(`[SUCCESS] Result:\n${preview}`));

        // 更新ContextBuffer中相关项的重要性（标记为被使用）
        for (const item of this.context.getContextBuffer().export()) {
          if (result.output.includes(item.path)) {
            if (item.importance) {
              item.importance.useCount++;
              item.importance.lastUsed = Date.now();
            }
          }
        }
      } else {
        this.context.addToolResult(action.type, `Error: ${result.error}`);
        console.log(chalk.red(`[ERROR] ${result.error}`));
      }
    }

    if (turnCount >= maxTurns) {
      console.log(chalk.red(`\n⚠️ Max turns (${maxTurns}) reached.`));
    }
  }

  getContextManager(): ContextManager {
    return this.context;
  }

  getExecutionRecorder(): ExecutionRecorder {
    return this.executionRecorder;
  }
}
