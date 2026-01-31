import * as vscode from 'vscode';

export async function applyDiff(editor: vscode.TextEditor, optimizedCode: string) {
  const edit = new vscode.WorkspaceEdit();
  edit.replace(
    editor.document.uri,
    editor.selection,
    optimizedCode
  );
  await vscode.workspace.applyEdit(edit);
  
  // Show confirmation
  vscode.window.showInformationMessage('✅ 优化后的代码已应用');
}