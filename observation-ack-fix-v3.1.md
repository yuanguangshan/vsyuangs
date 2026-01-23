# Observation ACK 死循环修复总结 (v3.1)

## 问题描述

当用户输入 `stop` 时，AI 陷入无限循环，不断重复以下内容：
- "Okay, I'll stop."
- "我这边还不知道你指的是哪个项目……"

同时系统不断抛出错误：
```
ERROR: You failed to acknowledge the latest Observation.
You MUST restate it verbatim before continuing.
```

错误本身被当成新的 Observation，再次要求复述，形成死循环。

## 根因分析

### 核心问题

**Observation ACK 被当成"无限强制规则"，但系统里不存在"终止态（HALT）"**

### 具体表现

1. `stop` → 被当作 answer
2. answer → 仍然要求 ack Observation
3. ack 失败 → 生成 ERROR
4. ERROR → 又被当成 Observation
5. 🔁 **ERROR 自增殖**

### 设计缺陷

1. **缺失 A：STOP / HALT 终止态**
   - 没有一种状态可以：
     - 不需要 Observation
     - 不再触发下一轮 think()

2. **缺失 B：Observation 类型区分**
   - **错误 Observation ≠ 正常 Observation**
   - 系统把 `ERROR: You failed to acknowledge...` 当成普通 Observation 强制确认

3. **缺失 C：Observation Ack 的"幂等保护"**
   - 同一条 Observation 被要求确认 **N 次**
   - 没有检测机制："这条我已经确认过了"

## 修复方案

### ✅ 方案 A：引入「终止态（HALT）」

#### 1. Prompt 层修改

在 `SYSTEM PROTOCOL V3.1` 中新增高优先级规则：

```
TERMINATION RULE (HIGHEST PRIORITY):
If the user input is "stop", "exit", or "quit",
you MUST immediately output a JSON with:
- action_type: "answer"
- content: "STOPPED"
- acknowledged_observation: "NONE"
and perform NO further reasoning, NO tool calls,
and NO subsequent turns.
```

明确声明：
```
TERMINATION RULE OVERRIDES OBSERVATION ACKNOWLEDGEMENT.
```

#### 2. Runtime 层修改

在 `AgentRuntime.run()` 入口处添加：

```typescript
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
```

**效果**：stop 不进入 REACT，不产生 Observation，不触发下一轮 LLM。

### ✅ 方案 B：ERROR Observation 不再强制 ack

#### 1. 类型定义

在 `types.ts` 中新增：

```typescript
/**
 * Observation 类型分级（v3.1）
 * 用于区分哪些 Observation 需要确认，哪些不需要
 */
export type ObservationKind = 'tool_result' | 'system_note' | 'error' | 'none';

/**
 * 完整的 Observation 接口
 */
export interface Observation {
    kind: ObservationKind;
    content: string;
    timestamp: number;
}
```

#### 2. ContextManager 支持 Observation 类型

在 `contextManager.ts` 中：

```typescript
export class ContextManager {
  private messages: Array<{ 
    role: string; 
    content: string; 
    timestamp: number; 
    metadata?: { kind?: import('./types').ObservationKind } 
  }> = [];
  // ...

  /**
   * 添加 Observation，支持类型分级（v3.1）
   * @param observation 观察内容
   * @param kind Observation 类型：tool_result, system_note, error
   */
  addObservation(observation: string, kind: import('./types').ObservationKind = 'system_note'): void {
    this.addMessage('system', observation);
    // 为最后一条消息添加 kind 元数据
    if (this.messages.length > 0) {
      this.messages[this.messages.length - 1].metadata = { kind };
    }
  }

  /**
   * 获取需要 ACK 的 Observation（排除 error 类型）
   * 这是 v3.1 的核心修复：防止 ERROR 被当成需要确认的 Observation
   */
  getLastAckableObservation(): { role: 'tool' | 'system'; content: string } | null {
    for (let i = this.messages.length - 1; i >= 0; i--) {
      const m = this.messages[i];
      if ((m.role === 'tool' || m.role === 'system') && m.metadata?.kind !== 'error') {
        return { role: m.role as any, content: m.content };
      }
    }
    return null;
  }
}
```

#### 3. Runtime 校验逻辑

在 `AgentRuntime.ts` 中使用 `getLastAckableObservation()`：

```typescript
// === Observation Acknowledgement Gate (v3.1 - 安全版) ===
// ✅ 使用 getLastAckableObservation() 而不是 getLastObservation()
// 这会自动排除 error 类型的 Observation
const lastObs = this.context.getLastAckableObservation();
const ack = (thought.parsedPlan as any)?.acknowledged_observation;

if (lastObs) {
    // 如果有 Observation，检查是否被正确确认
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
}
```

**效果**：ERROR Observation 不会被要求再次确认，彻底杜绝死循环。

### ✅ 方案 C：Prompt 安全升级

在 `llmAdapter.ts` 中更新 Prompt 模板：

```
[SYSTEM PROTOCOL V3.1 - SAFE OBSERVATION ACK - CONTEXT REFERENCE ENABLED]
- ROLE: AUTOMATED EXECUTION AGENT WITH CONTEXT REFERENCE
- OUTPUT: STRICT JSON ONLY
- TALK: FORBIDDEN
- MODE: REACT (THINK -> ACTION -> PERCEIVE)
- CONTEXT REFERENCE: When using information from the provided context, explicitly reference it in your response using [Reference] notation or in the JSON output

OBSERVATION ACKNOWLEDGEMENT (MANDATORY, WITH EXCEPTIONS):
Before proposing any action, you MUST include the field "acknowledged_observation".

RULES:
1. If a valid Tool or System Observation exists, restate it VERBATIM.
2. If NO such Observation exists, output: "acknowledged_observation": "NONE"
3. DO NOT acknowledge:
   - Runtime validation errors
   - ACK-related errors
   - System internal error messages
4. If the user input is "stop" or "halt":
   - Set action_type = "answer"
   - Set acknowledged_observation = "NONE"
   - Do NOT propose further actions

JSON SCHEMA:
{
  "acknowledged_observation": "string | 'NONE'",
  "action_type": "tool_call" | "shell_cmd" | "code_diff" | "answer" | "halt",
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
5. TERMINATION RULE (HIGHEST PRIORITY): If user says "stop", "exit", or "quit", output action_type="answer" with content="STOPPED" and acknowledged_observation="NONE".
```

## Observation Protocol v3.1（Safe）

### Observation 类型定义

```typescript
type Observation =
  | { kind: 'tool_result'; content: string }
  | { kind: 'system_note'; content: string }
  | { kind: 'error'; content: string }
  | { kind: 'none' };
```

### ACK 规则（核心）

| Observation.kind | 是否需要 ACK | 说明 |
|------------------|--------------|------|
| tool_result      | ✅ 必须      | REACT 核心 |
| system_note      | ✅ 必须      | 治理 / 约束 |
| error            | ❌ 禁止 ACK  | 防止错误自循环 |
| none             | ✅ 固定值    | "NONE" |

### ACK 字段语义

```json
"acknowledged_observation": 
  | "NONE"
  | "<verbatim tool/system observation>"
```

**明确禁止**：
- ACK `ERROR:` 开头的内容
- ACK Runtime 校验错误

### Runtime 状态机（正确版本）

```
USER_INPUT
   ↓
[CHECK TERMINATION]───► HALT ✅
   ↓
THINK
   ↓
ACTION
   ↓
TOOL
   ↓
OBSERVATION
   ↓
ACK (once only)
   ↓
THINK
```

**❌ ERROR 不在这个环里**

## 修改的文件

1. **src/engine/agent/types.ts**
   - 新增 `ObservationKind` 类型
   - 新增 `Observation` 接口

2. **src/engine/agent/contextManager.ts**
   - 修改 `messages` 类型，支持 `metadata.kind`
   - 修改 `addObservation()` 方法，支持类型参数
   - 新增 `getLastAckableObservation()` 方法

3. **src/engine/agent/llmAdapter.ts**
   - 更新 Prompt 模板为 V3.1 安全版本
   - 添加终止规则和 ACK 例外

4. **src/engine/agent/AgentRuntime.ts**
   - 在 `run()` 入口添加终止态检查
   - 使用 `getLastAckableObservation()` 替代 `getLastObservation()`
   - 所有错误 Observation 标记为 `'error'` 类型

## 测试建议

### 测试场景 1：正常终止

输入：`stop`

预期行为：
- 系统输出 `🛑 TERMINATION: User requested stop`
- 不进入 REACT 循环
- 直接返回

### 测试场景 2：ERROR 观察

当 AI 忘记 ACK Observation 时：
- 系统生成 ERROR Observation
- ERROR Observation 标记为 `'error'` 类型
- 下一轮不会被要求 ACK ERROR
- AI 正常恢复

### 测试场景 3：正常 ACK 流程

1. AI 执行工具
2. 工具返回结果（tool_result）
3. AI 正确 ACK 工具结果
4. 继续执行

## 总结

### 问题本质

这不是模型问题，而是：
**Observation = 强制 + 无终止态 + 错误自举** 的经典状态机死锁

### 修复效果

✅ 彻底消除 `stop` / `answer` 场景下的死循环  
✅ 保持 Observation ACK 的强约束价值  
✅ 不破坏现有的 REACT / 治理 / 执行体系  
✅ 引入清晰的类型分级机制  

### 关键要点

1. **ERROR 不应该是 Observation** - 错误是 Runtime 内部事件
2. **必须提供终止态** - 没有终止状态的状态机注定会死锁
3. **类型分级是关键** - 不是所有 Observation 都需要相同的处理
4. **Prompt 和 Runtime 必须一致** - 双保险确保安全

---

## 六、VSCode 聊天停止功能实现

### 功能概述

在 VSCode 聊天界面中添加了停止按钮，允许用户在 AI 生成过程中强制停止。

### 实现细节

#### 1. UI 层（sidebar.html）

- 添加了红色停止按钮（带脉冲动画）
- 停止按钮仅在生成过程中显示
- 用户输入框在生成时禁用

```javascript
// 停止按钮样式
#stop-btn {
  background: var(--vscode-errorForeground);
  animation: pulse 1.5s infinite;
}

// 发送时禁用输入框并显示停止按钮
userInput.disabled = true;
sendBtn.style.display = "none";
stopBtn.classList.add("visible");
```

#### 2. ChatViewProvider 层（ChatViewProvider.ts）

- 添加 `AbortController` 管理器
- 处理 `stop` 消息类型
- 取消正在运行的任务

```typescript
private _abortController: AbortController | null = null;

case 'stop':
  if (this._abortController) {
    this._abortController.abort();
    this._abortController = null;
  }
  break;

// 每次新任务前取消旧任务
if (this._abortController) {
  this._abortController.abort();
}
this._abortController = new AbortController();
```

#### 3. VSCodeAgentRuntime 层（runtime.ts）

- 添加 `abortSignal` 参数到 `runChat` 方法
- 传递信号到底层 AgentRuntime

#### 4. AgentRuntime 层（AgentRuntime.ts）

- 添加 `abortSignal` 参数到 `run` 方法
- 在关键位置检查取消信号
- 抛出明确的取消错误

```typescript
if (abortSignal?.aborted) {
  console.log(chalk.red('\n🛑 Execution aborted by user'));
  throw new Error('Execution aborted by user');
}
```

#### 5. LLM 层（llm.ts, llmAdapter.ts）

- 添加 `abortSignal` 参数到 `runLLM` 和 `think` 方法
- 在流式传输时检查取消信号
- 传递信号到 AI 客户端

#### 6. AI 客户端层（client.ts）

- 添加 `abortSignal` 参数到 `callAI_Stream` 方法
- 在每个 chunk 处理时检查取消信号
- 使用 AbortController 中断 HTTP 请求

```typescript
const controller = new AbortController();
if (abortSignal) {
  abortSignal.addEventListener('abort', () => {
    controller.abort();
  });
}

const response = await axios({
  signal: controller.signal,
  // ...
});

// 在流处理中检查
if (controller.signal.aborted) {
  reject(new Error('Stream request aborted'));
}
```

### 修改的文件

**停止功能相关：**
- `src/vscode/webview/sidebar.html` - 添加停止按钮和样式
- `src/vscode/provider/ChatViewProvider.ts` - 添加 AbortController 管理
- `src/vscode/core/runtime.ts` - 传递取消信号
- `src/engine/agent/AgentRuntime.ts` - 添加取消检查
- `src/engine/agent/llmAdapter.ts` - 传递取消信号
- `src/engine/agent/llm.ts` - 检查取消信号
- `src/engine/ai/client.ts` - 实现流取消

**Observation ACK 修复相关：**
- `src/engine/agent/types.ts` - Observation 类型定义
- `src/engine/agent/contextManager.ts` - Observation 类型分级
- `src/engine/agent/llmAdapter.ts` - Prompt v3.1 升级
- `src/engine/agent/AgentRuntime.ts` - 停止态 + 安全 ACK

### 测试建议

#### 测试停止功能

1. **正常停止**
   - 输入一个复杂问题
   - 等待 AI 开始生成
   - 点击停止按钮
   - 预期：生成立即停止，显示"🛑 Generation stopped by user"

2. **连续任务**
   - 发送第一个任务
   - 在生成中发送第二个任务
   - 预期：第一个任务被取消，第二个任务开始

3. **UI 状态**
   - 发送消息：输入框禁用，停止按钮显示
   - 完成或停止：输入框启用，停止按钮隐藏

#### 测试 Observation ACK 修复

见前文测试建议章节。

---

**修复完成时间**: 2026-01-23  
**版本**: v3.1  
**状态**: ✅ 已实施
