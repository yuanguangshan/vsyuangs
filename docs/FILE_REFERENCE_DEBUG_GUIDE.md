# 文件 @ 引用问题调试指南

## 问题描述
无论通过聊天框 @ 引用文件还是通过文件选择器选择，AI 都说看不到文件。

## 已添加的调试日志

为了定位问题，我在以下关键位置添加了详细日志：

### 1. LLMAdapter (`src/engine/agent/llmAdapter.ts`)
```typescript
// 显示 ContextBuffer 是否为空
console.log(`[LLMAdapter] ContextBuffer is NOT EMPTY. Total items: ${contextBuffer.export().length}`);

// 显示每个上下文项的详细信息
allItems.forEach((item, idx) => {
  console.log(`[LLMAdapter] Context Item ${idx + 1}:`, {
    path: item.path,
    alias: item.alias,
    type: item.semantic,
    confidence: item.importance?.confidence,
    tags: item.tags,
    contentLength: item.content?.length || 0
  });
});

// 显示使用的策略和 token 限制
console.log(`[LLMAdapter] Using RANKED strategy with 12000 tokens (streaming mode)`);

// 显示生成的提示词长度
console.log(`[LLMAdapter] Generated context prompt length: ${contextPrompt.length} chars`);

// 如果 ContextBuffer 为空
console.log(`[LLMAdapter] ContextBuffer is EMPTY - no context will be sent to AI!`);
```

### 2. ContextBuffer (`src/engine/agent/contextBuffer.ts`)
```typescript
// 显示 buildPrompt 调用参数
console.log(`[ContextBuffer] buildPrompt called with:`, {
    userInput: userInput?.substring(0, 50) || '(empty)',
    maxTokens,
    strategy,
    totalItems: this.items.length,
    isEmpty: this.isEmpty()
});

// 显示排序后的前 5 个项
console.log(`[ContextBuffer] Items sorted by ${strategy}. Top 5 items:`);
sortedItems.slice(0, 5).forEach((item, idx) => {
    console.log(`[ContextBuffer]   ${idx + 1}. ${item.alias || item.path}`, {
        confidence: item.importance?.confidence,
        tags: item.tags,
        contentLength: item.content?.length || 0
    });
});
```

### 3. ContextAdapter (`src/vscode/core/contextAdapter.ts`)
```typescript
// 显示找到的引用
console.log(`[ContextAdapter] Found ${references.length} references (${uniqueRefs.length} unique): ${uniqueRefs.join(', ')}`);

// 显示成功加载的文件
console.log(`[ContextAdapter] ✅ Added referenced file: ${fileUri.fsPath}`);

// 显示失败加载的文件
console.log(`[ContextAdapter] ⚠️ Failed to read referenced file ${relPath}: ${e}`);
```

### 4. ChatViewProvider (`src/vscode/provider/ChatViewProvider.ts`)
```typescript
// 文件选择器加载文件
console.log(`[ChatViewProvider] ✅ File added to context: ${data.path}`);

// 显示上下文信息到 UI
console.log(`[ChatViewProvider] Sent context: High(${high.length}) Med(${medium.length}) Low(${low.length})`);
```

## 测试步骤

### 测试 1: 通过 @ 引用文件

1. 打开 VS Code 开发者工具（View > Toggle Developer Tools）
2. 切换到 Console 标签页
3. 打开 Yuangs AI 聊天面板
4. 输入：`@package.json 这个项目有哪些依赖？`
5. 提交问题
6. **观察控制台日志**

**期望看到的日志：**
```
[ContextAdapter] Found 1 references (1 unique): @package.json
[ContextAdapter] ✅ Added referenced file: /path/to/package.json
[LLMAdapter] ContextBuffer is NOT EMPTY. Total items: 1
[LLMAdapter] Context Item 1: {
  path: "/path/to/package.json",
  alias: "package.json",
  type: "source_code",
  confidence: 1.0,
  tags: ["user-referenced", "explicit"],
  contentLength: 1234
}
[ContextBuffer] buildPrompt called with: { ... }
[ContextBuffer] Items sorted by ranked. Top 5 items:
[ContextBuffer]   1. package.json { confidence: 1.0, ... }
[LLMAdapter] Using RANKED strategy with 12000 tokens (streaming mode)
[LLMAdapter] Generated context prompt length: 2345 chars
```

**如果看到的日志不同，记录下来并分析。**

### 测试 2: 通过文件选择器选择文件

1. 打开 VS Code 开发者工具
2. 切换到 Console 标签页
3. 打开 Yuangs AI 聊天面板
4. 点击文件选择器图标
5. 选择一个文件（如 `package.json`）
6. **观察控制台日志**

**期望看到的日志：**
```
[ChatViewProvider] ✅ File added to context: package.json
[ContextAdapter] Found 0 references (0 unique): 
[LLMAdapter] ContextBuffer is NOT EMPTY. Total items: 1
[LLMAdapter] Context Item 1: {
  path: "/path/to/package.json",
  alias: "package.json",
  type: "source_code",
  confidence: 1.0,
  tags: ["user-selected", "explicit", "file-panel"],
  contentLength: 1234
}
...
```

### 测试 3: 同时使用两种方式

1. 先通过文件选择器选择 `package.json`
2. 然后在输入框输入：`@tsconfig.json 请解释这个配置`
3. 提交问题
4. **观察控制台日志**

**期望看到 2 个上下文项：**
- 一个来自文件选择器（tags: `["user-selected", "explicit", "file-panel"]`）
- 一个来自 @ 引用（tags: `["user-referenced", "explicit"]`）

## 常见问题诊断

### 问题 A: 日志显示 "ContextBuffer is EMPTY"

**可能原因：**
- ContextBuffer 在 AI 调用前被清空
- Runtime 实例不是同一个，导致 ContextBuffer 不共享

**检查：**
```typescript
// 在 src/vscode/core/runtime.ts 中
// 确认同一个 runtime 实例被复用
if (!this._runtime) {
    this._runtime = new VSCodeAgentRuntime();  // ← 这行只在 _runtime 为 null 时执行
}
```

### 问题 B: 日志显示文件已加载，但 AI 说看不到

**可能原因：**
- 上下文被截断（token 限制）
- 排序策略导致文件不在重要位置
- 文件内容被摘要，只保留了摘要

**检查：**
1. 查看日志中的 `contentLength`
2. 查看 `Generated context prompt length`
3. 查看排序后的前 5 个项是否包含目标文件

### 问题 C: 日志中文件存在，但 confidence 很低

**可能原因：**
- importance 对象未正确设置
- confidence 值被意外覆盖

**检查：**
在日志中查找 `confidence: 1.0`，@ 引用的文件应该有这个值。

## 如何收集调试信息

1. **复制完整控制台日志**
   - 打开开发者工具
   - 右键点击控制台 → "Save as..." 保存为文件
   - 或手动复制相关日志片段

2. **记录用户输入**
   - 记录了什么问题
   - @ 引用或选择了哪个文件
   - AI 的具体回答

3. **截图上下文面板**
   - 如果上下文面板显示了文件，截图保存

## 根据日志定位问题的流程图

```
开始测试
    ↓
查看日志: 文件是否加载到 ContextBuffer？
    ↓ 是
查看日志: ContextBuffer 是否为空？
    ↓ 否
查看日志: buildPrompt 是否被调用？
    ↓ 是
查看日志: 生成的 context prompt 长度？
    ↓ 合理（> 1000 字符）
查看日志: 排序后的前 5 项是否包含目标文件？
    ↓ 是
问题可能在 AI 提示词构造或发送
    ↓ 否
问题在排序或 token 限制
```

## 预期的修复效果

根据之前的修复，应该看到：

1. ✅ 文件被正确加载到 ContextBuffer
2. ✅ ContextBuffer 不为空
3. ✅ buildPrompt 使用 `ranked` 策略
4. ✅ @ 引用的文件有 `confidence: 1.0`（最高优先级）
5. ✅ 文件出现在排序后的前 5 项中
6. ✅ AI 能够读取并分析文件内容

## 如果问题仍然存在

如果按照上述步骤测试后问题仍然存在：

1. **保存完整的控制台日志**
2. **记录具体的测试步骤和期望结果**
3. **提供以下信息：**
   - 使用的文件路径
   - 使用的命令（@ 引用还是文件选择器）
   - 完整的日志输出
   - AI 的具体回答

然后我们可以根据日志进一步定位问题。