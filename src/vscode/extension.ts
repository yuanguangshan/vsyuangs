import * as vscode from 'vscode';
import { ChatViewProvider } from './provider/ChatViewProvider';
import { askAICommand } from './commands/askAI';
import { ProactiveGuard } from './guard/ProactiveGuard';
import { registerProactiveCommands, getProactiveCodeActionProvider } from './provider/ProactiveCodeActionProvider';

export function activate(context: vscode.ExtensionContext) {
    try {
        console.log('Yuangs AI Agent extension is now active!');

        const provider = new ChatViewProvider(context);

        context.subscriptions.push(
            vscode.window.registerWebviewViewProvider(ChatViewProvider.viewType, provider)
        );

        // 注册现有命令
        let applyEdit = vscode.commands.registerCommand('yuangs.applyEdit', () => {
            vscode.window.showInformationMessage('Apply Edit triggered!');
        });

        let clearChat = vscode.commands.registerCommand('yuangs.clearChat', () => {
            provider.clear();
            vscode.window.showInformationMessage('Chat history cleared.');
        });

        // 注册新的 askAI 命令
        let askAI = vscode.commands.registerCommand('yuangs.askAI', askAICommand);

        context.subscriptions.push(applyEdit, clearChat, askAI);

        // 初始化 ProactiveGuard（v1.3 主动防御）
        const proactiveGuard = ProactiveGuard.getInstance();
        proactiveGuard.initialize(context);
        console.log('[Extension] ProactiveGuard initialized');

        // 初始化 ProactiveCodeActionProvider（v1.4 知识继承 UI）
        const codeActionProvider = getProactiveCodeActionProvider(context);
        vscode.languages.registerCodeActionsProvider('*', codeActionProvider, {
            providedCodeActionKinds: [vscode.CodeActionKind.QuickFix]
        });
        console.log('[Extension] ProactiveCodeActionProvider initialized');

        // 注册 Proactive 相关命令
        registerProactiveCommands(context);
        console.log('[Extension] Proactive commands registered');
    } catch (error) {
        console.error('Failed to activate Yuangs AI Agent extension:', error);
    }
}

export function deactivate() {
    // 清理 ProactiveGuard 资源
    const proactiveGuard = ProactiveGuard.getInstance();
    proactiveGuard.dispose();
    console.log('[Extension] Deactivated');
}
