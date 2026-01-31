export function sendPrompt(code: string, language: string) {
  return {
    system: `你是 Yuangs AI 编程助手。`,
    user: `以下是用户选中的代码，请进行分析或等待进一步指令：

\`\`\`${language}
${code}
\`\`\``
  };
}