import * as vscode from 'vscode';
import { YuangsPanel } from '../sidePanel/YuangsPanel';

/**
 * 优化代码命令处理
 */
export async function optimizeCode(
  document: vscode.TextDocument,
  range: vscode.Range | vscode.Selection
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
  const { optimizedCode, explanation } = await callAiOptimization(originalCode);

  // 3. 生成 Markdown 格式的输出
  const markdownContent = generateMarkdown(originalCode, optimizedCode, explanation);

  // 4. 在侧边栏显示 Markdown 内容
  YuangsPanel.show(markdownContent, 'Yuangs AI - 代码优化');
}

/**
 * 生成 Markdown 格式的输出
 */
function generateMarkdown(originalCode: string, optimizedCode: string, explanation: string): string {
  return `# 代码优化建议

${explanation}

## 原始代码

\`\`\`
${originalCode}
\`\`\`

## 优化后的代码

\`\`\`
${optimizedCode}
\`\`\`

---

[应用优化](yuangs.applyOptimization?args=${encodeURIComponent(JSON.stringify({
  documentUri: vscode.window.activeTextEditor?.document.uri.toString(),
  range: vscode.window.activeTextEditor?.selection,
  optimizedCode: optimizedCode
}))})
`;
}

/**
 * 模拟 AI 调用函数
 */
async function callAiOptimization(code: string): Promise<{ optimizedCode: string; explanation: string }> {
  // 这里是你调用 YuangsEngine 的地方
  // const result = await YuangsEngine.optimize(code);
  
  // 模拟返回优化后的代码和解释
  const optimizedCode = code.replace(/const/g, 'let');
  const explanation = `### 优化说明

本次优化对代码进行了以下改进：

1. **变量声明优化**：将 \`const\` 改为 \`let\`，允许变量重新赋值
2. **代码可读性**：保持原有逻辑不变，仅调整变量声明方式

**建议**：如果变量在后续需要重新赋值，使用 \`let\；如果不需要，继续使用 \`const\` 更安全。`;
  
  return { optimizedCode, explanation };
}
