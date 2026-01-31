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

    // 4. 注册优化命令
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
            optimizeCode(editor.document, range);
        } else {
            // If no range (e.g., called from palette), use the current selection
            optimizeCode(editor.document, editor.selection);
        }
    };

    // 5. 注册命令
    context.subscriptions.push(
        vscode.commands.registerCommand('yuangs.optimizeCode', optimizeCommandHandler),
        vscode.commands.registerCommand('yuangs.explainSelection', (code, document, range) => {
            explainSelection(code, document, range);
        }),
        vscode.commands.registerCommand('yuangs.optimizeSelection', (code, document, range) => {
            optimizeSelection(code, document, range);
        }),
        vscode.commands.registerCommand('yuangs.sendSelection', (code, document, range) => {
            sendToYuangs(code, document, range);
        }),
        vscode.commands.registerCommand('yuangs.askAI', async () => {
            // Ask AI 命令：打开侧边栏并聚焦到输入框
            await vscode.commands.executeCommand('workbench.view.extension.yuangs-sidebar');
        })
    );
}

export function deactivate() {}