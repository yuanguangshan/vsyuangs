import * as vscode from 'vscode';
import { YuangsCodeActionProvider } from './codeActions/YuangsCodeActionProvider';
import { InlineDiffRenderer } from './decorations/inlineDiff';
import { optimizeCode } from './commands/optimize';
import { explainSelection } from './commands/explainSelection';
import { optimizeSelection } from './commands/optimizeSelection';
import { sendToYuangs } from './commands/sendToYuangs';

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

    // 3. 注册优化命令
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

    // 3. Register new commands for code actions
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
        })
    );
}

export function deactivate() {}