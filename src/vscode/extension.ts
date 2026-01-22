import * as vscode from 'vscode';
import { ChatViewProvider } from './provider/ChatViewProvider';
import { askAICommand } from './commands/askAI';

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
    } catch (error) {
        console.error('Failed to activate Yuangs AI Agent extension:', error);
    }
}

export function deactivate() { }
