import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { AgentRuntime } from '../../engine/agent/AgentRuntime';
import { GovernanceService } from '../../engine/agent/governance';

export class ChatViewProvider implements vscode.WebviewViewProvider {
    public static readonly viewType = 'yuangs.chatView';
    private _view?: vscode.WebviewView;
    private _messages: { role: string, content: string }[] = [];

    constructor(
        private readonly _context: vscode.ExtensionContext,
    ) {
        // 从 workspaceState 恢复历史记录
        this._messages = this._context.workspaceState.get<{ role: string, content: string }[]>('chatHistory', []);
    }

    public resolveWebviewView(
        webviewView: vscode.WebviewView,
        context: vscode.WebviewViewResolveContext,
        _token: vscode.CancellationToken,
    ) {
        this._view = webviewView;

        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [
                this._context.extensionUri
            ]
        };

        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

        // 当 webview 准备好后，发送历史记录
        webviewView.webview.postMessage({ type: 'history', value: this._messages });

        webviewView.webview.onDidReceiveMessage(async data => {
            switch (data.type) {
                case 'ask':
                    this.handleAgentTask(data.value);
                    break;
                case 'getFiles':
                    const files = await vscode.workspace.findFiles('**/*', '**/node_modules/**', 100);
                    const fileNames = files.map(f => path.relative(vscode.workspace.workspaceFolders?.[0].uri.fsPath || '', f.fsPath));
                    webviewView.webview.postMessage({ type: 'suggestions', value: fileNames, trigger: '@' });
                    break;
                case 'exportChat':
                    this.exportChatHistory();
                    break;
                case 'clear':
                    this.clear();
                    break;
                case 'getSymbols':
                    // 这是一个简化的符号获取，实际可以通过 DocumentSymbolProvider 获取
                    // 这里为了演示，获取当前打开文件的符号
                    const editor = vscode.window.activeTextEditor;
                    if (editor) {
                        try {
                            const symbols = await vscode.commands.executeCommand<vscode.SymbolInformation[]>(
                                'vscode.executeDocumentSymbolProvider',
                                editor.document.uri
                            );
                            if (symbols) {
                                const symbolNames = symbols.map(s => s.name);
                                webviewView.webview.postMessage({ type: 'suggestions', value: symbolNames, trigger: '#' });
                            }
                        } catch (e) {
                            webviewView.webview.postMessage({ type: 'suggestions', value: [], trigger: '#' });
                        }
                    }
                    break;
                case 'applyDiff':
                    await this.handleApplyDiff(data.value);
                    break;
            }
        });
    }

    private async handleAgentTask(userInput: string) {
        if (!this._view) return;

        try {
            // 获取当前选中的代码片段
            const editor = vscode.window.activeTextEditor;
            let finalInput = userInput;

            if (editor && !editor.selection.isEmpty) {
                const selection = editor.document.getText(editor.selection);
                const fileName = path.basename(editor.document.fileName);
                finalInput = `Context from ${fileName}:\n\`\`\`\n${selection}\n\`\`\`\n\nTask: ${userInput}`;
            } else {
                // 如果没有选中代码，提供工作区文件列表作为基础上下文，增强 Agent 的“感知”
                const workspaceFolders = vscode.workspace.workspaceFolders;
                if (workspaceFolders) {
                    const rootUri = workspaceFolders[0].uri;
                    const files = await vscode.workspace.fs.readDirectory(rootUri);
                    const fileNames = files.map(([name, type]) => `- ${name}${type === vscode.FileType.Directory ? '/' : ''}`).join('\n');
                    finalInput = `Workspace Files:\n${fileNames}\n\nTask: ${userInput}`;
                }
            }

            this._messages.push({ role: 'user', content: userInput });
            this._saveHistory();

            // 初始化治理服务 (传入插件基础路径以正确加载 policy.yaml 和 wasm)
            await GovernanceService.init(this._context.extensionUri.fsPath);

            // 劫持治理审批逻辑为 VS Code UI
            const originalAdjudicate = GovernanceService.adjudicate;
            (GovernanceService as any).adjudicate = async (action: any) => {
                const choice = await vscode.window.showInformationMessage(
                    `Agent wants to execute ${action.type}: ${action.reasoning || 'No reason provided'}`,
                    { modal: true },
                    'Approve', 'Reject'
                );

                if (choice === 'Approve') {
                    return { status: 'approved', by: 'human', timestamp: Date.now() };
                } else {
                    return { status: 'rejected', by: 'human', reason: 'User Denied via VS Code UI', timestamp: Date.now() };
                }
            };

            const runtime = new AgentRuntime({
                history: this._messages.map(m => ({
                    role: m.role as any,
                    content: m.content
                }))
            });

            let fullAiResponse = '';
            await runtime.run(
                finalInput,
                'chat',
                (chunk) => {
                    fullAiResponse += chunk;
                    this._view?.webview.postMessage({ type: 'aiChunk', value: chunk });
                }
            );

            this._messages.push({ role: 'assistant', content: fullAiResponse });
            this._saveHistory();

            this._view?.webview.postMessage({ type: 'done' });

            // 恢复原始方法 (可选)
            (GovernanceService as any).adjudicate = originalAdjudicate;

        } catch (error: any) {
            this._view.webview.postMessage({ type: 'error', value: error.message });
        }
    }

    private async handleApplyDiff(diffData: any) {
        if (!this._view) return;

        try {
            if (diffData.type === 'unified') {
                // 处理标准 unified diff 格式
                for (const file of diffData.files) {
                    await this.applyUnifiedDiff(file);
                }
                this._view.webview.postMessage({ type: 'diffApplied' });
                vscode.window.showInformationMessage('✓ Diff applied successfully!');
            } else if (diffData.type === 'simple') {
                // 处理简单的 +/- 格式
                await this.applySimpleDiff(diffData);
                this._view.webview.postMessage({ type: 'diffApplied' });
                vscode.window.showInformationMessage('✓ Diff applied successfully!');
            } else {
                throw new Error('Unknown diff format');
            }
        } catch (error: any) {
            this._view.webview.postMessage({ type: 'diffError', value: error.message });
            vscode.window.showErrorMessage(`Failed to apply diff: ${error.message}`);
        }
    }

    private async applyUnifiedDiff(file: any) {
        const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
        if (!workspaceFolder) {
            throw new Error('No workspace folder open');
        }

        // 查找文件
        const filePath = path.join(workspaceFolder.uri.fsPath, file.newFile || file.oldFile);
        const fileUri = vscode.Uri.file(filePath);

        // 打开或创建文件
        let document: vscode.TextDocument;
        try {
            document = await vscode.workspace.openTextDocument(fileUri);
        } catch {
            // 文件不存在，创建新文件
            const edit = new vscode.WorkspaceEdit();
            edit.createFile(fileUri, { ignoreIfExists: true });
            await vscode.workspace.applyEdit(edit);
            document = await vscode.workspace.openTextDocument(fileUri);
        }

        // 应用每个 hunk
        const edit = new vscode.WorkspaceEdit();
        for (const hunk of file.hunks) {
            let startLine = hunk.oldStart - 1; // VS Code 使用 0-based 索引
            if (startLine < 0) startLine = 0; // 修正：防止新文件(oldStart=0)导致负数

            const endLine = startLine + hunk.oldLines;

            // 构建新内容
            const newLines: string[] = [];
            for (const line of hunk.lines) {
                if (line.startsWith('+')) {
                    newLines.push(line.substring(1));
                } else if (!line.startsWith('-')) {
                    newLines.push(line.startsWith(' ') ? line.substring(1) : line);
                }
            }

            const range = new vscode.Range(startLine, 0, endLine, 0);
            edit.replace(fileUri, range, newLines.join('\n') + '\n');
        }

        await vscode.workspace.applyEdit(edit);
        await document.save();

        // 显示文件
        await vscode.window.showTextDocument(document);
    }

    private async applySimpleDiff(diffData: any) {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            throw new Error('No active editor. Please open a file first.');
        }

        const document = editor.document;
        const edit = new vscode.WorkspaceEdit();

        // 简单策略：查找并替换
        const fullText = document.getText();

        if (diffData.removed.length > 0) {
            // 尝试查找要删除的内容
            const toRemove = diffData.removed.join('\n');
            const index = fullText.indexOf(toRemove);

            if (index !== -1) {
                const startPos = document.positionAt(index);
                const endPos = document.positionAt(index + toRemove.length);
                const range = new vscode.Range(startPos, endPos);

                if (diffData.added.length > 0) {
                    // 替换
                    edit.replace(document.uri, range, diffData.added.join('\n'));
                } else {
                    // 删除
                    edit.delete(document.uri, range);
                }
            } else {
                throw new Error('Could not find the content to replace in the active file');
            }
        } else if (diffData.added.length > 0) {
            // 只有添加，插入到光标位置
            edit.insert(document.uri, editor.selection.active, diffData.added.join('\n'));
        }

        await vscode.workspace.applyEdit(edit);
        await document.save();
    }

    public clear() {
        this._messages = [];
        this._saveHistory();
        this._view?.webview.postMessage({ type: 'clear' });
    }

    private _saveHistory() {
        this._context.workspaceState.update('chatHistory', this._messages);
    }

    private async exportChatHistory() {
        if (this._messages.length === 0) {
            vscode.window.showWarningMessage('No chat history to export.');
            return;
        }

        const mdContent = this._messages.map(m => {
            const role = m.role === 'user' ? '### 👤 User' : '### 🤖 Assistant';
            return `${role}\n\n${m.content}\n\n---\n`;
        }).join('\n');

        const uri = await vscode.window.showSaveDialog({
            defaultUri: vscode.Uri.file(path.join(vscode.workspace.workspaceFolders?.[0].uri.fsPath || '', 'chat_export.md')),
            filters: { 'Markdown': ['md'] }
        });

        if (uri) {
            fs.writeFileSync(uri.fsPath, mdContent);
            vscode.window.showInformationMessage('Chat history exported successfully!');
        }
    }

    private _getHtmlForWebview(webview: vscode.Webview) {
        // 实际上我们可以直接读取文件内容并注入
        const htmlPath = path.join(this._context.extensionPath, 'src', 'vscode', 'webview', 'sidebar.html');
        let htmlSnippet = fs.readFileSync(htmlPath, 'utf8');

        // 替换一些资源路径如果需要的话
        return htmlSnippet;
    }
}
