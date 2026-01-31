export function optimizePrompt(code: string, language: string) {
  return {
    system: `你是一位资深 ${language} 架构师。

请在【不改变原有行为】的前提下优化以下代码。

要求：
- 可读性更好
- 性能或健壮性提升
- 保持语义一致

返回格式必须是：

---original
<原始代码>

---optimized
<优化后的代码>`,
    user: `代码：
\`\`\`${language}
${code}
\`\`\``
  };
}