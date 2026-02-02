# @ 引用功能测试指南

## 🎯 测试目标
验证聊天输入框中的 `@filename` 引用功能是否正常工作。

## 📋 测试步骤

### 1. 基础引用测试

**测试命令：**
```
@package.json 请告诉我这个项目的依赖有哪些？
```

**预期行为：**
1. ✅ Console 输出：`[ContextAdapter] 🔍 Parsing user input for @ references: "..."`
2. ✅ Console 输出：`[ContextAdapter] ✅ Found 1 references (1 unique): @package.json`
3. ✅ Console 输出：`[ContextAdapter] ✅ Direct path match found: /path/to/package.json`
4. ✅ Console 输出：`[ContextAdapter] ✅ Added referenced file to context: /path/to/package.json (XXXX chars)`
5. ✅ 状态栏显示：`Yuangs AI: Loaded file: package.json`（持续5秒）
6. ✅ AI 回复中能看到 package.json 的内容

**如果失败，检查：**
- [ ] 文件路径是否正确
- [ ] Console 中是否有错误日志
- [ ] 文件是否在 `node_modules` 中（会被自动忽略）

---

### 2. 模糊匹配测试

**测试命令：**
```
@README 分析项目文档
```

**预期行为：**
1. ✅ Console 输出：`[ContextAdapter] 🔍 Fuzzy search found X match(es) for "README", using: /path/to/README.md`
2. ✅ Console 输出：`[ContextAdapter] ✅ Added referenced file to context: ...`
3. ✅ AI 能够分析 README 内容

**如果失败：**
- Console 会输出：`[ContextAdapter] ❌ Fuzzy search found 0 matches for "README"`
- 检查工作区中是否有名为 README 的文件

---

### 3. 路径引用测试

**测试命令：**
```
@src/engine/agent/AgentRuntime.ts 解释这个文件的作用
```

**预期行为：**
1. ✅ Console 输出：`[ContextAdapter] ✅ Direct path match found: .../AgentRuntime.ts`
2. ✅ Console 输出：`[ContextAdapter] ✅ Added referenced file to context: ...`
3. ✅ AI 能够准确解释 AgentRuntime.ts 的功能

---

### 4. 多文件引用测试

**测试命令：**
```
@package.json @tsconfig.json 比较这两个配置文件
```

**预期行为：**
1. ✅ Console 输出：`[ContextAdapter] ✅ Found 2 references (2 unique): @package.json, @tsconfig.json`
2. ✅ 两个文件都被添加到上下文
3. ✅ 状态栏显示：`Yuangs AI: Loaded 2 files: package.json, tsconfig.json`
4. ✅ AI 能够比较两个文件

---

## 🔍 调试日志说明

### 正常流程日志

```
[ContextAdapter] 🔍 Parsing user input for @ references: "@package.json..."
[ContextAdapter] ✅ Found 1 references (1 unique): @package.json
[ContextAdapter] 📄 Processing reference: "package.json"
[ContextAdapter] ✅ Direct path match found: /Users/ygs/yuangs-vscode/package.json
[ContextAdapter] ✅ Added referenced file to context: /Users/ygs/yuangs-vscode/package.json (1234 chars)
[ContextAdapter] ✅ Successfully loaded: Loaded file: package.json
```

### 常见错误日志

#### 错误1：未找到引用
```
[ContextAdapter] ❌ No @ references found in input
```
**原因：** 输入中没有 `@` 符号，或者格式不正确

#### 错误2：文件不存在
```
[ContextAdapter] ⚠️ Direct path failed for "nonexistent.ts": ...
[ContextAdapter] ❌ Fuzzy search found 0 matches for "nonexistent.ts"
[ContextAdapter] ⚠️ Referenced file not found: nonexistent.ts
```
**原因：** 文件不存在或路径错误

#### 错误3：模糊搜索失败（路径包含分隔符）
```
[ContextAdapter] 📄 Processing reference: "src/some/file.ts"
[ContextAdapter] ✅ Direct path match found: /path/to/src/some/file.ts
```
**正常行为：** 包含路径的引用会尝试直接匹配，不会进行模糊搜索

#### 错误4：文件在 node_modules 中
```
[ContextAdapter] ⚠️ Referenced file not found: package.json
```
**原因：** 模糊搜索会跳过 `node_modules` 目录

---

## 🐛 故障排查

### 问题1：@ 引用完全不工作

**检查清单：**
1. ✅ 打开 VS Code 的"输出"面板，选择"扩展宿主"或"Yuangs AI"频道
2. ✅ 发送包含 `@` 的消息
3. ✅ 查看是否有 `[ContextAdapter] 🔍 Parsing user input...` 日志
4. ✅ 如果没有此日志，说明 `resolveUserReferences` 方法未被调用
   - 检查 `src/vscode/core/runtime.ts` 中的 `runChat` 方法
   - 确认 `await this.contextAdapter.resolveUserReferences(userInput)` 被执行

### 问题2：找到引用但文件未加载

**检查清单：**
1. ✅ 查看是否有 `[ContextAdapter] ✅ Direct path match found` 日志
2. ✅ 查看是否有 `[ContextAdapter] ✅ Added referenced file to context` 日志
3. ✅ 如果没有，检查文件读取是否有错误
   - 查看 `Failed to read referenced file` 日志
   - 检查文件是否有读取权限

### 问题3：文件加载了但 AI 看不到

**检查清单：**
1. ✅ 查看是否有 `[LLMAdapter] ContextBuffer is NOT EMPTY` 日志
2. ✅ 查看是否有 `[LLMAdapter] Generated context prompt length: XXX chars` 日志
3. ✅ 如果 ContextBuffer 为空，说明文件没有被正确添加到上下文
   - 检查 `contextManager.addContextItemAsync` 是否成功
4. ✅ 如果有上下文但 AI 看不到，检查：
   - `[LLMAdapter] Context Item X:` 日志中的 `contentLength`
   - 确认文件内容不为空

---

## 📊 上下文验证

### 验证方法1：直接询问 AI

**提问：**
```
你现在能看到哪些文件？请列出所有引用的文件路径。
```

**预期回复：**
- 如果看到 `package.json`，列出它的内容摘要
- 如果没有看到任何文件，回复"我没有看到任何引用的文件"

### 验证方法2：检查 ContextBuffer 日志

**关键日志：**
```
[LLMAdapter] ContextBuffer is NOT EMPTY. Total items: 5
[LLMAdapter] Context Item 1: {
  path: '/path/to/package.json',
  alias: '@package.json',
  type: 'source_code',
  confidence: 1.0,
  tags: ['user-referenced', 'explicit'],
  contentLength: 1234
}
```

**说明：**
- `confidence: 1.0` - 用户引用的文件，优先级最高
- `tags: ['user-referenced', 'explicit']` - 确认是显式引用
- `contentLength` - 文件内容长度，应大于0

---

## 🎯 成功标准

### ✅ 完全成功的标志

1. **文件加载成功：**
   - ✅ 状态栏显示加载成功
   - ✅ Console 显示添加成功
   - ✅ 文件内容长度大于0

2. **上下文注入成功：**
   - ✅ LLMAdapter 日志显示 ContextBuffer 非空
   - ✅ Context Item 列表中包含引用的文件
   - ✅ confidence 为 1.0（显式引用）

3. **AI 能够访问：**
   - ✅ AI 回复包含文件内容
   - ✅ AI 能够准确回答关于文件的问题
   - ✅ AI 不会说"看不到文件"

---

## 📝 测试报告模板

```
## 测试时间：YYYY-MM-DD HH:mm:ss

### 测试1：基础引用
- 测试命令：@package.json 请告诉我这个项目的依赖有哪些？
- 文件加载：✅ / ❌
- 上下文注入：✅ / ❌
- AI 访问：✅ / ❌
- 备注：[任何异常行为]

### 测试2：模糊匹配
- 测试命令：@README 分析项目文档
- 文件加载：✅ / ❌
- 上下文注入：✅ / ❌
- AI 访问：✅ / ❌
- 备注：

### 测试3：路径引用
- 测试命令：@src/engine/agent/AgentRuntime.ts 解释这个文件的作用
- 文件加载：✅ / ❌
- 上下文注入：✅ / ❌
- AI 访问：✅ / ❌
- 备注：

### 测试4：多文件引用
- 测试命令：@package.json @tsconfig.json 比较这两个配置文件
- 文件加载：✅ / ❌
- 上下文注入：✅ / ❌
- AI 访问：✅ / ❌
- 备注：

## 总结
- 成功：X / 4
- 失败：Y / 4
- 主要问题：[问题描述]
```

---

## 🚨 紧急问题报告

如果遇到以下情况，请立即报告：

1. **完全不工作：** Console 中完全没有 `[ContextAdapter]` 日志
2. **所有文件都加载失败：** 即使明显存在的文件也无法加载
3. **文件内容为空：** `contentLength: 0`
4. **AI 完全看不到：** 上下文有数据，但 AI 说看不到

**报告格式：**
```
问题描述：[简短描述]
复现步骤：[步骤1, 步骤2, ...]
Console 日志：[相关日志片段]
截图：[如果可能]
```

---

## 💡 最佳实践

1. **使用相对路径：** `@src/file.ts` 优于绝对路径
2. **文件名简洁：** `@AgentRuntime.ts` 比 `@TheAgentRuntimeImplementationFile.ts` 更易识别
3. **避免歧义：** 如果有多个同名文件，使用完整路径
4. **一次引用不超过5个文件：** 避免上下文过大
5. **测试后清理：** 发送 `clear` 命令清理对话历史

---

## 🔗 相关文档

- [Context Buffer 实现文档](./context-display-bottleneck-analysis.md)
- [Context Protocol 文档](../../src/engine/agent/contextProtocol.ts)
- [LLMAdapter 文档](../../src/engine/agent/llmAdapter.ts)

---

**最后更新：** 2026-02-01
**维护者：** Yuangs AI Team