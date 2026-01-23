import chalk from "chalk";
import { randomUUID } from "crypto";
import { LLMAdapter } from "./llmAdapter";
import { GovernanceService } from "./governance";
import { ToolExecutor } from "./executor";
import { ContextManager } from "./contextManager";
import { evaluateProposal } from "./governance/core";
import { ProposedAction, ExecutionTurn } from "./state";
import { ContextBuffer } from "./contextBuffer";
import {
  snapshotFromBuffer,
  diffContext,
  ContextSnapshot,
} from "./contextDiff";
import { ExecutionRecorder } from "./executionRecorder";
import {
  generateReferenceRetrospective,
  analyzeContextLifecycle,
} from "./contextProtocol";
import { ContextToSkillPromotionRules } from "./contextSkillPromotion";
import {
  Skill,
  updateSkillStatus,
  learnSkillFromRecord,
  addSkill,
} from "./skills";

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

  /**
   * 初始化运行时，包括 Context Bank
   */
  async initialize(): Promise<void> {
    await this.context.initializeContextBank();
  }

  async run(
    userInput: string,
    mode: "chat" | "command" = "chat",
    onChunk?: (chunk: string) => void,
    model?: string,
    abortSignal?: AbortSignal,
  ) {
    // ✅ 终止态检查（HALT）- v3.1 核心修复
    if (userInput && userInput.trim().toLowerCase() === 'stop') {
      console.log(chalk.blue('\n🛑 TERMINATION: User requested stop'));
      this.executionRecorder.recordTurn({
        turnId: 0,
        startTime: Date.now(),
        contextSnapshot: {
          inputHash: this.context.getHash(),
          systemPromptVersion: 'v1.0.0',
          toolSetVersion: 'v1.0.0',
          recentMessages: this.context.getRecentMessages(5),
        },
        executionResult: {
          success: true,
          output: 'STOPPED'
        },
        endTime: Date.now()
      } as any);
      return; // ✅ 直接 return，不进入 REACT 循环
    }

    // 确保 Context Bank 已初始化
    await this.initialize();

    let turnCount = 0;
    const maxTurns = 10;

    if (userInput) {
      // 检查用户输入是否包含 DSL 查询，如果有则自动添加相关上下文
      const dslContextItems =
        await this.context.getDSLContextForInput(userInput);

      if (dslContextItems.length > 0) {
        console.log(
          chalk.cyan(
            `\n[DSL Query] Found ${dslContextItems.length} matching context items:`,
          ),
        );
        for (const item of dslContextItems) {
          console.log(chalk.cyan(`  - ${item.path} (${item.type})`));
        }
      }

      // 从 Context Bank 查询与当前任务相关的上下文
      console.log(chalk.blue("\n[Context Bank] Loading relevant context..."));
      try {
        await this.context.importFromContextBank({
          input: userInput,
          projectScope: process.cwd(), // 使用当前工作目录作为项目作用域
          strategy: "relevance",
          limit: 5, // 最多加载5个相关上下文
        });
        console.log(chalk.green("[Context Bank] Relevant context loaded"));
      } catch (error) {
        console.log(
          chalk.yellow(`[Context Bank] Could not load context: ${error}`),
        );
      }

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
      const currentSnapshot = snapshotFromBuffer(
        this.context.getContextBuffer(),
      );
      const contextDiff = diffContext(
        this.lastContextSnapshot,
        currentSnapshot,
      );

      if (
        contextDiff.added.length ||
        contextDiff.removed.length ||
        contextDiff.changed.length
      ) {
        console.log(chalk.cyan("\n[Context Diff]"));
        if (contextDiff.added.length)
          console.log("  + added:", contextDiff.added);
        if (contextDiff.removed.length)
          console.log("  - removed:", contextDiff.removed);
        if (contextDiff.changed.length)
          console.log("  ~ changed:", contextDiff.changed);
      }

      this.lastContextSnapshot = currentSnapshot;

      // 记录执行回合
      const executionTurn: Omit<ExecutionTurn, "turnId"> = {
        startTime: Date.now(),
        contextSnapshot: {
          inputHash: this.context.getHash(),
          systemPromptVersion: "v1.0.0",
          toolSetVersion: "v1.0.0",
          recentMessages: this.context.getRecentMessages(5),
        },
        contextDiff:
          contextDiff.added.length ||
          contextDiff.removed.length ||
          contextDiff.changed.length
            ? contextDiff
            : undefined,
      };

      // 👇👇👇 Observation-only Debug（推荐）
      if (!onChunk) {
        const observations = this.context.getObservations();
        if (observations.length > 0) {
          console.log(chalk.magenta('\n🔎 OBSERVATION DEBUG (Agent Perception)'));
          observations.forEach((obs, i) => {
            console.log(
              chalk.magenta(
                `#${i + 1} [${obs.role.toUpperCase()}]\n${obs.content}\n`
              )
            );
          });
        }
      }

      // 检查是否被取消
      if (abortSignal?.aborted) {
        console.log(chalk.red('\n🛑 Execution aborted by user'));
        throw new Error('Execution aborted by user');
      }

      const thought = await LLMAdapter.think(
        messages,
        mode as any,
        onChunk,
        model,
        GovernanceService.getPolicyManual(),
        this.context, // 传递ContextManager以便访问ContextBuffer
        abortSignal // ✅ 传递取消信号到 LLMAdapter
      );

      // === Observation Acknowledgement Gate (v3.1 - 安全版) ===
      // ✅ 使用 getLastAckableObservation() 而不是 getLastObservation()
      // 这会自动排除 error 类型的 Observation
      const lastObs = this.context.getLastAckableObservation();
      const ack = (thought.parsedPlan as any)?.acknowledged_observation;
      
      if (lastObs) {
          // 如果有 Observation，检查是否被正确确认
          // 检查 ack 是否存在且不为 NONE
          if (!ack || ack === 'NONE') {
              console.log(chalk.red('\n❌ OBSERVATION NOT ACKNOWLEDGED'));
              console.log(chalk.red('Expected observation to be restated:'));
              console.log(chalk.red(lastObs.content.substring(0, 100) + '...'));

              // ✅ 关键修复：使用 error 类型，这样它不会被再次确认
              this.context.addObservation(
                `ERROR: You failed to acknowledge the latest Observation.
You MUST restate it verbatim before continuing.
Latest Observation: ${lastObs.content}`,
                'error'  // ← 标记为 error 类型，防止死循环
              );

              // ❗关键：不要执行 action，直接下一轮
              continue;
          }
          
          // 宽松检查：只要 ack 包含 Observation 的一部分内容即可
          if (lastObs.content.length > 30 && 
              !lastObs.content.includes(ack.substring(0, 10)) && 
              !ack.includes(lastObs.content.substring(0, 10))) {
              console.log(chalk.red('\n❌ OBSERVATION ACK MISMATCH'));
              console.log(chalk.red('Observation:'));
              console.log(chalk.red(lastObs.content.substring(0, 100) + '...'));
              console.log(chalk.red('Your ACK:'));
              console.log(chalk.red(ack.substring(0, 100) + '...'));

              // ✅ 使用 error 类型
              this.context.addObservation(
                `ERROR: Your acknowledgment does not match the latest Observation.
Please restate it VERBATIM.
Latest Observation: ${lastObs.content}`,
                'error'  // ← 标记为 error 类型
              );

              continue;
          }
      } else if (ack && ack !== 'NONE') {
          // 没有需要确认的 Observation，但 AI 确认了某个内容
          // 这可能是误判，但不是致命错误，直接继续
          console.log(chalk.yellow('\n⚠️  ACK provided but no Observation to acknowledge'));
      }

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
          console.log(chalk.green(`\n\n\n🤖 AI Action: ${result.output}\n`));
        }
        
        // 关键修复：将结果作为 Observation (Tool Result) 添加，而不是 Assistant 回复
        this.context.addToolResult(action.type, result.output);

        // 更新executionTurn
        executionTurn.executionResult = result;
        executionTurn.endTime = Date.now();

        // 任务成功完成，只更新被使用过的ContextItem的重要性
        for (const item of this.context.getContextBuffer().export()) {
          if (item.importance && item.importance.useCount > 0) {
            // 成功完成任务，增加成功计数
            item.importance.successCount++;
            item.importance.confidence = Math.min(
              1,
              item.importance.confidence + 0.05,
            );
            item.importance.lastUsed = Date.now();
          }
        }

        // 记录 ContextBank 使用情况（成功）
        await this.context.recordBankUsage(true);

        // 生成Context引用回溯报告
        const retrospectiveReport = generateReferenceRetrospective(
          this.context.getContextBuffer(),
          this.executionId,
          userInput,
          result.output,
        );

        console.log(chalk.magenta("\n🔍 Context Reference Retrospective:"));
        console.log(retrospectiveReport);

        // 分析ContextItem的生命周期
        const lifecycleAnalysis = analyzeContextLifecycle(
          this.context.getContextBuffer(),
        );
        const recommendations = lifecycleAnalysis.filter(
          (item) => item.recommendation !== "keep",
        );

        if (recommendations.length > 0) {
          console.log(chalk.magenta("\n💡 Context Lifecycle Recommendations:"));
          for (const rec of recommendations) {
            console.log(
              chalk.yellow(
                `  ${rec.recommendation.toUpperCase()}: ${rec.path} (quality: ${rec.qualityScore.toFixed(2)}, relevance: ${rec.relevanceScore.toFixed(2)})`,
              ),
            );
          }
        }

        // 检查是否可以将某些ContextItem晋升为Skill
        const contextItems = this.context.getContextBuffer().export();
        for (const item of contextItems) {
          const promotedSkill =
            ContextToSkillPromotionRules.evaluatePromotion(item);
          if (promotedSkill) {
            console.log(
              chalk.green(
                `\n🚀 PROMOTION: Context "${item.path}" qualifies to be promoted to Skill "${promotedSkill.name}"`,
              ),
            );
            console.log(
              chalk.gray(`   Description: ${promotedSkill.description}`),
            );

            // 询问用户是否确认创建技能
            const confirmed = await this.confirmSkillCreation(promotedSkill);
            if (confirmed) {
              try {
                // 通过治理服务审批
                const governanceDecision = await GovernanceService.adjudicate({
                  id: randomUUID(),
                  type: "tool_call",
                  payload: {
                    tool_name: "skill_create",
                    parameters: promotedSkill,
                  },
                  riskLevel: "low",
                  reasoning: "Auto promotion from context",
                });

                if (governanceDecision.status === "approved") {
                  // 保存技能
                  await this.saveSkill(promotedSkill);
                  // 标记 ContextItem 已被晋升
                  (item as any).metadata = {
                    ...(item as any).metadata,
                    promotedToSkill: true,
                  };
                  console.log(
                    chalk.green(
                      `✅ Skill "${promotedSkill.name}" created successfully`,
                    ),
                  );
                } else {
                  console.log(
                    chalk.yellow(
                      `⚠️  Skill creation rejected by governance: ${"reason" in governanceDecision ? governanceDecision.reason : "Unknown reason"}`,
                    ),
                  );
                }
              } catch (error) {
                console.log(chalk.red(`❌ Failed to create skill: ${error}`));
              }
            }
          }
        }

        // 记录执行回合（只在这里记录一次）
        this.executionRecorder.recordTurn({
          ...executionTurn,
          turnId: 0,
        } as any);

        // 执行回顾性分析
        await this.retrospective({ ...executionTurn, turnId: 0 });

        // 关键修复：不要 break，而是 continue让 AI 看到 Observation 后进行下一轮思考
        continue;
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
          error: preCheck.reason,
        };
        executionTurn.endTime = Date.now();

        // 记录执行回合
        this.executionRecorder.recordTurn({
          ...executionTurn,
          turnId: 0,
        } as any);

        continue;
      }

      // === 正式治理 (WASM + 人工/自动) ===
      const decision = await GovernanceService.adjudicate(action);
      if (decision.status === "rejected") {
        console.log(
          chalk.red(
            `[GOVERNANCE] ❌ Rejected: ${"reason" in decision ? decision.reason : "Unknown reason"}`,
          ),
        );
        this.context.addMessage(
          "system",
          `Rejected by Governance: ${"reason" in decision ? decision.reason : "Unknown reason"}`,
        );

        // 更新executionTurn
        executionTurn.governance = decision;
        executionTurn.executionResult = {
          success: false,
          output: `GOVERNANCE REJECTED: ${"reason" in decision ? decision.reason : "Unknown reason"}`,
          error: "reason" in decision ? decision.reason : "Unknown reason",
        };
        executionTurn.endTime = Date.now();

        // 任务被拒绝，只更新被使用过的ContextItem的重要性（失败惩罚）
        for (const item of this.context.getContextBuffer().export()) {
          if (item.importance && item.importance.useCount > 0) {
            // 任务失败，增加失败计数
            item.importance.failureCount++;
            item.importance.confidence = Math.max(
              0,
              item.importance.confidence - 0.1,
            );
            item.importance.lastUsed = Date.now();
          }
        }

        // 记录 ContextBank 使用情况（失败）
        await this.context.recordBankUsage(false);

        // 记录执行回合
        this.executionRecorder.recordTurn({
          ...executionTurn,
          turnId: 0,
        } as any);

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

      if (result.success) {
        this.context.addToolResult(action.type, result.output);
        const preview =
          result.output.length > 300
            ? result.output.substring(0, 300) + "..."
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

        // 记录 ContextBank 使用情况（成功）
        await this.context.recordBankUsage(true);
      } else {
        this.context.addToolResult(action.type, `Error: ${result.error}`);
        console.log(chalk.red(`[ERROR] ${result.error}`));

        // 记录 ContextBank 使用情况（失败）
        await this.context.recordBankUsage(false);
      }

      // 记录执行回合
      this.executionRecorder.recordTurn({ ...executionTurn, turnId: 0 } as any);
    }

    if (turnCount >= maxTurns) {
      console.log(chalk.red(`\n⚠️ Max turns (${maxTurns}) reached.`));
    }
  }

  getContextManager(): ContextManager {
    return this.context;
  }

  /**
   * 询问用户是否确认创建技能
   */
  private async confirmSkillCreation(skill: Skill): Promise<boolean> {
    // 在实际实现中，这里可能会有更复杂的确认逻辑
    // 目前返回 true 以自动创建技能
    console.log(chalk.blue(`\n📝 Creating skill: ${skill.name}`));
    return true; // 自动确认，可根据配置调整
  }

  /**
   * 保存技能
   */
  private async saveSkill(skill: Skill): Promise<void> {
    // 将技能添加到技能库
    const now = Date.now();
    const skillToAdd = {
      ...skill,
      successCount: skill.metadata?.promotionCriteria?.successCount || 0,
      failureCount: 0, // 新创建的技能没有失败记录
      confidence: skill.metadata?.promotionCriteria?.successRate || 0.5,
      lastUsed: now,
      createdAt: now,
      enabled: true,
    };

    // 使用 addSkill 函数添加技能
    addSkill(skillToAdd);
  }

  /**
   * 执行回合回顾分析
   */
  private async retrospective(turn: ExecutionTurn) {
    // 导出高价值上下文到 Context Bank
    console.log(chalk.blue("\n[Context Bank] Exporting high-value context..."));
    try {
      await this.context.exportToContextBank(process.cwd()); // 使用当前工作目录作为项目作用域
      console.log(chalk.green("[Context Bank] High-value context exported"));
    } catch (error) {
      console.log(
        chalk.yellow(`[Context Bank] Could not export context: ${error}`),
      );
    }

    // 评估上下文晋升
    await this.evaluateContextPromotion();
  }

  /**
   * 评估上下文晋升
   */
  private async evaluateContextPromotion() {
    const contextItems = this.context.getContextBuffer().export();
    for (const item of contextItems) {
      const promotedSkill =
        ContextToSkillPromotionRules.evaluatePromotion(item);
      if (promotedSkill) {
        console.log(
          chalk.green(
            `\n🚀 PROMOTION: Context "${item.path}" qualifies to be promoted to Skill "${promotedSkill.name}"`,
          ),
        );
        console.log(chalk.gray(`   Description: ${promotedSkill.description}`));

        // 询问用户是否确认创建技能
        const confirmed = await this.confirmSkillCreation(promotedSkill);
        if (confirmed) {
          try {
            // 通过治理服务审批
            const governanceDecision = await GovernanceService.adjudicate({
              id: randomUUID(),
              type: "tool_call",
              payload: {
                tool_name: "skill_create",
                parameters: promotedSkill,
              },
              riskLevel: "low",
              reasoning: "Auto promotion from context",
            });

            if (governanceDecision.status === "approved") {
              // 保存技能
              await this.saveSkill(promotedSkill);
              console.log(
                chalk.green(
                  `✅ Skill "${promotedSkill.name}" created successfully`,
                ),
              );

              // 反馈给 AI，让它知道技能创建成功
              this.context.addMessage(
                "system",
                `System Notification: Skill "${promotedSkill.name}" has been successfully created and persisted from context "${item.path}".`,
              );
            } else {
              console.log(
                chalk.yellow(
                  `⚠️  Skill creation rejected by governance: ${"reason" in governanceDecision ? governanceDecision.reason : "Unknown reason"}`,
                ),
              );

              // 反馈给 AI，让它知道被拒绝
              this.context.addMessage(
                "system",
                `System Notification: Skill creation for "${promotedSkill.name}" was rejected by governance. Reason: ${"reason" in governanceDecision ? governanceDecision.reason : "Unknown reason"}`,
              );
            }
          } catch (error) {
            console.log(chalk.red(`❌ Failed to create skill: ${error}`));
          }
        }
      }
    }
  }

  getExecutionRecorder(): ExecutionRecorder {
    return this.executionRecorder;
  }
}
