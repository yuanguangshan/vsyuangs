import { AgentThought } from './state';
import { runLLM } from './llm';
import { AgentPrompt } from './types';
import type { AIRequestMessage } from '../core/validation';
import { getUserConfig } from '../ai/client';
import { ContextManager } from './contextManager';
import { ExtendedContextProtocol } from './contextDSL';
import { parseContextReferences, validateContextReferences, buildContextPromptWithReferences } from './contextProtocol';
import { randomUUID } from 'crypto';

export class LLMAdapter {
  static async think(
    messages: AIRequestMessage[],
    mode: 'chat' | 'command' | 'command+exec' = 'chat',
    onChunk?: (chunk: string) => void,
    model?: string,
    customSystemPrompt?: string,
    contextManager?: ContextManager
  ): Promise<AgentThought> {
    // 生成唯一的响应ID用于引用跟踪
    const responseId = randomUUID();

    // 构建包含ContextBuffer内容的完整上下文
    let fullMessages = [...messages];

    if (contextManager) {
      const contextBuffer = contextManager.getContextBuffer();
      if (!contextBuffer.isEmpty()) {
        // 检查用户消息中是否有 DSL 查询
        const userInput = messages[messages.length - 1]?.content || '';
        const dslContextItems = await contextBuffer.getDSLContextForInput(userInput);

        let contextPrompt: string;

        if (dslContextItems.length > 0) {
          // 如果有 DSL 查询结果，使用 buildContextPromptWithReferences 来构建提示
          contextPrompt = await buildContextPromptWithReferences(contextBuffer, userInput);
        } else {
          // 获取ContextBuffer的完整提示，使用排名策略
          contextPrompt = contextBuffer.buildPrompt('', {
            strategy: 'ranked',  // 使用排名策略
            maxTokens: 16000     // 设置最大token限制
          });
        }

        // 将ContextBuffer内容作为system消息添加到消息列表开头
        fullMessages = [
          { role: 'system', content: contextPrompt },
          ...fullMessages
        ];
      }
    }

    const prompt: AgentPrompt = {
      system: customSystemPrompt || `[SYSTEM PROTOCOL V3 - CONTEXT REFERENCE ENABLED]
- ROLE: AUTOMATED EXECUTION AGENT WITH CONTEXT REFERENCE
- OUTPUT: STRICT JSON ONLY
- TALK: FORBIDDEN
- MODE: REACT (THINK -> ACTION -> PERCEIVE)
- CONTEXT REFERENCE: When using information from the provided context, explicitly reference it in your response using [Reference] notation or in the JSON output

JSON SCHEMA:
{
  "action_type": "tool_call" | "shell_cmd" | "code_diff" | "answer",
  "reasoning": "thought process",
  "tool_name": "list_files" | "read_file",
  "diff": "unified diff string",
  "parameters": {},
  "command": "shell string",
  "content": "final answer string",
  "used_context": ["path/to/file.ts", "path/to/dir"] // OPTIONAL: List paths of context items used
}

EXECUTION RULES:
1. If data is unknown (e.g. file list), use 'shell_cmd' or 'tool_call'.
2. NEVER explain how to do it. JUST EXECUTE.
3. Your output MUST start with '{' and end with '}'.
4. When referencing information from provided context, include the path in "used_context" array or use [Reference] notation.

Example Task: "count files"
Your Output: {"action_type":"shell_cmd","reasoning":"count files","command":"ls | wc -l","used_context":["/path/to/config.json"]}`,
      messages: fullMessages,
    };

    const config = getUserConfig();
    const finalModel = model || config.defaultModel || 'Assistant';

    const result = await runLLM({
      prompt,
      model: finalModel,
      stream: !!onChunk,
      onChunk
    });

    // 解析响应并处理Context引用
    const thought = this.parseThought(result.rawText);

    // 如果有ContextManager，解析并记录引用
    if (contextManager) {
      const contextBuffer = contextManager.getContextBuffer();
      const references = parseContextReferences(result.rawText);

      // 记录显式引用
      for (const ref of references.referencedItems) {
        contextBuffer.recordExplicitReference(ref.path, responseId);
      }

      // 验证引用的有效性
      const validation = validateContextReferences(
        references.referencedItems,
        contextBuffer.export()
      );

      // 更新引用的有效性
      for (const validRef of validation.valid) {
        contextBuffer.validateReference(validRef.path, true);
      }

      for (const invalidRef of validation.invalid) {
        contextBuffer.validateReference(invalidRef.path, false);
      }
    }

    return thought;
  }

  private static parseThought(raw: string): AgentThought {
    try {
      // 提取 JSON：支持 Markdown 块或纯 JSON 字符串
      const jsonMatch = raw.match(/```json\n([\s\S]*?)\n```/) || raw.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[1] || jsonMatch[0]);

        // 如果明确标记为 done，或者动作为 answer，则视为任务结束
        if (parsed.is_done === true || parsed.action_type === 'answer') {
          return {
            raw,
            parsedPlan: parsed,
            isDone: true,
            type: 'answer',
            payload: {
              content: parsed.final_answer || parsed.content || parsed.text || raw
            }
          };
        }

        // 智能推断动作类型：如果 AI 没给 action_type，我们根据字段猜测
        let inferredType = parsed.action_type;
        if (!inferredType) {
          if (parsed.tool_name || parsed.tool) inferredType = 'tool_call';
          else if (parsed.command || parsed.cmd) inferredType = 'shell_cmd';
          else if (parsed.diff || parsed.patch) inferredType = 'code_diff';
          else inferredType = 'answer';
        }

        return {
          raw,
          parsedPlan: parsed,
          isDone: inferredType === 'answer' || parsed.is_done === true,
          type: inferredType,
          payload: {
            tool_name: parsed.tool_name || parsed.tool || '',
            parameters: parsed.parameters || parsed.params || {},
            command: parsed.command || parsed.cmd || '',
            diff: parsed.diff || parsed.patch || '',
            content: parsed.content || parsed.text || ''
          },
          reasoning: parsed.reasoning || ''
        };
      }
    } catch (e) {
      // 解析失败时，回退到将原始内容作为回答
    }

    return {
      raw,
      parsedPlan: {},
      isDone: true,
      type: 'answer',
      payload: { content: raw },
      reasoning: ''
    };
  }
}
