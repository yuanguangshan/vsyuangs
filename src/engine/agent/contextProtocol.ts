import { ContextBuffer, ContextItem } from './contextBuffer';
import { randomUUID } from 'crypto';
import { ExtendedContextProtocol } from './contextDSL';

/**
 * Context引用协议v1实现
 * 定义了ContextItem如何被显式引用、管理和注入的协议
 */

export interface ContextReference {
  path: string;
  alias?: string;
  lineRange?: { start: number; end?: number };
  timestamp: number;
  responseId?: string;
}

export interface ContextProtocolResult {
  referencedItems: ContextReference[];
  extractedContent: string;
  isValid: boolean;
  errors: string[];
}

/**
 * 解析AI响应中的Context引用
 * @param response AI的响应内容
 * @returns 解析出的Context引用信息
 */
export function parseContextReferences(response: string): ContextProtocolResult {
  const result: ContextProtocolResult = {
    referencedItems: [],
    extractedContent: response,
    isValid: true,
    errors: []
  };

  // 匹配显式引用格式，如 [Reference] file: path/to/file.ts (path/to/file.ts) 或类似格式
  const referenceRegex = /\[Reference\]\s+([^:\s]+):\s*([^(]+?)\s*\(([^)]+)\)/g;
  let match;

  while ((match = referenceRegex.exec(response)) !== null) {
    const [, type, description, path] = match;

    const reference: ContextReference = {
      path: path.trim(),
      timestamp: Date.now()
    };

    result.referencedItems.push(reference);
  }

  // 匹配 DSL 查询语法 (例如: type:file importance:>0.5)
  // ✅ 改进正则：路径引用不应包含空格，除非在引号内
  const dslRegex = /[@#](?:"[^"]+"|'[^']+'|[^\s]+)|"[^"]*"|'[^']*'|[a-z_]+:[^\s]+/gi;
  let dslMatch;
  while ((dslMatch = dslRegex.exec(response)) !== null) {
    const dslPart = dslMatch[0];

    // 检查是否是 DSL 查询语法 (包含冒号且不是文件路径)
    if (dslPart.includes(':') && !dslPart.startsWith('/') && !dslPart.includes('.') && !dslPart.includes('\\')) {
      // 这可能是 DSL 查询的一部分，暂时跳过，因为我们需要完整的查询
      continue;
    }

    // 检查是否是路径引用 (@file 或 #dir)
    if (dslPart.startsWith('@') || dslPart.startsWith('#')) {
      // ✅ 修复：支持带空格的引用，例如 @package.json 或 @src/core/types.ts
      const path = dslPart.substring(1).replace(/['"]/g, '');
      if (!result.referencedItems.some(ref => ref.path === path)) {
        result.referencedItems.push({
          path,
          timestamp: Date.now()
        });
      }
    }
  }

  // 也可以匹配JSON格式的引用（如果AI输出遵循特定格式）
  try {
    // 尝试查找JSON块中的引用信息
    const jsonMatch = response.match(/```json\n([\s\S]*?)\n```/);
    if (jsonMatch) {
      const jsonData = JSON.parse(jsonMatch[1]);

      // 如果JSON中包含used_context字段
      if (jsonData.used_context && Array.isArray(jsonData.used_context)) {
        for (const path of jsonData.used_context) {
          if (!result.referencedItems.some(ref => ref.path === path)) {
            result.referencedItems.push({
              path,
              timestamp: Date.now()
            });
          }
        }
      }
    }
  } catch (e) {
    // 如果JSON解析失败，继续处理
  }

  return result;
}

/**
 * 验证Context引用的有效性
 * @param references Context引用列表
 * @param availableItems 可用的ContextItem列表
 * @returns 验证结果
 */
export function validateContextReferences(references: ContextReference[], availableItems: ContextItem[]): {
  valid: ContextReference[];
  invalid: ContextReference[];
  warnings: string[];
} {
  const valid: ContextReference[] = [];
  const invalid: ContextReference[] = [];
  const warnings: string[] = [];

  for (const ref of references) {
    const foundItem = availableItems.find(item =>
      item.path === ref.path ||
      (item.alias && item.alias === ref.path)
    );

    if (foundItem) {
      valid.push(ref);
    } else {
      invalid.push(ref);
      warnings.push(`Context item not found: ${ref.path}`);
    }
  }

  return { valid, invalid, warnings };
}

/**
 * 根据引用协议构建上下文提示
 * @param contextBuffer ContextBuffer实例
 * @param userInput 用户输入
 * @param referencedPaths 显式引用的路径列表
 * @returns 构建的提示字符串
 */
export async function buildContextPromptWithReferences(
  contextBuffer: ContextBuffer,
  userInput: string,
  referencedPaths?: string[]
): Promise<string> {
  // 首先检查用户输入是否包含 DSL 查询
  const dslContextItems = await contextBuffer.getDSLContextForInput(userInput);

  let filteredItems: ContextItem[];

  if (dslContextItems.length > 0) {
    // 如果有 DSL 查询结果，使用 DSL 结果
    filteredItems = dslContextItems;
  } else if (referencedPaths && referencedPaths.length > 0) {
    // 如果提供了显式引用路径，优先处理这些项
    const allItems = contextBuffer.export();
    filteredItems = allItems.filter(item =>
      referencedPaths.includes(item.path) ||
      (item.alias && referencedPaths.includes(item.alias))
    );
  } else {
    // 否则使用所有可用项
    filteredItems = contextBuffer.export();
  }

  // 按重要性分组
  const highConfidenceItems = filteredItems.filter(item =>
    item.importance && computeContextImportance(item.importance) > 0.7
  );
  const mediumConfidenceItems = filteredItems.filter(item =>
    item.importance &&
    computeContextImportance(item.importance) > 0.3 &&
    computeContextImportance(item.importance) <= 0.7
  );
  const lowConfidenceItems = filteredItems.filter(item =>
    !item.importance || computeContextImportance(item.importance) <= 0.3
  );

  // 构建不同部分的上下文
  const sections = [];

  if (highConfidenceItems.length > 0) {
    // 按语义类型进一步细分高置信度项
    const semanticGroups: Record<string, typeof highConfidenceItems> = {};
    for (const item of highConfidenceItems) {
      const semantic = item.semantic || 'other';
      if (!semanticGroups[semantic]) {
        semanticGroups[semantic] = [];
      }
      semanticGroups[semantic].push(item);
    }

    for (const [semantic, items] of Object.entries(semanticGroups)) {
      const semanticBlock = items.map(item => {
        const title = item.alias
          ? `[Reference] ${item.type}: ${item.alias} (${item.path})`
          : `[Reference] ${item.type}: ${item.path}`;

        // ✅ 修复：对于高置信度或显式引用的项，除非内容被归档，否则优先显示完整 content
        const isUserReferenced = item.tags?.includes('user-referenced') || item.tags?.includes('explicit') || item.tags?.includes('user-selected');
        const isArchived = item.content?.includes('[ARCHIVED:');

        const body = (isUserReferenced && !isArchived) ? item.content : (item.summary ?? item.content);

        return `${title}\n---\n${body}\n---`;
      }).join('\n\n');

      sections.push(`# Background Knowledge (${semantic.charAt(0).toUpperCase() + semantic.slice(1)} - High Confidence)\n${semanticBlock}`);
    }
  }

  if (mediumConfidenceItems.length > 0) {
    // 按语义类型进一步细分中置信度项
    const semanticGroups: Record<string, typeof mediumConfidenceItems> = {};
    for (const item of mediumConfidenceItems) {
      const semantic = item.semantic || 'other';
      if (!semanticGroups[semantic]) {
        semanticGroups[semantic] = [];
      }
      semanticGroups[semantic].push(item);
    }

    for (const [semantic, items] of Object.entries(semanticGroups)) {
      const semanticBlock = items.map(item => {
        const title = item.alias
          ? `[Reference] ${item.type}: ${item.alias} (${item.path})`
          : `[Reference] ${item.type}: ${item.path}`;

        // ✅ 修复：对于显式引用的项，优先显示完整 content
        const isUserReferenced = item.tags?.includes('user-referenced') || item.tags?.includes('explicit') || item.tags?.includes('user-selected');
        const isArchived = item.content?.includes('[ARCHIVED:');

        const body = (isUserReferenced && !isArchived) ? item.content : (item.summary ?? item.content);

        return `${title}\n---\n${body}\n---`;
      }).join('\n\n');

      sections.push(`# Supporting Information (${semantic.charAt(0).toUpperCase() + semantic.slice(1)} - Medium Confidence)\n${semanticBlock}`);
    }
  }

  if (lowConfidenceItems.length > 0) {
    // 按语义类型进一步细分低置信度项
    const semanticGroups: Record<string, typeof lowConfidenceItems> = {};
    for (const item of lowConfidenceItems) {
      const semantic = item.semantic || 'other';
      if (!semanticGroups[semantic]) {
        semanticGroups[semantic] = [];
      }
      semanticGroups[semantic].push(item);
    }

    for (const [semantic, items] of Object.entries(semanticGroups)) {
      const semanticBlock = items.map(item => {
        const title = item.alias
          ? `[Reference] ${item.type}: ${item.alias} (${item.path})`
          : `[Reference] ${item.type}: ${item.path}`;

        // ✅ 修复：对于显式引用的项，优先显示完整 content
        const isUserReferenced = item.tags?.includes('user-referenced') || item.tags?.includes('explicit') || item.tags?.includes('user-selected');
        const isArchived = item.content?.includes('[ARCHIVED:');

        const body = (isUserReferenced && !isArchived) ? item.content : (item.summary ?? item.content);

        return `${title}\n---\n${body}\n---`;
      }).join('\n\n');

      sections.push(`# Archived References (${semantic.charAt(0).toUpperCase() + semantic.slice(1)} - Low Confidence)\n${semanticBlock}`);
    }
  }

  const contextBlock = sections.join('\n\n');

  return `
${contextBlock}

# Task Instructions
Based on the provided context (if any), answer the user's question. If the context contains source code, treat it as your "source of truth."

User Question:
${userInput}
`;
}

/**
 * 验证Context引用的有效性
 * @param responseId 响应ID
 * @param expectedPaths 期望被引用的路径
 * @param actualReferences 实际引用的路径
 * @returns 验证结果
 */
export function validateResponseReferences(
  responseId: string,
  expectedPaths: string[],
  actualReferences: ContextReference[]
): {
  success: boolean;
  matched: string[];
  missing: string[];
  extra: string[];
  accuracy: number; // 0-1, 引用准确率
} {
  const actualPaths = actualReferences.map(ref => ref.path);
  const matched = expectedPaths.filter(path => actualPaths.includes(path));
  const missing = expectedPaths.filter(path => !actualPaths.includes(path));
  const extra = actualPaths.filter(path => !expectedPaths.includes(path));

  const totalExpected = expectedPaths.length;
  const totalActual = actualReferences.length;
  const correctlyReferenced = matched.length;

  // 计算准确率：考虑正确引用和额外引用的平衡
  const accuracy = totalExpected > 0
    ? correctlyReferenced / totalExpected  // 查全率
    : (totalActual - extra.length) / Math.max(totalActual, 1); // 如果没有预期引用，则看有多少是相关的

  return {
    success: missing.length === 0 && extra.length <= Math.floor(expectedPaths.length * 0.2), // 允许最多20%的额外引用
    matched,
    missing,
    extra,
    accuracy
  };
}

/**
 * 生成Context引用回溯报告
 * @param contextBuffer ContextBuffer实例
 * @param responseId 响应ID
 * @param userInput 用户输入
 * @param response AI响应
 * @returns 回溯报告
 */
export async function generateReferenceRetrospective(
  contextBuffer: ContextBuffer,
  responseId: string,
  userInput: string,
  response: string
): Promise<string> {
  const allItems = contextBuffer.export();
  const references = parseContextReferences(response);

  // 统计引用情况
  const referencedItems = allItems.filter(item =>
    references.referencedItems.some(ref => ref.path === item.path)
  );

  // 验证引用的有效性
  const validation = validateContextReferences(
    references.referencedItems,
    allItems
  );

  // 计算引用统计
  const stats = {
    totalContextItems: allItems.length,
    referencedItemsCount: referencedItems.length,
    validReferences: validation.valid.length,
    invalidReferences: validation.invalid.length,
    referenceAccuracy: allItems.length > 0
      ? validation.valid.length / (validation.valid.length + validation.invalid.length || 1)
      : 0
  };

  // 生成报告
  const reportLines = [
    '# Context Reference Retrospective Report',
    '',
    '## Query',
    userInput,
    '',
    '## Statistics',
    `- Total Context Items: ${stats.totalContextItems}`,
    `- Referenced Items: ${stats.referencedItemsCount}`,
    `- Valid References: ${stats.validReferences}`,
    `- Invalid References: ${stats.invalidReferences}`,
    `- Reference Accuracy: ${(stats.referenceAccuracy * 100).toFixed(2)}%`,
    '',
    '## Referenced Context Items',
    ...(referencedItems.length > 0
      ? referencedItems.map(item => `- ${item.path} (${item.type})`)
      : ['None']),
    '',
    '## Invalid References',
    ...(validation.invalid.length > 0
      ? validation.invalid.map(ref => `- ${ref.path}`)
      : ['None']),
    '',
    '## Response Excerpt',
    response.length > 200
      ? response.substring(0, 200) + '...'
      : response
  ];

  return reportLines.join('\n');
}

/**
 * 分析ContextItem的生命周期和演变
 * @param contextBuffer ContextBuffer实例
 * @returns ContextItem生命周期分析
 */
export function analyzeContextLifecycle(
  contextBuffer: ContextBuffer
): Array<{
  path: string;
  usageTrend: number; // 使用趋势 (-1 to 1)
  qualityScore: number; // 质量评分 (0 to 1)
  relevanceScore: number; // 相关性评分 (0 to 1)
  recommendation: 'keep' | 'archive' | 'remove' | 'enhance';
}> {
  const items = contextBuffer.export();

  return items.map(item => {
    // 计算使用趋势 (基于useCount和时间)
    const now = Date.now();
    const daysSinceCreated = (now - (item.importance?.createdAt || now)) / (1000 * 60 * 60 * 24);
    const avgUsesPerDay = item.importance ? item.importance.useCount / (daysSinceCreated || 1) : 0;

    // 使用趋势：正值表示使用频率增加，负值表示减少
    const usageTrend = avgUsesPerDay > 0.5 ? 1 : (avgUsesPerDay > 0.1 ? 0.5 : 0);

    // 质量评分：结合显式引用和验证结果
    const qualityScore = item.usageStats
      ? (item.usageStats.verifiedUseful + 1) /
      (item.usageStats.verifiedUseful + item.usageStats.verifiedNotUseful + 2)
      : 0.5; // 默认中等评分

    // 相关性评分：结合重要性分数和显式引用次数
    const relevanceScore = item.importance
      ? (computeContextImportance(item.importance) +
        (item.usageStats ? Math.min(1, item.usageStats.referencedCount / 10) : 0)) / 2
      : 0.5;

    // 生成推荐
    let recommendation: 'keep' | 'archive' | 'remove' | 'enhance' = 'keep';
    if (relevanceScore < 0.2 && qualityScore < 0.3) {
      recommendation = 'remove';
    } else if (relevanceScore < 0.4 && qualityScore < 0.5) {
      recommendation = 'archive';
    } else if (relevanceScore > 0.7 && qualityScore > 0.8) {
      recommendation = 'enhance'; // 高价值，建议增强
    }

    return {
      path: item.path,
      usageTrend,
      qualityScore,
      relevanceScore,
      recommendation
    };
  });
}

// 导入必要的函数
import { computeContextImportance } from './contextImportance';