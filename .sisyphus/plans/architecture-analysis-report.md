# Yuangs VSCode 扩展 - 项目架构详细分析报告

## 📋 执行摘要

Yuangs AI Agent 是一款深度集成在 VS Code 中的新一代 AI 辅助开发工具，具备完整的 **"思考-治理-执行" (Think-Govern-Execute)** 闭环能力。该扩展采用多层架构设计，通过 WebAssembly 沙箱、上下文银行、智能提示等创新机制，实现了安全可控的自动化开发辅助。

---

## 🏗️ 项目总体架构

### 架构分层

```
┌─────────────────────────────────────────────────────────────────┐
│                    用户界面层 (UI Layer)                         │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Webview Sidebar (sidebar.html + context-panel-functions)│  │
│  │  - 玻璃拟态聊天界面                                      │  │
│  │  - 实时流式渲染 (Marked.js)                              │  │
│  │  - 上下文/文件面板                                       │  │
│  │  - Diff Apply 一键应用                                   │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              ↕
┌─────────────────────────────────────────────────────────────────┐
│                 VS Code 扩展适配层                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │Extension.ts  │  │ChatViewProvider│ │AskAI Command │        │
│  │ - 激活入口    │  │ - Webview 管理 │  │ - 快捷命令   │        │
│  │ - 命令注册    │  │ - 消息路由    │  │              │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │VSCodeRuntime │  │ContextAdapter│  │ExecutorAdapter│       │
│  │ - Runtime桥  │  │ - 上下文收集  │  │ - 执行适配   │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
└─────────────────────────────────────────────────────────────────┘
                              ↕
┌─────────────────────────────────────────────────────────────────┐
│                     核心引擎层 (Engine)                         │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              AgentRuntime (主运行时)                      │  │
│  │  - REACT 循环 (Think → Act → Observe)                   │  │
│  │  - Observation 确认机制                                    │  │
│  │  - Context Diff 检测                                       │  │
│  │  - 晋升机制 (Context → Skill)                              │  │
│  └──────────────────────────────────────────────────────────┘  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ContextMgr│  │LLMAdapter│  │Governance│  │Executor  │  │
│  │- 上下文  │  │- LLM调用  │  │- 治理    │  │- 执行器  │  │
│  │  管理    │  │          │  │  验证    │  │          │  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ContextBank│  │ContextBuffer│ │DSL Engine│  │Skills    │  │
│  │- 跨会话  │  │- 短期缓冲 │  │- 查询    │  │- 技能库  │  │
│  │  存储    │  │          │  │          │  │          │  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              ↕
┌─────────────────────────────────────────────────────────────────┐
│                  VS Code 运行时层 (Runtime)                      │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              VSCodeExecutor (执行适配器)                   │  │
│  │  - readFile/writeFile/listFiles                          │  │
│  │  - runCommand (终端执行)                                  │  │
│  │  - applyDiff (3-Phase Git 执行)                           │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              ↕
┌─────────────────────────────────────────────────────────────────┐
│                   外部服务与资源                                  │
│  - LLM API (OpenAI / Custom Proxy)                            │
│  - Git 命令                                                    │
│  - 文件系统                                                    │
│  - WASM 沙箱                                                   │
└─────────────────────────────────────────────────────────────────┘
```

### 代码规模统计

- **TypeScript 文件数**: 40 个
- **代码总行数**: ~10,000 行
- **agent 模块文件数**: 40 个
- **主要目录**: src/engine, src/vscode, src/runtime

---

## 📊 核心模块详细分析

### 1. 用户界面层

#### 1.1 Webview Sidebar (`src/vscode/webview/sidebar.html`)

**职责**:
- 聊天界面渲染与交互
- 上下文面板展示
- 文件浏览器集成
- Diff 代码块识别与 Apply 按钮渲染

**核心特性**:

1. **玻璃拟态设计**:
   ```css
   .ai-message {
     background: var(--bubble-ai);
     backdrop-filter: blur(10px);
   }
   ```

2. **实时流式渲染**:
   ```javascript
   // 实时 Markdown 渲染 + 光标闪烁
   currentAiMessageElement.innerHTML = 
     marked.parse(textToRender) + '<span class="cursor"></span>';
   ```

3. **智能 Diff 识别**:
   - 检测 `+++` / `---` / `@@` 标记
   - 自动解析 unified diff 格式
   - 悬停显示 Apply 按钮

4. **上下文面板**:
   - 按置信度分组显示
   - 支持搜索和标签过滤
   - 显示使用统计 (token 数、使用次数)

5. **文件浏览器**:
   - 树形结构展示
   - 搜索功能
   - 点击引用自动读取

#### 1.2 ChatViewProvider (`src/vscode/provider/ChatViewProvider.ts`)

**职责**:
- Webview 生命周期管理
- 消息路由与历史持久化
- 与 AgentRuntime 的桥接
- Diff Apply 的后端实现

**关键方法**:

| 方法 | 功能 |
|------|------|
| `resolveWebviewView()` | 初始化 Webview，设置消息监听器 |
| `handleAgentTask()` | 处理用户输入，调用 AgentRuntime |
| `handleApplyDiff()` | 解析并应用 Diff 修改 |
| `sendContextToUI()` | 推送上下文信息到 UI 面板 |
| `exportChatHistory()` | 导出聊天记录为 Markdown |

**数据流转**:
```
User Input 
  → Webview PostMessage 
  → handleAgentTask()
  → VSCodeAgentRuntime.runChat()
  → 流式回调 (chunk) 
  → Webview PostMessage (aiChunk)
  → 实时渲染
```

---

### 2. VS Code 扩展适配层

#### 2.1 Extension.ts (`src/vscode/extension.ts`)

**职责**:
- 扩展激活入口
- 注册 VS Code 命令
- 初始化 ChatViewProvider

```typescript
export function activate(context: vscode.ExtensionContext) {
  const provider = new ChatViewProvider(context);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(ChatViewProvider.viewType, provider)
  );
}
```

#### 2.2 VSCodeAgentRuntime (`src/vscode/core/runtime.ts`)

**职责**:
- AgentRuntime 的 VS Code 包装器
- 通过 ContextAdapter 收集 VS Code 上下文
- 计算 Context Diff 并触发 UI 更新

**关键流程**:
```typescript
async runChat(userInput, stream, model, onContextInitialized, abortSignal) {
  // 1. 收集 VS Code 上下文
  await this.contextAdapter.collectContext();
  
  // 2. 解析用户引用 (@file, #symbol)
  await this.contextAdapter.resolveUserReferences(userInput);
  
  // 3. 计算 Diff，决定是否更新 UI
  const diff = diffContext(this.lastContextSnapshot, snapshot);
  if (diff.added.length > 0 || diff.changed.length > 0) {
    onContextInitialized();
  }
  
  // 4. 运行底层 AgentRuntime
  await this.runtime.run(userInput, 'chat', stream, model, abortSignal);
}
```

---

### 3. 核心引擎层

#### 3.1 AgentRuntime (`src/engine/agent/AgentRuntime.ts`)

**职责**:
- 实现 REACT 循环 (Think → Act → Observe)
- Context Diff 与生命周期管理
- 晋升机制 (Context → Skill)

**核心 REACT 循环**:
```typescript
while (turnCount < maxTurns) {
  // 1. Observe: 计算上下文快照与 Diff
  const snapshot = snapshotFromBuffer(context.getContextBuffer());
  const contextDiff = diffContext(lastSnapshot, snapshot);
  
  // 2. Think: LLM 思考与决策
  const thought = await LLMAdapter.think(messages, mode, onChunk, model, 
                                          policy, context, abortSignal);
  
  // 3. Observation 确认 (v3.1 关键修复)
  const lastObs = context.getLastAckableObservation();
  const ack = thought.parsedPlan?.acknowledged_observation;
  if (lastObs && !ack) {
    context.addObservation("ERROR: You MUST acknowledge the observation", 'error');
    continue;
  }
  
  // 4. Act: 治理验证与执行
  const decision = await GovernanceService.adjudicate(action);
  if (decision.status === 'approved') {
    const result = await ToolExecutor.execute(action);
    context.addToolResult(action.type, result.output);
  }
}
```

**关键特性**:

1. **Observation 确认门控**:
   - 使用 `getLastAckableObservation()` 排除 error 类型
   - 防止死循环

2. **Context 晋升**:
   ```typescript
   const promotedSkill = ContextToSkillPromotionRules.evaluatePromotion(item);
   if (promotedSkill) {
     await this.saveSkill(promotedSkill);
   }
   ```

3. **回顾性分析**:
   - 生成 Context 引用回溯报告
   - 分析 ContextItem 生命周期
   - 导出高价值上下文到 Context Bank

#### 3.2 ContextManager (`src/engine/agent/ContextManager.ts`)

**职责**:
- 管理对话历史消息
- 协调 ContextBuffer 和 ContextBank
- Observation 类型管理

**关键接口**:

```typescript
class ContextManager {
  // 消息管理
  addMessage(role, content)
  addToolResult(toolName, result)
  addObservation(observation, kind) // kind: 'tool_result' | 'system_note' | 'error'
  
  // Context Buffer
  getContextBuffer()
  addContextItem(item)
  buildContextPrompt(userInput, options)
  
  // Context Bank
  async initializeContextBank()
  async importFromContextBank(options)
  async exportToContextBank(projectScope)
  async recordBankUsage(success)
  
  // DSL 查询
  async queryDSL(dslQuery)
  async getDSLContextForInput(input)
}
```

#### 3.3 ContextBuffer (`src/engine/agent/contextBuffer.ts`)

**职责**:
- 短期上下文缓冲 (单会话)
- Token 限制与智能修剪
- 重要性评分与摘要

**ContextItem 结构**:
```typescript
interface ContextItem {
  schemaVersion: 1
  type: 'file' | 'directory'
  path: string
  stableId: string          // 跨 session 稳定标识
  content: string
  summary?: string
  tokens: number
  
  importance?: {
    useCount: number
    successCount: number
    failureCount: number
    confidence: number
    lastUsed: number
  }
  
  semantic?: 'source_code' | 'log' | 'config' | 'documentation'
  tags?: string[]
  usageStats?: {
    referencedCount: number
    verifiedUseful: number
    verifiedNotUseful: number
  }
}
```

**智能修剪策略**:
```typescript
private async trimIfNeeded() {
  while (totalTokens() > maxTokens) {
    // 1. 找未摘要的最低重要性项目
    const candidates = items.filter(i => !i.summarized)
                           .sort((a, b) => computeContextImportance(a) - computeContextImportance(b));
    
    if (candidates.length > 0) {
      // 2. 执行摘要
      const summary = await summarizeContext(candidate);
      candidate.summary = summary;
      candidate.tokens = estimateTokens(summary);
    } else {
      // 3. 删除最低重要性项目
      items.sort((a, b) => computeContextImportance(a) - computeContextImportance(b));
      items.shift();
    }
  }
}
```

**Prompt 构建**:
```typescript
buildPrompt(userInput, options) {
  // 按置信度分组
  const highConfidenceItems = items.filter(i => confidence > 0.7);
  const mediumConfidenceItems = items.filter(i => 0.3 < confidence <= 0.7);
  const lowConfidenceItems = items.filter(i => confidence <= 0.3);
  
  // 按语义类型进一步分组
  const semanticGroups = { source_code: [], log: [], config: [], ... };
  
  // 构建分块上下文
  return `
# Background Knowledge (Source Code - High Confidence)
[Reference] file: src/AgentRuntime.ts
...

# Supporting Information (Config - Medium Confidence)
...

# Archived References (Low Confidence)
...

# Task Instructions
Based on the provided context, answer user's question.
User Question: ${userInput}
  `;
}
```

#### 3.4 ContextBank (`src/engine/agent/contextBank.ts`)

**职责**:
- 跨会话上下文存储
- 高价值上下文沉淀
- 使用统计与清理

**存储结构**:
```
~/.yuangs/context-bank/
├── index.json           # 全局索引
├── items/               # 上下文项目存储
│   ├── bank_uuid1.json
│   ├── bank_uuid2.json
│   └── ...
├── snapshots/           # 快照
└── stats/
    └── usage.log        # 使用日志
```

**高价值过滤规则**:
```typescript
filterHighValueItems(items) {
  return items.filter(item => {
    const { useCount, successCount } = item.importance;
    const totalInteractions = useCount + failureCount;
    const successRate = totalInteractions > 0 ? successCount / totalInteractions : 0;
    
    // 触发条件：使用次数≥3 且 成功率≥0.6
    return useCount >= 3 && successRate >= 0.6;
  });
}
```

**查询策略**:
- `ranked`: 按置信度排序
- `recent`: 按最近使用时间
- `relevance`: 基于路径关键词匹配

---

### 4. 治理系统

#### 4.1 GovernanceService (`src/engine/agent/governance.ts`)

**职责**:
- 加载 policy.yaml 配置
- WASM 物理层核验
- 逻辑层验证
- 人工干预触发

**三阶段治理**:
```typescript
async adjudicate(action) {
  // 1. WASM 物理层核验
  const wasmResult = WasmGovernanceBridge.evaluate(action, rules, ledger);
  if (wasmResult.effect === 'deny') {
    return { status: 'rejected', by: 'policy' };
  }
  
  // 2. 逻辑层核验
  const logicResult = evaluateProposal(action, rules, ledger);
  if (logicResult.effect === 'deny') {
    return { status: 'rejected', by: 'policy' };
  }
  
  // 3. 人工干预 (VS Code 弹窗)
  if (logicResult.effect === 'require_approval') {
    return await requestHumanApproval(action);
  }
  
  return { status: 'approved', by: 'policy' };
}
```

#### 4.2 Policy 配置 (`policy.yaml`)

```yaml
rules:
  - id: block-root-rm
    when:
      pattern: "rm -rf /"
    effect: deny
    reason: "WASM_SANDBOX: 禁止删除根目录"
  
  - id: require-human-sudo
    when:
      pattern: "sudo "
    effect: require_approval
    reason: "提权操作需要人工二次核验"
  
  - id: rate-limit-shell
    when:
      type: shell_cmd
      max_per_minute: 5
    effect: allow
    reason: "防止 AI 陷入循环执行命令"
```

---

### 5. 执行系统

#### 5.1 ToolExecutor (`src/engine/agent/executor.ts`)

**职责**:
- 分发 action 到具体执行器
- 统一执行结果格式

**支持的动作类型**:
```typescript
switch (type) {
  case 'tool_call':
    return await executeTool(payload); // read_file, write_file, list_files, skill_create
  
  case 'shell_cmd':
    return await VSCodeExecutor.runCommand(payload.command);
  
  case 'code_diff':
    return await VSCodeExecutor.applyDiff(payload.diff);
  
  case 'answer':
    return { success: true, output: payload.content };
}
```

#### 5.2 VSCodeExecutor (`src/runtime/vscode/VSCodeExecutor.ts`)

**职责**:
- 将执行请求转换为 VS Code API 调用
- 处理文件读写、终端执行、Diff 应用

**三阶段 Diff 执行**:
```typescript
async applyDiff(diff) {
  // Phase 1: Pre-Exec (Snapshot/Validation)
  const preHash = await execCommand("git rev-parse HEAD");
  
  // Phase 2: Exec (Application)
  await execCommandWithInput("git apply --index", diff);
  
  // Phase 3: Post-Exec (Validation & Commit)
  await execCommand(`git commit -m "${commitMessage}"`);
  const postHash = await execCommand("git rev-parse HEAD");
  
  return `[SUCCESS] Pre: ${preHash.substring(0,7)} Post: ${postHash.substring(0,7)}`;
}
```

---

## 🔄 数据流转流程

### 完整请求-响应链路

```
┌─────────────────────────────────────────────────────────────────────┐
│ 1. 用户输入                                                        │
│    - 在 Webview 输入框输入消息                                      │
│    - 可能包含文件引用 (@file.ts) 或符号引用 (#functionName)         │
└─────────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────────┐
│ 2. Webview → Extension 通信                                        │
│    - vscode.postMessage({ type: 'ask', value: userInput })        │
└─────────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────────┐
│ 3. ChatViewProvider.handleAgentTask()                              │
│    - 创建 AbortController (支持取消)                               │
│    - 调用 VSCodeAgentRuntime.runChat()                             │
└─────────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────────┐
│ 4. VSCodeAgentRuntime.runChat()                                    │
│    4.1 收集 VS Code 上下文                                          │
│        - 通过 ContextAdapter 收集:                                 │
│          - 活动编辑器内容                                           │
│          - 工作区文件列表                                           │
│          - Git 状态                                                │
│          - 诊断信息                                                │
│        - 解析用户引用 (@file, #symbol)                              │
│    4.2 计算 Context Diff                                           │
│        - snapshotFromBuffer() → contextDiff()                        │
│        - 如果有变化，调用 onContextInitialized() 推送到 UI          │
└─────────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────────┐
│ 5. AgentRuntime.run() - REACT 循环开始                             │
│    ┌───────────────────────────────────────────────────────────┐   │
│    │ Turn 1:                                                  │   │
│    │   5.1 DSL 查询与 Context Bank 加载                         │   │
│    │       - 解析用户输入中的 DSL 查询                          │   │
│    │       - 从 ContextBank 查询相关上下文                       │   │
│    │       - 将匹配的上下文添加到 ContextBuffer                 │   │
│    │                                                          │   │
│    │   5.2 构建消息上下文                                       │   │
│    │       - ContextBuffer.buildPrompt()                        │   │
│    │       - 分组: High/Medium/Low Confidence                   │   │
│    │       - 按语义类型: Source Code / Config / Log            │   │
│    │                                                          │   │
│    │   5.3 LLM 调用                                           │   │
│    │       - LLMAdapter.think()                               │   │
│    │       - 流式输出: onChunk(chunk)                          │   │
│    │       - 通过 Webview 实时推送到 UI                        │   │
│    │                                                          │   │
│    │   5.4 Observation 确认                                    │   │
│    │       - 获取最后一个可确认的 Observation                 │   │
│    │       - 检查 LLM 是否正确确认                             │   │
│    │       - 如果未确认，添加 ERROR Observation，continue      │   │
│    │                                                          │   │
│    │   5.5 Action 治理                                        │   │
│    │       - GovernanceService.adjudicate(action)              │   │
│    │       - WASM 物理层核验                                    │   │
│    │       - 逻辑层验证                                         │   │
│    │       - 人工审批 (VS Code 弹窗)                            │   │
│    │                                                          │   │
│    │   5.6 Action 执行                                        │   │
│    │       - ToolExecutor.execute(action)                     │   │
│    │       - 通过 VSCodeExecutor 执行:                         │   │
│    │         - read_file/write_file/list_files                │   │
│    │         - runCommand (终端)                               │   │
│    │         - applyDiff (Git 三阶段执行)                       │   │
│    │                                                          │   │
│    │   5.7 记录 Tool Result                                   │   │
│    │       - context.addToolResult(type, output)               │   │
│    │       - 更新 ContextItem 重要性                          │   │
│    │       - 记录到 ContextBank                               │   │
│    │                                                          │   │
│    │   5.8 判断是否完成                                        │   │
│    │       - 如果 LLM 返回 isDone 或 type === 'answer'         │   │
│    │       - 触发回顾性分析:                                    │   │
│    │         - generateReferenceRetrospective()                │   │
│    │         - analyzeContextLifecycle()                       │   │
│    │         - 评估晋升 (Context → Skill)                     │   │
│    │         - exportToContextBank()                           │   │
│    │       - 退出循环                                          │   │
│    │       - 否则继续下一轮 Turn                                │   │
│    └───────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────────┐
│ 6. 流式输出到 UI                                                   │
│    - Extension → Webview: { type: 'aiChunk', value: chunk }     │
│    - 实时 Markdown 渲染                                           │
│    - 光标闪烁效果                                                  │
└─────────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────────┐
│ 7. 完成与上下文推送                                               │
│    - { type: 'done' }                                            │
│    - { type: 'contextUpdate', value: contextItems }              │
│    - UI 显示上下文面板                                            │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🌟 项目亮点与创新

### 1. "思考-治理-执行" 闭环

**传统 AI 助手的局限**:
- 只能"思考" (回答问题)
- 无法真正"执行" (修改文件、运行命令)
- 缺乏安全边界

**Yuangs 的创新**:
```
思考 → 治理 → 执行 → 观察 → (循环)
```

- **思考**: LLM 智能拆解任务
- **治理**: WASM 沙箱 + 人工审批
- **执行**: 真实文件操作、终端执行
- **观察**: Observation 确认机制

### 2. Observation 确认机制

**问题**: AI 可能忽略重要信息，导致重复执行或错误

**解决方案**:
```typescript
const lastObs = context.getLastAckableObservation();
const ack = thought.parsedPlan?.acknowledged_observation;

if (lastObs && (!ack || ack === 'NONE')) {
  // v3.1: 使用 error 类型，防止死循环
  context.addObservation(
    "ERROR: You MUST acknowledge the observation", 
    'error'
  );
  continue; // 不执行 action
}
```

**亮点**:
- 强制 AI 确认重要 Observation
- 使用 `error` 类型防止死循环
- 支持宽松匹配 (只要求包含部分内容)

### 3. Context 智能管理

#### 3.1 ContextBuffer (短期)

- **Token 限制**: 32,000 tokens (~12.8 万字符)
- **智能修剪**:
  1. 先摘要 (summarizeContext)
  2. 再删除 (按重要性)
- **重要性评分**:
  ```typescript
  const score = baseScore * useFactor * freshnessFactor * (1 + explicitRefFactor * 0.1);
  ```

#### 3.2 ContextBank (长期)

- **高价值过滤**:
  - `useCount >= 3 && successRate >= 0.6`
- **跨会话复用**:
  - 按项目作用域 (projectScope) 分组
  - 支持快照与恢复
- **使用统计**:
  - 记录每次使用的成功/失败
  - 动态调整置信度

#### 3.3 Prompt 构建

- **分层展示**:
  ```
  # Background Knowledge (High Confidence)
  [Reference] file: ...
  
  # Supporting Information (Medium Confidence)
  
  # Archived References (Low Confidence)
  ```
- **语义分组**: Source Code / Config / Log / Documentation
- **动态截断**: 按 token 限制智能截断

### 4. 三阶段 Diff 执行

**问题**: 直接应用 Diff 可能破坏工作区

**解决方案**:
```typescript
// Phase 1: Pre-Exec (Snapshot/Validation)
const preHash = await execCommand("git rev-parse HEAD");

// Phase 2: Exec (Application)
await execCommandWithInput("git apply --index", diff);

// Phase 3: Post-Exec (Validation & Commit)
await execCommand(`git commit -m "${commitMessage}"`);
const postHash = await execCommand("git rev-parse HEAD");
```

**亮点**:
- 保留提交历史
- 可回滚
- 自动提交

### 5. 晋升机制 (Context → Skill)

**触发条件**:
```typescript
if (useCount >= 5 && successRate >= 0.8 && summaryQuality >= 0.9) {
  const skill = {
    name: `pattern_${path.replace(/\W/g, '_')}`,
    description: `Auto-promoted from context: ${path}`,
    template: content,
    metadata: { promotionCriteria: {...} }
  };
  addSkill(skill);
}
```

**优势**:
- 自动沉淀有价值模式
- 跨项目复用
- 持续学习

### 6. UI/UX 创新

#### 6.1 玻璃拟态设计

```css
.ai-message {
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

#### 6.2 智能文本选择

```javascript
document.addEventListener("mouseup", () => {
  const selection = window.getSelection();
  const selectedText = selection.toString().trim();
  if (selectedText && chatContainer.contains(parentElement)) {
    userInput.value = selectedText;  // 自动填入
    selection.removeAllRanges();
  }
});
```

#### 6.3 Diff Apply 一键应用

- 悬停显示 Apply 按钮
- 支持统一 diff 和简单 diff
- 自动创建/修改文件

#### 6.4 实时流式渲染

```javascript
// 实时渲染 + 光标
currentAiMessageElement.innerHTML = 
  marked.parse(textToRender) + '<span class="cursor"></span>';

// 未闭合代码块临时修复
const codeBlockCount = (text.match(/```/g) || []).length;
if (codeBlockCount % 2 !== 0) {
  text += "\n```";
}
```

### 7. 模块化架构

**平台无关的引擎层** (`src/engine`):
- `AgentRuntime`: 核心 REACT 循环
- `ContextManager`: 上下文管理
- `GovernanceService`: 治理服务
- `ToolExecutor`: 执行分发

**VS Code 适配层** (`src/vscode`, `src/runtime`):
- `ChatViewProvider`: UI 管理
- `VSCodeAgentRuntime`: Runtime 桥接
- `VSCodeExecutor`: 执行适配

**优势**:
- 易于移植到其他平台 (JetBrains, Cursor 等)
- 清晰的职责划分
- 便于单元测试

---

## 🔒 安全机制

### 1. WASM 沙箱

- **物理隔离**: 规则引擎编译为 WebAssembly
- **高性能**: 二进制执行，速度快
- **不可篡改**: 编译后无法修改

### 2. 策略热加载

```yaml
# policy.yaml
rules:
  - id: block-rm-rf
    pattern: "rm -rf .*"
    effect: deny
```

- 支持正则表达式匹配
- 三种效果: `allow`, `deny`, `require_approval`
- 运行时动态加载

### 3. 人工审批

```typescript
const choice = await vscode.window.showInformationMessage(
  `Agent wants to execute ${action.type}`,
  { modal: true },
  'Approve', 'Reject'
);
```

- 关键操作强制人工确认
- VS Code 原生弹窗
- Modal 模式防止误操作

### 4. Git 三阶段执行

- Pre-Exec: 快照当前状态
- Exec: 应用 Diff
- Post-Exec: 验证并提交
- 可回滚: `git reset --hard`

### 5. 风险评估

```typescript
interface RiskEntry {
  type: string        // shell_cmd, tool_call
  count: number       // 执行次数
  lastUsed: number    // 最后使用时间
  failureRate: number // 失败率
}
```

- 记录每次执行的风险
- 动态调整限制
- 防止滥用

---

## 📈 可扩展性设计

### 1. 技能系统

```typescript
interface Skill {
  name: string
  description: string
  template: string        // 技能模板
  metadata: {
    promotionCriteria?: {
      successCount: number
      successRate: number
      summaryQuality: number
    }
    tags: string[]
  }
  successCount: number
  confidence: number
  enabled: boolean
}
```

- 支持手动创建技能
- 自动晋升机制
- 灵活的元数据

### 2. DSL 查询引擎

```
# 示例 DSL
context:source_code AND summaryQuality:>0.8 AND tags:("build", "infra")
```

- 支持布尔运算 (AND, OR, NOT)
- 支持比较运算符 (>, >=, <, <=)
- 支持数组匹配

### 3. 插件化工具

```typescript
// 扩展新工具
case 'custom_tool':
  return await customToolExecutor(params);
```

- 易于添加新工具
- 统一的执行接口
- 支持异步执行

---

## 🚀 未来优化方向

### 1. 性能优化

- **增量编译**: 只编译变更的 WASM 模块
- **缓存优化**: 缓存 LLM 响应、Context 查询结果
- **并行执行**: 并行调用多个工具

### 2. 上下文优化

- **语义检索**: 使用向量数据库增强相关性
- **上下文压缩**: 使用更先进的摘要算法
- **动态调整**: 根据任务复杂度动态调整上下文大小

### 3. UI 增强

- **暗色模式**: 支持主题切换
- **快捷键**: 支持键盘快捷操作
- **多标签页**: 支持多个对话标签

### 4. 治理增强

- **规则可视化**: 可视化策略规则
- **审计日志**: 记录所有治理决策
- **时间机器**: 恢复到任意历史状态

### 5. 技能系统

- **技能市场**: 共享和发现技能
- **技能版本管理**: 版本控制和回滚
- **技能依赖**: 支持技能之间的依赖关系

---

## 📚 技术栈总结

| 类别 | 技术 |
|------|------|
| **语言** | TypeScript |
| **构建工具** | Webpack, TSC |
| **UI 渲染** | Marked.js (Markdown), 自定义 CSS |
| **LLM 集成** | 自定义 LLMAdapter (支持 OpenAI / Custom Proxy) |
| **沙箱** | AssemblyScript (WASM) |
| **VS Code API** | @types/vscode |
| **文件系统** | Node.js fs/promises |
| **Git 集成** | child_process.exec |
| **配置管理** | js-yaml |
| **输入验证** | zod |

---

## 🎯 总结

Yuangs VSCode 扩展是一个**架构精良、安全可控、用户友好**的 AI 辅助开发工具。其核心优势在于:

1. **完整的闭环能力**: 从思考到执行，一气呵成
2. **强大的上下文系统**: 短期缓冲 + 长期银行 + 智能检索
3. **严格的安全机制**: WASM 沙箱 + 人工审批 + Git 三阶段执行
4. **优雅的 UI/UX**: 玻璃拟态 + 实时流式 + 智能交互
5. **高度可扩展**: 模块化设计 + 技能系统 + DSL 查询

该架构为未来扩展到其他 IDE (JetBrains, Cursor 等) 打下了坚实基础，也为 AI 辅助开发领域提供了一个**安全可控**的参考实现。

---

## 📄 相关文档

- `README.md`: 用户文档
- `CHANGELOG.md`: 变更日志
- `QUICK_REFERENCE.md`: 快速参考
- `policy.yaml`: 默认治理策略
- `src/engine/agent/AgentRuntime.ts`: 核心运行时
- `src/engine/agent/contextBuffer.ts`: 上下文缓冲
- `src/engine/agent/contextBank.ts`: 上下文银行

