import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { AgentRuntime } from '../../engine/agent/AgentRuntime';
import { GovernanceService } from '../../engine/agent/governance';

export class ChatViewProvider implements vscode.WebviewViewProvider {
    public static readonly viewType = 'yuangs.chatView';
    private _view?: vscode.WebviewView;

    constructor(
        private readonly _extensionUri: vscode.Uri,
    ) { }

    public resolveWebviewView(
        webviewView: vscode.WebviewView,
        context: vscode.WebviewViewResolveContext,
        _token: vscode.CancellationToken,
    ) {
        this._view = webviewView;

        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [
                this._extensionUri
            ]
        };

        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

        webviewView.webview.onDidReceiveMessage(data => {
            switch (data.type) {
                case 'ask':
                    this.handleAgentTask(data.value);
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

            // 初始化治理服务 (传入插件基础路径以正确加载 policy.yaml 和 wasm)
            await GovernanceService.init(this._extensionUri.fsPath);

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

            const runtime = new AgentRuntime([]); // 这里可以传入历史消息

            await runtime.run(
                finalInput,
                'chat',
                (chunk) => {
                    this._view?.webview.postMessage({ type: 'aiChunk', value: chunk });
                }
            );

            this._view?.webview.postMessage({ type: 'done' });

            // 恢复原始方法 (可选)
            (GovernanceService as any).adjudicate = originalAdjudicate;

        } catch (error: any) {
            this._view.webview.postMessage({ type: 'error', value: error.message });
        }
    }

    public clear() {
        this._view?.webview.postMessage({ type: 'clear' });
    }

    private _getHtmlForWebview(webview: vscode.Webview) {
        const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'src', 'vscode', 'webview', 'sidebar.html'));
        // 实际上我们可以直接读取文件内容并注入
        const htmlPath = path.join(this._extensionUri.fsPath, 'src', 'vscode', 'webview', 'sidebar.html');
        let htmlSnippet = fs.readFileSync(htmlPath, 'utf8');

        // 替换一些资源路径如果需要的话
        return htmlSnippet;
    }
}
