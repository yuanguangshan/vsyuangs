import * as vscode from 'vscode';
import { InlineDiffRenderer } from '../decorations/inlineDiff';

/**
 * 优化代码命令处理
 */
export async function optimizeCode(
  document: vscode.TextDocument,
  range: vscode.Range
): Promise<void> {
  const editor = vscode.window.activeTextEditor;
  if (!editor || editor.document !== document) {
    vscode.window.showErrorMessage('Active editor does not match document');
    return;
  }

  // 1. 获取原始代码
  const originalCode = document.getText(range);
  if (!originalCode) {
    return;
  }

  // 2. 调用 AI 引擎 (模拟)
  // TODO: 接入真实的 YuangsEngine
  const optimizedCode = await callAiOptimization(originalCode);

  // 3. 显示 Inline Diff (不修改原代码)
  InlineDiffRenderer.show(editor, range, originalCode, optimizedCode);

  // 4. 询问用户是否应用
  const choice = await vscode.window.showQuickPick(
    ['✅ Apply Changes', '❌ Cancel'],
    { placeHolder: 'AI 已生成优化建议，是否应用？' }
  );

  if (choice === '✅ Apply Changes') {
    // 5. 应用修改
    await editor.edit(editBuilder => {
      editBuilder.replace(range, optimizedCode);
    });

    // 6. 清除 Diff 装饰器
    InlineDiffRenderer.clear(editor);

    vscode.window.showInformationMessage('✅ 代码优化已应用');
  } else {
    // 用户取消，清除装饰器
    InlineDiffRenderer.clear(editor);
  }
}

/**
 * 模拟 AI 调用函数
 */
async function callAiOptimization(code: string): Promise<string> {
  // 这里是你调用 YuangsEngine 的地方
  // const result = await YuangsEngine.optimize(code);
  
  // 模拟返回优化后的代码
  return code.replace(/const/g, 'let'); 
}