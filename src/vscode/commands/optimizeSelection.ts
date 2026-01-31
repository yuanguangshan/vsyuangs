import * as vscode from 'vscode';
import { optimizePrompt } from '../../engine/prompt/optimize.prompt';
import { yuangsEngine } from '../../engine/aiClient';
import { YuangsPanel } from '../sidePanel/YuangsPanel';
import { applyDiff } from '../../engine/diff/applyDiff';

export async function optimizeSelection(code: string, document: vscode.TextDocument, range: vscode.Range) {
  try {
    const language = document.languageId;
    const prompt = optimizePrompt(code, language);

    // Show loading indicator
    vscode.window.showInformationMessage('⚡ 正在优化代码...');

    // Send to AI engine
    const result = await yuangsEngine.send({
      messages: [
        { role: 'system', content: prompt.system },
        { role: 'user', content: prompt.user }
      ],
      stream: false
    });

    // Display result in side panel with apply option
    if (result) {
      // Parse the optimized code from AI response
      const optimizedCode = extractOptimizedCode(result);
      
      if (optimizedCode) {
        // Show diff in side panel with apply option
        const diffContent = `## 优化结果\n\n### 原始代码:\n\`\`\`${language}\n${code}\n\`\`\`\n\n### 优化后:\n\`\`\`${language}\n${optimizedCode}\n\`\`\`\n\n[应用优化](command:yuangs.applyOptimization?${encodeURIComponent(JSON.stringify({documentUri: document.uri.toString(), range, optimizedCode}))})`;
        
        YuangsPanel.show(diffContent, '代码优化');
      } else {
        // If couldn't parse optimized code, just show the raw result
        YuangsPanel.show(result, '代码优化');
      }
    }

  } catch (error) {
    console.error('Error optimizing code:', error);
    vscode.window.showErrorMessage('优化代码时发生错误: ' + (error as Error).message);
  }
}

function extractOptimizedCode(aiResponse: string): string | null {
  // Look for the optimized code section in the AI response
  const optimizedMatch = aiResponse.match(/---optimized\s*\n([\s\S]*?)\n---/i);
  if (optimizedMatch && optimizedMatch[1]) {
    return optimizedMatch[1].trim();
  }
  
  // Alternative pattern: look for code blocks after "优化后" or "optimized"
  const afterOptimized = aiResponse.split(/优化后[:：]|optimized[:：]/i)[1];
  if (afterOptimized) {
    const codeBlockMatch = afterOptimized.match(/```(?:\w+)?\n([\s\S]*?)```/);
    if (codeBlockMatch && codeBlockMatch[1]) {
      return codeBlockMatch[1].trim();
    }
  }
  
  return null;
}