import { ContextItem } from './contextBuffer';
import { Skill } from './skills';

export interface ContextSkillHint {
  source: 'context';
  path: string;
  suggestedSkillName: string;
  confidence: number; // 0-1, how certain we are this should become a skill
  usageCount: number; // how many times this context was used
  lastUsed: number; // timestamp
  description: string; // description of what this context enables
}

/**
 * 分析ContextItems以生成SkillHints
 * 当ContextItem被频繁使用且与成功任务相关联时，建议将其转换为Skill
 * 
 * @param contextItems ContextItem数组
 * @returns ContextSkillHint数组
 */
export function generateSkillHintsFromContext(contextItems: ContextItem[]): ContextSkillHint[] {
  const hints: ContextSkillHint[] = [];

  for (const item of contextItems) {
    // 检查ContextItem是否满足成为Skill的条件
    if (item.importance) {
      const { useCount, successCount, lastUsed } = item.importance;
      
      // 如果使用次数超过阈值，且有一定成功率，生成Skill建议
      if (useCount >= 3 && successCount > 0) {
        const successRate = successCount / useCount;
        const daysSinceLastUse = (Date.now() - lastUsed) / (1000 * 60 * 60 * 24);
        
        // 计算建议的置信度
        const confidence = Math.min(1, 
          (successRate * 0.6) +  // 成功率权重
          (Math.min(1, useCount / 10) * 0.3) +  // 使用频率权重
          (Math.max(0, (7 - daysSinceLastUse) / 7) * 0.1)  // 新鲜度权重
        );
        
        if (confidence > 0.5) { // 只有置信度超过0.5才生成建议
          hints.push({
            source: 'context',
            path: item.path,
            suggestedSkillName: generateSkillNameFromPath(item.path),
            confidence,
            usageCount: useCount,
            lastUsed,
            description: `Frequently used context from ${item.path} that contributed to ${successCount} successful tasks`
          });
        }
      }
    }
  }

  return hints;
}

/**
 * 从路径生成Skill名称
 * @param path 文件路径
 * @returns 建议的Skill名称
 */
function generateSkillNameFromPath(path: string): string {
  // 移除文件扩展名并使用驼峰命名
  const basename = path.split('/').pop()?.split('.')[0] || path;
  return basename
    .split(/[^a-zA-Z0-9]/)  // 按非字母数字字符分割
    .map((part, index) => 
      index === 0 
        ? part.toLowerCase() 
        : part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    )
    .join('');
}

/**
 * 将ContextSkillHints转换为可显示的文本
 * @param hints ContextSkillHint数组
 * @returns 格式化的字符串
 */
export function formatSkillHints(hints: ContextSkillHint[]): string {
  if (hints.length === 0) {
    return "No skill suggestions generated from context.";
  }

  const lines: string[] = ["Skill Suggestions from Context:", ""];

  for (const hint of hints) {
    lines.push(`- ${hint.suggestedSkillName} (confidence: ${(hint.confidence * 100).toFixed(1)}%)`);
    lines.push(`  Path: ${hint.path}`);
    lines.push(`  Usage: ${hint.usageCount}, Last used: ${new Date(hint.lastUsed).toLocaleDateString()}`);
    lines.push(`  Description: ${hint.description}`);
    lines.push("");
  }

  return lines.join("\n");
}