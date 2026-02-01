import * as vscode from 'vscode';
import { sendPrompt } from '../../engine/prompt/send.prompt';
import { yuangsEngine } from '../../engine/aiClient';
import { YuangsPanel } from '../sidePanel/YuangsPanel';

export async function sendToYuangs(
  extensionUri: vscode.Uri,
  code: string,
  document: vscode.TextDocument,
  range: vscode.Range
) {
  try {
    const language = document.languageId;
    const prompt = sendPrompt(code, language);

    // Show loading indicator
    vscode.window.showInformationMessage('📤 正在发送到 Yuangs...');

    // Send to AI engine
    const result = await yuangsEngine.send({
      messages: [
        { role: 'system', content: prompt.system },
        { role: 'user', content: prompt.user }
      ],
      stream: false
    });

    // Display result in side panel
    if (result) {
      YuangsPanel.show(extensionUri, result, 'Yuangs 分析');
    }

  } catch (error) {
    console.error('Error sending to Yuangs:', error);
    vscode.window.showErrorMessage('发送到 Yuangs 时发生错误: ' + (error as Error).message);
  }
}