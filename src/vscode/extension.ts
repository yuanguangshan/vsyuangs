import * as vscode from 'vscode';
import { ChatViewProvider } from './provider/ChatViewProvider';

export function activate(context: vscode.ExtensionContext) {
    console.log('Yuangs AI Agent extension is now active!');

    const provider = new ChatViewProvider(context);

    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider(ChatViewProvider.viewType, provider)
    );

    let applyEdit = vscode.commands.registerCommand('yuangs.applyEdit', () => {
        vscode.window.showInformationMessage('Apply Edit triggered!');
    });

    let clearChat = vscode.commands.registerCommand('yuangs.clearChat', () => {
        provider.clear();
        vscode.window.showInformationMessage('Chat history cleared.');
    });

    context.subscriptions.push(applyEdit, clearChat);
}

export function deactivate() { }
