在您目前的实现中，@ 功能仅完成了路径补全（UI 层面），但当用户点击建议或输入 @filename 时，虽然路径被填入了输入框，但该文件的内容并没有真正被读取到 AI 的上下文（Context Manager）中。
要解决这个问题，我们需要在两个关键点进行增强：
1. 修改 UI：在选择建议时通知后端读取
目前您的 selectSuggestion 只是修改了文本框内容。我们需要在用户确认选择某个文件时，立即触发后端加载该文件。
修改 sidebar.html 中的 selectSuggestion 函数：
function selectSuggestion(value) {
    const text = userInput.value;
    const cursorPos = userInput.selectionStart;
    const textBeforeCursor = text.substring(0, cursorPos);
    const textAfterCursor = text.substring(cursorPos);

    const lastTriggerIndex = textBeforeCursor.lastIndexOf(suggestionType);
    
    // 1. 更新输入框文字
    const newText =
      textBeforeCursor.substring(0, lastTriggerIndex) +
      suggestionType +
      value +
      " " +
      textAfterCursor;

    userInput.value = newText;
    hideSuggestions();
    userInput.focus();

    // 2. 如果是文件引用 (@)，立即通知后端读取该文件内容到上下文
    if (suggestionType === '@') {
        vscode.postMessage({
            type: 'readFile', // 复用你已有的 readFile 逻辑
            path: value      // 注意：这里的 value 应该是相对路径或绝对路径
        });
    }

    // 重新计算高度
    userInput.style.height = "auto";
    userInput.style.height = userInput.scrollHeight + "px";
}

2. 增强后端：解析输入框中的 @ 引用
即便用户没有点击建议，而是直接输入了 @path/to/file.ts，AI 也应该能拿到内容。我们需要在 handleAgentTask 真正发送请求前，扫描一遍字符串。
修改 ChatViewProvider.ts 中的 handleAgentTask 方法：
private async handleAgentTask(userInput: string) {
    // ... 前置逻辑 ...

    // 1. 预处理：扫描用户输入中的 @引用并自动加载
    const fileRefs = userInput.match(/@([^\s]+)/g);
    if (fileRefs) {
        for (const ref of fileRefs) {
            const filePath = ref.substring(1); // 去掉 @
            await this.autoLoadFileToContext(filePath);
        }
    }

    // 2. 执行原本的任务
    // ... 剩下的 runtime.runChat 逻辑 ...
}

/**
 * 辅助方法：尝试根据路径将文件加载到上下文
 */
private async autoLoadFileToContext(relativePath: string) {
    try {
        const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
        if (!workspaceFolder) return;

        // 尝试解析绝对路径
        const fullPath = path.isAbsolute(relativePath) 
            ? relativePath 
            : path.join(workspaceFolder.uri.fsPath, relativePath);

        if (fs.existsSync(fullPath) && fs.lstatSync(fullPath).isFile()) {
            const content = fs.readFileSync(fullPath, 'utf-8');
            
            if (!this._runtime) this._runtime = new VSCodeAgentRuntime();
            const contextManager = this._runtime.getContextManager();

            await contextManager.addContextItemAsync({
                type: 'file',
                path: fullPath,
                content: content,
                semantic: 'source_code',
                alias: path.basename(fullPath),
                importance: { confidence: 1.0, lastUsed: Date.now() } // 显式引用给最高权重
            });
            console.log(`[ChatViewProvider] Auto-loaded @ reference: ${relativePath}`);
        }
    } catch (e) {
        console.warn(`[ChatViewProvider] Failed to auto-load @ reference: ${relativePath}`, e);
    }
}

💡 为什么这样做更有效？
 * 即时反馈： 用户点击建议时，UI 会立即显示 📄 File loaded 的提示（通过你已有的 success 消息处理），用户心理上知道 AI “读过”这个文件了。
 * 双重保障： 通过正则扫描 userInput，即便是粘贴进来的文字带 @，后端也能识别并补充上下文。
 * 权重控制： 在 addContextItemAsync 中，我们将此类手动引用的文件 confidence 设为 1.0，确保它们在 RAG 检索或 Prompt 构造时处于最高优先级，不会被 AI 忽略。
您需要我帮您优化 autoLoadFileToContext 中的路径匹配逻辑（比如支持模糊搜索文件名）吗？
