/**
 * Context ↔ Skill 自动晋升规则
 * 
 * 定义 ContextItem 如何自动转化为 Skill 的规则和条件
 */

import { ContextItem } from './contextBuffer';
import { Skill } from './skills';
import { ContextImportance } from './contextImportance';

export interface ContextToSkillRule {
  id: string;
  name: string;
  description: string;
  condition: (contextItem: ContextItem) => boolean;
  action: (contextItem: ContextItem) => Skill | null;
  priority: number; // 数值越大，优先级越高
}

export interface SkillToContextRule {
  id: string;
  name: string;
  description: string;
  condition: (skill: Skill) => boolean;
  action: (skill: Skill) => ContextItem | null;
  priority: number;
}

/**
 * Context → Skill 晋升规则
 */
export class ContextToSkillPromotionRules {
  static readonly RULES: ContextToSkillRule[] = [
    {
      id: 'high-frequency-context',
      name: '高频使用上下文晋升',
      description: '当 ContextItem 被频繁使用且成功率高时，晋升为 Skill',
      priority: 100,
      condition: (contextItem: ContextItem) => {
        if (!contextItem.importance) return false;

        const { useCount, successCount } = contextItem.importance;
        const successRate = useCount > 0 ? successCount / useCount : 0;

        // 使用次数超过阈值且成功率较高
        return useCount >= 5 && successRate >= 0.8;
      },
      action: (contextItem: ContextItem) => {
        if (!contextItem.importance) return null;

        const { useCount, successCount } = contextItem.importance;
        const successRate = useCount > 0 ? successCount / useCount : 0;
        const contextPath = contextItem.path; // 从 ContextItem 获取路径

        // 从路径生成技能名称
        const skillName = contextPath
          .split('/')
          .pop()
          ?.split('.')[0]
          ?.replace(/[^a-zA-Z0-9]/g, '_') || 'unknown_skill';

        return {
          id: `skill_${randomUUID()}`, // 使用随机 UUID 而不是直接复制 context id
          name: skillName,
          description: `从高频使用的上下文 "${contextPath}" 晋升而来的技能。使用次数: ${useCount}, 成功率: ${(successRate * 100).toFixed(2)}%`,
          parameters: {
            contextPath: contextPath
          },
          implementation: `// 从上下文 "${contextPath}" 晋升的技能实现\nreturn contextItem.content;`,
          metadata: {
            source: 'context_promotion',
            originalContextId: contextItem.id, // 保存原始上下文 ID，而不是重要性对象的 ID
            originalContextPath: contextPath,
            originalContextStableId: contextItem.stableId, // 保存原始上下文的稳定 ID
            promotionCriteria: {
              useCount,
              successCount,
              successRate
            }
          }
        };
      }
    },
    {
      id: 'high-importance-context',
      name: '高重要性上下文晋升',
      description: '当 ContextItem 重要性评分持续很高时，晋升为 Skill',
      priority: 90,
      condition: (contextItem: ContextItem) => {
        if (!contextItem.importance) return false;

        const importanceScore = computeContextImportance(contextItem.importance);

        // 重要性评分超过阈值
        return importanceScore >= 0.9;
      },
      action: (contextItem: ContextItem) => {
        if (!contextItem.importance) return null;

        const importanceScore = computeContextImportance(contextItem.importance);
        const contextPath = contextItem.path; // 从 ContextItem 获取路径
        const skillName = `important_${contextPath
          .split('/')
          .pop()
          ?.split('.')[0]
          ?.replace(/[^a-zA-Z0-9]/g, '_') || 'important_skill'}`;

        return {
          id: `skill_${randomUUID()}`, // 使用随机 UUID
          name: skillName,
          description: `从高重要性上下文 "${contextPath}" 晋升而来的技能。重要性评分: ${importanceScore.toFixed(2)}`,
          parameters: {
            contextPath: contextPath
          },
          implementation: `// 从高重要性上下文晋升的技能实现\nreturn contextItem.content;`,
          metadata: {
            source: 'context_promotion',
            originalContextId: contextItem.id, // 保存原始上下文 ID，而不是重要性对象的 ID
            originalContextPath: contextPath,
            originalContextStableId: contextItem.stableId, // 保存原始上下文的稳定 ID
            promotionCriteria: {
              importanceScore
            }
          }
        };
      }
    },
    {
      id: 'explicit-reference-context',
      name: '显式引用上下文晋升',
      description: '当 ContextItem 被多次显式引用且验证有用时，晋升为 Skill',
      priority: 80,
      condition: (contextItem: ContextItem) => {
        // 检查使用统计信息
        if (!contextItem.usageStats) return false;

        const { referencedCount, verifiedUseful } = contextItem.usageStats;
        const usefulnessRate = referencedCount > 0 ? verifiedUseful / referencedCount : 0;

        // 被显式引用次数多且有用率高
        return referencedCount >= 3 && usefulnessRate >= 0.7;
      },
      action: (contextItem: ContextItem) => {
        if (!contextItem.usageStats || !contextItem.importance) return null;

        const { referencedCount, verifiedUseful } = contextItem.usageStats;
        const usefulnessRate = referencedCount > 0 ? verifiedUseful / referencedCount : 0;
        const contextPath = contextItem.path; // 从 ContextItem 获取路径

        const skillName = `referenced_${contextPath
          .split('/')
          .pop()
          ?.split('.')[0]
          ?.replace(/[^a-zA-Z0-9]/g, '_') || 'referenced_skill'}`;

        return {
          id: `skill_${randomUUID()}`, // 使用随机 UUID
          name: skillName,
          description: `从被频繁显式引用的上下文 "${contextPath}" 晋升而来的技能。引用次数: ${referencedCount}, 有用率: ${(usefulnessRate * 100).toFixed(2)}%`,
          parameters: {
            contextPath: contextPath
          },
          implementation: `// 从被显式引用的上下文晋升的技能实现\nreturn contextItem.content;`,
          metadata: {
            source: 'context_promotion',
            originalContextId: contextItem.id, // 保存原始上下文 ID，而不是重要性对象的 ID
            originalContextPath: contextPath,
            originalContextStableId: contextItem.stableId, // 保存原始上下文的稳定 ID
            promotionCriteria: {
              referencedCount,
              verifiedUseful,
              usefulnessRate
            }
          }
        };
      }
    },
    {
      id: 'config-or-script-context',
      name: '配置或脚本上下文晋升',
      description: '当 ContextItem 是配置文件或脚本且被频繁使用时，晋升为 Skill',
      priority: 70,
      condition: (contextItem: ContextItem) => {
        if (!contextItem.importance) return false;

        // 检查是否是配置文件或脚本
        const isConfigOrScript = [
          '.json', '.yaml', '.yml', '.toml', '.ini', '.conf',
          '.sh', '.bash', '.zsh', '.ps1', '.cmd', '.bat'
        ].some(ext => contextItem.path.endsWith(ext));

        if (!isConfigOrScript) return false;

        const { useCount, successCount } = contextItem.importance;
        const successRate = useCount > 0 ? successCount / useCount : 0;

        // 配置或脚本被使用且有一定成功率
        return useCount >= 2 && successRate >= 0.6;
      },
      action: (contextItem: ContextItem) => {
        if (!contextItem.importance) return null;

        const { useCount, successCount } = contextItem.importance;
        const successRate = useCount > 0 ? successCount / useCount : 0;
        const contextPath = contextItem.path; // 从 ContextItem 获取路径

        // 根据文件类型生成不同的技能名称
        let skillName = contextPath
          .split('/')
          .pop()
          ?.replace(/[^a-zA-Z0-9]/g, '_') || 'config_script_skill';

        if (contextPath.endsWith('.sh') || contextPath.endsWith('.bash')) {
          skillName = `exec_${skillName}`;
        } else if (contextPath.endsWith('.json') || contextPath.endsWith('.yaml') || contextPath.endsWith('.yml')) {
          skillName = `read_${skillName}`;
        }

        return {
          id: `skill_${randomUUID()}`, // 使用随机 UUID
          name: skillName,
          description: `从配置文件或脚本 "${contextPath}" 晋升而来的技能。使用次数: ${useCount}, 成功率: ${(successRate * 100).toFixed(2)}%`,
          parameters: {
            contextPath: contextPath
          },
          implementation: `// 从配置文件或脚本晋升的技能实现\nreturn contextItem.content;`,
          metadata: {
            source: 'context_promotion',
            originalContextId: contextItem.id, // 保存原始上下文 ID，而不是重要性对象的 ID
            originalContextPath: contextPath,
            originalContextStableId: contextItem.stableId, // 保存原始上下文的稳定 ID
            promotionCriteria: {
              useCount,
              successCount,
              successRate,
              fileType: 'config_or_script'
            }
          }
        };
      }
    }
  ];

  /**
   * 评估 ContextItem 是否应该晋升为 Skill
   */
  static evaluatePromotion(contextItem: ContextItem): Skill | null {
    // 检查是否已经晋升过
    if ((contextItem as any).metadata?.promotedToSkill) {
      return null;
    }

    // 按优先级排序规则
    const sortedRules = [...this.RULES].sort((a, b) => b.priority - a.priority);

    for (const rule of sortedRules) {
      if (rule.condition(contextItem)) {
        const skill = rule.action(contextItem);
        if (skill) {
          return skill;
        }
      }
    }

    return null;
  }
}

/**
 * Skill → Context 降级规则
 */
export class SkillToContextDemotionRules {
  static readonly RULES: SkillToContextRule[] = [
    {
      id: 'low-usage-skill',
      name: '低使用率技能降级',
      description: '当 Skill 长时间未被使用时，降级为 Context',
      priority: 100,
      condition: (skill: Skill) => {
        // 检查技能元数据中的使用统计
        if (!skill.metadata || !skill.metadata.usageStats) return false;
        
        const { lastUsed, useCount } = skill.metadata.usageStats;
        const daysSinceLastUse = (Date.now() - lastUsed) / (1000 * 60 * 60 * 24);
        
        // 如果长时间未使用且使用次数较少，则考虑降级
        return daysSinceLastUse > 30 && useCount < 3;
      },
      action: (skill: Skill) => {
        // 从技能的元数据中恢复原始上下文信息
        if (skill.metadata && skill.metadata.originalContextPath) {
          return {
            type: 'file', // 假设原始上下文是文件类型
            path: skill.metadata.originalContextPath,
            content: skill.implementation || '', // 使用技能实现作为内容
            tokens: Math.ceil((skill.implementation || '').length / 4), // 估算token数
            importance: {
              id: skill.id.replace('skill_', 'ctx_'),
              path: skill.metadata.originalContextPath,
              type: 'file',
              useCount: skill.metadata.usageStats?.useCount || 0,
              successCount: skill.metadata.usageStats?.successCount || 0,
              failureCount: skill.metadata.usageStats?.failureCount || 0,
              confidence: skill.metadata.usageStats?.confidence || 0.5,
              createdAt: skill.metadata.createdAt || Date.now(),
              lastUsed: skill.metadata.usageStats?.lastUsed || Date.now()
            }
          } as ContextItem;
        }
        
        return null;
      }
    },
    {
      id: 'failed-skill',
      name: '失败技能降级',
      description: '当 Skill 多次执行失败时，降级为 Context 供人工审查',
      priority: 90,
      condition: (skill: Skill) => {
        // 检查技能元数据中的失败统计
        if (!skill.metadata || !skill.metadata.usageStats) return false;
        
        const { failureCount, successCount } = skill.metadata.usageStats;
        const failureRate = (failureCount || 0) / ((successCount || 0) + (failureCount || 0));
        
        // 如果失败率过高，则考虑降级
        return failureRate > 0.7;
      },
      action: (skill: Skill) => {
        // 从技能创建一个上下文项，标记为需要审查
        return {
          type: 'file',
          path: `${skill.name}_failed_skill.txt`,
          content: `此技能 "${skill.name}" 多次执行失败，需要人工审查和修复。\n\n失败次数: ${skill.metadata?.usageStats?.failureCount}\n成功次数: ${skill.metadata?.usageStats?.successCount}\n\n技能实现:\n${skill.implementation}`,
          tokens: Math.ceil(`此技能 "${skill.name}" 多次执行失败，需要人工审查和修复。`.length / 4),
          semantic: 'decision', // 标记为决策类上下文
          importance: {
            id: skill.id.replace('skill_', 'ctx_'),
            path: `${skill.name}_failed_skill.txt`,
            type: 'file',
            useCount: 0,
            successCount: 0,
            failureCount: 0,
            confidence: 0.5,
            createdAt: Date.now(),
            lastUsed: Date.now()
          }
        } as ContextItem;
      }
    }
  ];

  /**
   * 评估 Skill 是否应该降级为 Context
   */
  static evaluateDemotion(skill: Skill): ContextItem | null {
    // 按优先级排序规则
    const sortedRules = [...this.RULES].sort((a, b) => b.priority - a.priority);
    
    for (const rule of sortedRules) {
      if (rule.condition(skill)) {
        const contextItem = rule.action(skill);
        if (contextItem) {
          return contextItem;
        }
      }
    }
    
    return null;
  }
}

// 导入必要的函数
import { computeContextImportance } from './contextImportance';
import { randomUUID } from 'crypto';