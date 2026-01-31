# 文件读取功能修复说明

## 问题描述

之前代码中 `readFile` case 被废弃，导致用户从文件面板选择文件时，AI 无法获取到文件内容。

## 根本原因

1. **readFile case 被注释掉**：在 `ChatViewProvider.ts` 中，`readFile` case 直接 `break`，没有任何文件读取逻辑
2. **ContextManager 实例不共享**：每次聊天和文件读取都创建了新的 `VSCodeAgentRuntime` 实例，导致上下文隔离

## 修复方案

### 1. 恢复 readFile 功能

在 `ChatViewProvider.ts` 的 `readFile` case 中实现了完整的文件读取逻辑：

```typescript
case 'readFile':
    // 读取文件内容并添加到上下文
    if (data.path) {
        try {
            const uri = vscode.Uri.file(data.path);
            const doc = await vscode.workspace.openTextDocument(uri);
            const content = doc.getText();
            
            // 获取或创建 VSCodeAgentRuntime 实例
            if (!this._runtime) {
                this._runtime = new VSCodeAgentRuntime();
            }
            const contextManager = this._runtime.getContextManager();
            
            // 将文件内容添加到上下文
            await contextManager.addContextItemAsync({
                type: 'file',
                path: uri.fsPath,
                content: content,
                semantic: 'source_code',
                summary: `User selected file: ${path.basename(uri.fsPath)}`,
                summarized: true,
                summaryQuality: 1.0,
                alias: path.basename(uri.fsPath),
                tags: ['user-selected', 'explicit', 'file-panel'],
                importance: {
                    id: uri.fsPath,
                    path: uri.fsPath,
                    type: 'file',
                    useCount: 1,
                    successCount: 1,
                    failureCount: 0,
                    lastUsed: Date.now(),
                    createdAt: Date.now(),
                    confidence: 1.0  // 强制高重要性
                }
            });
            
            // 发送成功消息到 UI
            webviewView.webview.postMessage({
                type: 'success',
                value: `📄 File loaded: ${path.basename(uri.fsPath)}`
            });
            
            // 同时打开文件供用户查看
            await vscode.window.showTextDocument(doc, { preview: true });
        } catch (error: any) {
            console.error(`[ChatViewProvider] Failed to read file ${data.path}:`, error);
            webviewView.webview.postMessage({
                type: 'error',
                value: `Failed to read file: ${error.message}`
            });
        }
    }
    break;
```

### 2. 修复 ContextManager 实例复用问题

添加了 `_runtime` 字段，确保所有操作使用同一个实例：

```typescript
export class ChatViewProvider implements vscode.WebviewViewProvider {
    // ... 其他字段
    private _runtime: VSCodeAgentRuntime | null = null;

    // 在 readFile 和 handleAgentTask 中都复用同一个实例
    if (!this._runtime) {
        this._runtime = new VSCodeAgentRuntime();
    }
    const contextManager = this._runtime.getContextManager();
}
```

## 修复后的行为

现在用户可以通过**两种方式**让 AI 获取文件内容：

### 方式 1：使用 @filename 引用（自动解析）

在聊天输入中直接使用 `@filename`，例如：

```
请帮我分析 @src/vscode/provider/ChatViewProvider.ts 这个文件
```

**流程**：
1. 用户输入包含 `@filename`
2. `VSCodeAgentRuntime.runChat()` 调用 `VSCodeContextAdapter.resolveUserReferences()`
3. 自动读取文件内容并添加到 ContextManager
4. AI 可以访问文件内容

### 方式 2：从文件面板选择文件（手动加载）

1. 点击工具栏的文件图标打开文件面板
2. 在文件树中选择一个文件
3. 文件内容自动加载到 ContextManager
4. UI 显示：`📄 File loaded: filename`
5. 文件在编辑器中打开供预览
6. AI 可以在后续对话中访问该文件内容

## 上下文优先级

文件内容的 importance 设置为 `confidence: 1.0`（最高优先级），确保 AI 优先参考这些文件。

标签包括：
- `user-selected`：用户明确选择的文件
- `explicit`：显式添加的上下文
- `file-panel`：来自文件面板的文件

## 验证步骤

1. **测试 @filename 引用**：
   - 在输入框输入 `@src/vscode/provider/ChatViewProvider.ts 请解释这个文件`
   - 观察 AI 是否能正确回答关于文件内容的问题

2. **测试文件面板选择**：
   - 打开文件面板（点击 📁 图标）
   - 选择一个文件
   - 确认看到 `📄 File loaded: xxx` 提示
   - 询问 AI 关于该文件的问题，确认 AI 能正确回答

3. **查看 Context Panel**：
   - 点击 Context 按钮
   - 确认加载的文件出现在上下文列表中
   - 确认文件显示为高优先级（confidence: 1.0）

## 技术细节

### ContextManager 实例生命周期

- **单例模式**：每个 `ChatViewProvider` 实例维护一个 `VSCodeAgentRuntime` 实例
- **延迟初始化**：第一次需要时才创建（`if (!this._runtime) this._runtime = new VSCodeAgentRuntime()`）
- **共享上下文**：所有文件读取和聊天操作共享同一个 ContextManager

### 文件读取时机

1. **@filename 引用**：在 `runtime.runChat()` 开始时立即解析
2. **文件面板选择**：用户点击文件时立即加载到上下文
3. **上下文同步**：聊天开始时，ContextPanel 自动更新显示所有上下文

## 相关文件

- `src/vscode/provider/ChatViewProvider.ts`：主要修复文件
- `src/vscode/core/runtime.ts`：VSCodeAgentRuntime 实现
- `src/vscode/core/contextAdapter.ts`：VSCodeContextAdapter，负责解析 @filename 引用
- `src/vscode/webview/sidebar.html`：文件面板 UI

## 注意事项

1. **文件路径格式**：
   - 相对路径：`src/vscode/provider/ChatViewProvider.ts`
   - 绝对路径：完整文件系统路径
   - 支持模糊匹配

2. **大文件处理**：
   - 目前没有文件大小限制
   - 大文件可能影响 token 使用量
   - 未来可考虑添加文件大小限制

3. **上下文持久化**：
   - ContextManager 在 ChatViewProvider 生命周期内有效
   - 关闭 VS Code 或重新加载扩展后，上下文会清空
   - 聊天历史记录会保存到文件系统