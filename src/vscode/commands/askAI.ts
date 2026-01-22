import * as vscode from 'vscode';
import { VSCodeAgentRuntime } from '../core/runtime';

/**
 * Ask AI 命令处理器
 * 
 * 职责：
 * - 显示输入框获取用户问题
 * - 创建 VSCodeAgentRuntime 实例
 * - 调用 runChat 执行 AI 任务
 * - 通过 Progress/Notification 展示结果
 * 
 * 注意：这是一个独立入口，不直接操作 ChatView
 * ChatView 应该通过侧边栏访问
 */
export async function askAICommand() {
    console.log('[AskAI] Command triggered');
    
    try {
        // 获取用户输入
        const userInput = await vscode.window.showInputBox({
            prompt: 'Ask Yuangs AI anything...',
            placeHolder: 'Type your question here...'
        });

        if (!userInput) {
            console.log('[AskAI] User cancelled input');
            return;
        }

        console.log('[AskAI] User input received, starting execution...');

        // 创建 VSCode Agent Runtime 实例
        const runtime = new VSCodeAgentRuntime();

        // 使用进度指示器执行任务
        await vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: 'Yuangs AI is thinking...',
            cancellable: true
        }, async (progress, token) => {
            // 监听取消操作
            token.onCancellationRequested(() => {
                console.log('[AskAI] Task cancelled by user');
            });

            let fullResponse = '';

            // 运行AI任务，收集完整响应
            await runtime.runChat(userInput, (chunk) => {
                fullResponse += chunk;
                // 更新进度消息
                progress.report({ 
                    message: `Processing: ${chunk.substring(0, 50)}${chunk.length > 50 ? '...' : ''}` 
                });
            });

            console.log('[AskAI] Task completed successfully');

            // 可选：将完整响应显示到新文档或输出面板
            // 这样用户可以看到完整的 AI 回复
            if (fullResponse.trim()) {
                const doc = await vscode.workspace.openTextDocument({
                    content: fullResponse,
                    language: 'markdown'
                });
                await vscode.window.showTextDocument(doc, { 
                    preview: true, 
                    viewColumn: vscode.ViewColumn.Beside 
                });
            }
        });

    } catch (error) {
        console.error('[AskAI] Error:', error);
        vscode.window.showErrorMessage(`Error running AI command: ${error}`);
    }
}
