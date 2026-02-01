import * as vscode from 'vscode';
import { explainPrompt } from '../../engine/prompt/explain.prompt';
import { yuangsEngine } from '../../engine/aiClient';
import { YuangsPanel } from '../sidePanel/YuangsPanel';

export async function explainSelection(
  extensionUri: vscode.Uri,
  code: string,
  document: vscode.TextDocument,
  range: vscode.Range
) {
  try {
    const language = document.languageId;
    const prompt = explainPrompt(code, language);

    // Show loading indicator
    vscode.window.showInformationMessage('🔍 正在解释代码...');

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
      YuangsPanel.show(extensionUri, result, '代码解释');
    }

  } catch (error) {
    console.error('Error explaining code:', error);
    vscode.window.showErrorMessage('解释代码时发生错误: ' + (error as Error).message);
  }
}