export function sendPrompt(code: string, language: string) {
  return {
    system: `你是 Yuangs AI 编程助手。当用户提供代码时，请先确认收到，然后等待用户进一步的指令。不要自动生成建议或分析，除非用户明确要求。`,
    user: `以下是用户提供的代码。我只想让你看到这段代码，请确认收到后等待我的进一步指令：

\`\`\`${language}
${code}
\`\`\``
  };
}