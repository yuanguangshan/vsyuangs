import { askAI } from '../ai/client';

export function buildContextSummaryPrompt(
  type: 'file' | 'directory',
  path: string,
  content: string
) {
  return `
你是一个代码与文档压缩器。

目标：
- 最大限度保留"之后回答问题所需的信息"
- 删除实现细节、重复内容、噪声
- 不要加入推测

请将以下 ${type} 内容压缩为 **结构化摘要**：

路径: ${path}

要求格式：
- 用项目符号
- 保留：职责 / 接口 / 关键数据结构 / 关键行为
- 代码只保留函数签名或核心逻辑描述
- 不超过原内容的 20%

内容：
\`\`\`
${content}
\`\`\`
`;
}

export async function summarizeContext(
  item: { type: 'file' | 'directory'; path: string; content: string }
): Promise<string> {
  const prompt = buildContextSummaryPrompt(
    item.type,
    item.path,
    item.content
  );

  const summary = await askAI(prompt);
  return summary.trim();
}