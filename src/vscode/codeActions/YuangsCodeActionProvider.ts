import * as vscode from 'vscode';

export class YuangsCodeActionProvider implements vscode.CodeActionProvider {

  static readonly providedCodeActionKinds = [
    vscode.CodeActionKind.QuickFix,
    vscode.CodeActionKind.Refactor
  ];

  provideCodeActions(
    document: vscode.TextDocument,
    range: vscode.Range
  ): vscode.CodeAction[] {

    // Only show actions when text is selected
    if (range.isEmpty) return [];

    const selectedText = document.getText(range);
    if (!selectedText.trim()) return [];

    const actions: vscode.CodeAction[] = [];

    // Send to Yuangs action
    actions.push(this.createAction(
      '📤 发送到 Yuangs',
      'yuangs.sendSelection',
      selectedText,
      document,
      range,
      vscode.CodeActionKind.QuickFix
    ));

    // Explain code action
    actions.push(this.createAction(
      '🧠 解释这段代码',
      'yuangs.explainSelection',
      selectedText,
      document,
      range,
      vscode.CodeActionKind.QuickFix
    ));

    // Optimize code action
    actions.push(this.createAction(
      '⚡ 优化这段代码',
      'yuangs.optimizeSelection',
      selectedText,
      document,
      range,
      vscode.CodeActionKind.Refactor
    ));

    return actions;
  }

  private createAction(
    title: string,
    command: string,
    code: string,
    document: vscode.TextDocument,
    range: vscode.Range,
    kind: vscode.CodeActionKind
  ): vscode.CodeAction {
    const action = new vscode.CodeAction(title, kind);

    action.command = {
      command,
      title,
      arguments: [code, document, range]
    };

    return action;
  }
}