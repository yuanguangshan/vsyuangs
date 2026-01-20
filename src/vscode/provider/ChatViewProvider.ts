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
