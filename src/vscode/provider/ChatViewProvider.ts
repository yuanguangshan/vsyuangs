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

        try {
            webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
        } catch (error: any) {
            webviewView.webview.html = `<html><body><h3>Error loading view</h3><pre>${error.message}</pre></body></html>`;
        }

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
            const editor = vscode.window.activeTextEditor;
            let finalInput = userInput;

            if (editor && !editor.selection.isEmpty) {
                const selection = editor.document.getText(editor.selection);
                const fileName = path.basename(editor.document.fileName);
                finalInput = `Context from ${fileName}:\n\`\`\`\n${selection}\n\`\`\`\n\nTask: ${userInput}`;
            } else {
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

            await GovernanceService.init(this._context.extensionUri.fsPath);

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
            (GovernanceService as any).adjudicate = originalAdjudicate;

        } catch (error: any) {
            this._view.webview.postMessage({ type: 'error', value: error.message });
        }
    }

    private async handleApplyDiff(diffData: any) {
        if (!this._view) return;

        try {
            if (diffData.type === 'unified') {
                for (const file of diffData.files) {
                    await this.applyUnifiedDiff(file);
                }
                this._view.webview.postMessage({ type: 'diffApplied' });
                vscode.window.showInformationMessage('✓ Diff applied successfully!');
            } else if (diffData.type === 'simple') {
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

        const filePath = path.join(workspaceFolder.uri.fsPath, file.newFile || file.oldFile);
        const fileUri = vscode.Uri.file(filePath);

        let document: vscode.TextDocument;
        try {
            document = await vscode.workspace.openTextDocument(fileUri);
        } catch {
            const edit = new vscode.WorkspaceEdit();
            edit.createFile(fileUri, { ignoreIfExists: true });
            await vscode.workspace.applyEdit(edit);
            document = await vscode.workspace.openTextDocument(fileUri);
        }

        const edit = new vscode.WorkspaceEdit();
        for (const hunk of file.hunks) {
            let startLine = hunk.oldStart - 1;
            if (startLine < 0) startLine = 0;
            const endLine = startLine + hunk.oldLines;

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
        await vscode.window.showTextDocument(document);
    }

    private async applySimpleDiff(diffData: any) {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            throw new Error('No active editor. Please open a file first.');
        }

        const document = editor.document;
        const edit = new vscode.WorkspaceEdit();
        const fullText = document.getText();

        if (diffData.removed.length > 0) {
            const toRemove = diffData.removed.join('\n');
            const index = fullText.indexOf(toRemove);

            if (index !== -1) {
                const startPos = document.positionAt(index);
                const endPos = document.positionAt(index + toRemove.length);
                const range = new vscode.Range(startPos, endPos);

                if (diffData.added.length > 0) {
                    edit.replace(document.uri, range, diffData.added.join('\n'));
                } else {
                    edit.delete(document.uri, range);
                }
            } else {
                throw new Error('Could not find the content to replace in the active file');
            }
        } else if (diffData.added.length > 0) {
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
        const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._context.extensionUri, 'dist', 'webview', 'marked.min.js'));
        const htmlPath = path.join(this._context.extensionPath, 'dist', 'webview', 'sidebar.html');
        let htmlSnippet = fs.readFileSync(htmlPath, 'utf8');

        // 生成随机 nonce 用于 CSP
        const nonce = getNonce();

        // 注入 CSP 和本地脚本路径
        htmlSnippet = htmlSnippet.replace(
            /<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/marked\/marked\.min\.js"><\/script>/,
            `<script nonce="${nonce}" src="${scriptUri}"></script>`
        );

        // 注入 CSP Meta 标签
        const csp = `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; script-src 'nonce-${nonce}'; img-src ${webview.cspSource} https:; connect-src *;">`;
        htmlSnippet = htmlSnippet.replace('<head>', `<head>\n    ${csp}`);

        // 为所有的 <script> 标签注入 nonce
        htmlSnippet = htmlSnippet.replace(/<script>/g, `<script nonce="${nonce}">`);

        return htmlSnippet;
    }
}

function getNonce() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
