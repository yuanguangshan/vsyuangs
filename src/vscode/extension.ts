import * as vscode from 'vscode';
import { YuangsCodeActionProvider } from './codeActions/YuangsCodeActionProvider';
import { InlineDiffRenderer } from './decorations/inlineDiff';
import { optimizeCode } from './commands/optimize';
import { explainSelection } from './commands/explainSelection';
import { optimizeSelection } from './commands/optimizeSelection';
import { sendToYuangs } from './commands/sendToYuangs';
import { ChatViewProvider } from './provider/ChatViewProvider';

export function activate(context: vscode.ExtensionContext) {
    console.log('Yuangs AI Assistant is now active!');

    // 1. 初始化 Diff 渲染器
    InlineDiffRenderer.init(context);

    // 2. 注册 Code Action Provider
    const codeActionProvider = new YuangsCodeActionProvider();
    const providerDisposable = vscode.languages.registerCodeActionsProvider(
        { scheme: 'file', language: '*' },
        codeActionProvider,
        {
            providedCodeActionKinds: YuangsCodeActionProvider.providedCodeActionKinds
        }
    );
    context.subscriptions.push(providerDisposable);

    // 3. 注册 ChatViewProvider（侧边栏聊天视图）
    const chatViewProvider = new ChatViewProvider(context);
    const chatViewDisposable = vscode.window.registerWebviewViewProvider(
        ChatViewProvider.viewType,
        chatViewProvider
    );
    context.subscriptions.push(chatViewDisposable);

    // 4. 注册命令处理函数
    const optimizeCommandHandler = (uri: vscode.Uri, range: vscode.Range) => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor');
            return;
        }

        if (!editor.document) {
            vscode.window.showErrorMessage('No active document');
            return;
        }

        if (range) {
            optimizeCode(context.extensionUri, editor.document, range);
        } else {
            // If no range (e.g., called from palette), use the current selection
            optimizeCode(context.extensionUri, editor.document, editor.selection);
        }
    };

    const selectionCommandHandler = async (
        callback: (extensionUri: vscode.Uri, code: string, document: vscode.TextDocument, range: vscode.Range) => Promise<void>
    ) => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor');
            return;
        }

        if (!editor.document) {
            vscode.window.showErrorMessage('No active document');
            return;
        }

        const code = editor.document.getText(editor.selection);
        if (!code) {
            vscode.window.showWarningMessage('请先选中代码');
            return;
        }

        await callback(context.extensionUri, code, editor.document, editor.selection);
    };

    // 5. 注册命令
    context.subscriptions.push(
        vscode.commands.registerCommand('yuangs.optimizeCode', optimizeCommandHandler),
        vscode.commands.registerCommand('yuangs.explainSelection', () => 
            selectionCommandHandler((...args) => explainSelection(...args))
        ),
        vscode.commands.registerCommand('yuangs.optimizeSelection', () => 
            selectionCommandHandler((...args) => optimizeSelection(...args))
        ),
        vscode.commands.registerCommand('yuangs.sendSelection', () => 
            selectionCommandHandler((...args) => sendToYuangs(...args))
        ),
        vscode.commands.registerCommand('yuangs.askAI', async () => {
            // Ask AI 命令：打开侧边栏并聚焦到输入框
            await vscode.commands.executeCommand('workbench.view.extension.yuangs-sidebar');
        })
    );
}

export function deactivate() {}