import * as vscode from 'vscode';

export class YuangsPanel {
  private static panel: vscode.WebviewPanel | undefined;
  private static disposables: vscode.Disposable[] = [];

  static show(content: string, title: string = 'Yuangs AI') {
    if (this.panel) {
      // If panel exists, update its content
      this.panel.title = title;
      this.panel.reveal(vscode.ViewColumn.One);
      this.updateContent(content);
    } else {
      // Create new panel
      this.panel = vscode.window.createWebviewPanel(
        'yuangsPanel',
        title,
        vscode.ViewColumn.Beside,
        {
          enableScripts: true,
          retainContextWhenHidden: true
        }
      );

      this.panel.webview.html = this.getWebviewContent(content);

      this.panel.onDidDispose(() => {
        this.panel = undefined;
        while (this.disposables.length) {
          const disposable = this.disposables.pop();
          if (disposable) {
            disposable.dispose();
          }
        }
      }, null, this.disposables);

      // Handle messages from the webview
      this.panel.webview.onDidReceiveMessage(async (message) => {
        switch (message.command) {
          case 'applyOptimization':
            await this.handleApplyOptimization(message.args);
            break;
        }
      }, null, this.disposables);
    }
  }

  private static updateContent(content: string) {
    if (this.panel) {
      this.panel.webview.html = this.getWebviewContent(content);
    }
  }

  private static getWebviewContent(content: string): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yuangs AI</title>
  <style>
    /* Solarized Dark Color Palette */
    :root {
      --sol-base03: #002b36;
      --sol-base02: #073642;
      --sol-base01: #586e75;
      --sol-base00: #657b83;
      --sol-base0: #839496;
      --sol-base1: #93a1a1;
      --sol-base2: #eee8d5;
      --sol-base3: #fdf6e3;
      --sol-yellow: #b58900;
      --sol-orange: #cb4b16;
      --sol-red: #dc322f;
      --sol-magenta: #d33682;
      --sol-violet: #6c71c4;
      --sol-blue: #268bd2;
      --sol-cyan: #2aa198;
      --sol-green: #859900;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', 'Arial', sans-serif;
      padding: 20px;
      line-height: 1.6;
      color: var(--sol-base0);
      background: var(--sol-base03);
    }
    
    /* Markdown styles */
    #content {
      color: var(--sol-base0);
    }
    #content h1, #content h2, #content h3, #content h4, #content h5, #content h6 {
      margin-top: 24px;
      margin-bottom: 16px;
      font-weight: 600;
      line-height: 1.25;
      color: var(--sol-base1);
    }
    #content h1 {
      font-size: 2em;
      padding-bottom: 0.3em;
      border-bottom: 1px solid var(--sol-base02);
      color: var(--sol-cyan);
    }
    #content h2 {
      font-size: 1.5em;
      padding-bottom: 0.3em;
      border-bottom: 1px solid var(--sol-base02);
      color: var(--sol-blue);
    }
    #content h3 {
      font-size: 1.25em;
      color: var(--sol-green);
    }
    #content h4 {
      color: var(--sol-yellow);
    }
    #content h5 {
      color: var(--sol-orange);
    }
    #content h6 {
      color: var(--sol-red);
    }
    #content p {
      margin-top: 0;
      margin-bottom: 16px;
      color: var(--sol-base0);
    }
    #content ul, #content ol {
      padding-left: 2em;
      margin-bottom: 16px;
      color: var(--sol-base0);
    }
    #content li {
      margin-bottom: 4px;
      color: var(--sol-base0);
    }
    #content blockquote {
      padding: 0 1em;
      color: var(--sol-base01);
      border-left: 0.25em solid var(--sol-violet);
      margin-bottom: 16px;
      background: var(--sol-base02);
      padding: 12px 16px;
      border-radius: 4px;
    }
    #content pre {
      background: var(--sol-base02);
      padding: 16px;
      border-radius: 6px;
      overflow: auto;
      font-size: 13px;
      margin-bottom: 16px;
      color: var(--sol-base1);
      border: 1px solid var(--sol-base01);
    }
    #content code {
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      background: var(--sol-base02);
      padding: 0.2em 0.4em;
      border-radius: 3px;
      font-size: 85%;
      color: var(--sol-cyan);
    }
    #content pre code {
      background: transparent;
      padding: 0;
      font-size: inherit;
      color: var(--sol-base0);
    }
    #content strong {
      font-weight: 600;
      color: var(--sol-orange);
    }
    #content em {
      font-style: italic;
      color: var(--sol-base1);
    }
    #content hr {
      height: 0.25em;
      padding: 0;
      margin: 24px 0;
      background-color: var(--sol-base02);
      border: 0;
    }
    #content table {
      border-spacing: 0;
      border-collapse: collapse;
      margin-bottom: 16px;
      width: 100%;
    }
    #content table th, #content table td {
      padding: 6px 13px;
      border: 1px solid var(--sol-base01);
      color: var(--sol-base0);
    }
    #content table th {
      font-weight: 600;
      background: var(--sol-base02);
      color: var(--sol-blue);
    }
    #content table tr:hover {
      background: var(--sol-base02);
    }
    #content a {
      color: var(--sol-blue);
      text-decoration: none;
    }
    #content a:hover {
      text-decoration: underline;
      color: var(--sol-cyan);
    }
    
    .button {
      background: var(--sol-blue);
      color: var(--sol-base3);
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      margin-top: 10px;
      font-weight: 500;
      transition: background-color 0.2s ease;
    }
    .button:hover {
      background: var(--sol-cyan);
    }
  </style>
</head>
<body>
  <div id="content"></div>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script>
    const vscode = acquireVsCodeApi();
    
    // Parse and render markdown content
    const content = ${JSON.stringify(content)};
    document.getElementById('content').innerHTML = marked.parse(content);

    // Handle apply optimization link
    document.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && e.target.href.includes('yuangs.applyOptimization')) {
        e.preventDefault();
        const url = new URL(e.target.href);
        const args = url.searchParams.get('args');
        if (args) {
          vscode.postMessage({
            command: 'applyOptimization',
            args: JSON.parse(decodeURIComponent(args))
          });
        }
      }
    });
  </script>
</body>
</html>`;
  }

  private static escapeHtml(text: string): string {
    // Escape HTML entities manually to avoid using 'document' in webview context
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  private static async handleApplyOptimization(args: any) {
    try {
      const { documentUri, range, optimizedCode } = args;
      
      // Get the document
      const document = await vscode.workspace.openTextDocument(vscode.Uri.parse(documentUri));
      const editor = await vscode.window.showTextDocument(document);
      
      // Apply the optimization
      const edit = new vscode.WorkspaceEdit();
      const selectionRange = new vscode.Range(
        range.start.line, range.start.character,
        range.end.line, range.end.character
      );
      edit.replace(document.uri, selectionRange, optimizedCode);
      
      await vscode.workspace.applyEdit(edit);
      
      vscode.window.showInformationMessage('✅ 代码优化已应用');
    } catch (error) {
      console.error('Error applying optimization:', error);
      vscode.window.showErrorMessage('应用代码优化时发生错误: ' + (error as Error).message);
    }
  }
}