export function explainPrompt(code: string, language: string) {
  return {
    system: `你是一位资深 ${language} 工程师。

请用【简洁、结构化】的方式解释以下代码：

- 核心作用
- 关键逻辑
- 可能的边界情况
- 是否存在风险或改进点`,
    user: `代码：
\`\`\`${language}
${code}
\`\`\``
  };
}