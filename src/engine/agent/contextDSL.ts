/**
 * Context 引用 DSL v2
 *
 * 在 v1 基础上增加了更丰富的查询和过滤功能
 */

import { ContextItem } from './contextBuffer';
import { ContextReference } from './contextProtocol';
import { computeContextImportance } from './contextImportance';

export interface DSLQuery {
  /** 基础路径匹配 */
  path?: string;

  /** 路径模式匹配 (支持 glob) */
  pathPattern?: string;

  /** 上下文类型 */
  type?: 'file' | 'directory' | 'runtime' | 'generated';

  /** 语义类型 */
  semantic?: 'source_code' | 'log' | 'config' | 'decision' | 'evidence' | 'documentation' | 'test' | 'requirement';

  /** 最小重要性阈值 */
  minImportance?: number;

  /** 标签过滤 */
  tags?: string[];

  /** 时间范围过滤 */
  timeRange?: {
    from?: number;
    to?: number;
  };

  /** 内容关键词搜索 */
  keywords?: string[];

  /** 项目作用域 */
  projectScope?: string;
}

export interface DSLFilterOptions {
  /** 排序方式 */
  sortBy?: 'importance' | 'recency' | 'relevance' | 'path';

  /** 排序方向 */
  sortOrder?: 'asc' | 'desc';

  /** 限制返回数量 */
  limit?: number;

  /** 跳过数量 */
  offset?: number;
}

export interface DSLResult {
  items: ContextItem[];
  total: number;
  queryTime: number;
}

/**
 * DSL 解析器
 * 将 DSL 字符串解析为查询对象
 */
export class DSLParser {
  /**
   * 解析 DSL 查询字符串
   */
  static parse(queryString: string): DSLQuery {
    const query: DSLQuery = {};

    // 按空格分割查询字符串
    const parts = queryString.trim().split(/\s+/);

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (part.startsWith('@') || part.startsWith('#')) {
        // 处理路径引用
        if (part.startsWith('@!')) {
          // 执行型引用，暂不处理
          continue;
        } else if (part.startsWith('#')) {
          // 目录引用
          // Check if next part exists and doesn't start with special chars - if so, combine them
          if (i + 1 < parts.length && !parts[i + 1].startsWith('@') && !parts[i + 1].startsWith('#') && !parts[i + 1].includes(':')) {
            query.path = parts[++i]; // Use the next part as the path
          } else {
            query.path = part.substring(1);
          }
          query.type = 'directory';
        } else {
          // 文件引用
          // Check if next part exists and doesn't start with special chars - if so, combine them
          if (i + 1 < parts.length && !parts[i + 1].startsWith('@') && !parts[i + 1].startsWith('#') && !parts[i + 1].includes(':')) {
            query.path = parts[++i]; // Use the next part as the path
          } else {
            query.path = part.substring(1);
          }
          query.type = 'file';
        }
      } else if (part.includes(':')) {
        // 处理键值对
        const [key, value] = part.split(':');

        switch (key.toLowerCase()) {
          case 'type':
            if (value === 'file' || value === 'directory' || value === 'runtime' || value === 'generated') {
              query.type = value;
            }
            break;

          case 'semantic':
            if (value === 'source_code' || value === 'log' || value === 'config' ||
                value === 'decision' || value === 'evidence' || value === 'documentation' ||
                value === 'test' || value === 'requirement') {
              query.semantic = value;
            }
            break;

          case 'importance':
            // 解析重要性比较操作符
            const importanceMatch = value.match(/^([<>]=?)(\d+(\.\d+)?)$/);
            if (importanceMatch) {
              const [, op, numStr] = importanceMatch;
              const num = parseFloat(numStr);

              if (op === '>' || op === '>=') {
                query.minImportance = num;
              }
            }
            break;

          case 'tag':
          case 'tags':
            if (!query.tags) query.tags = [];
            query.tags.push(value);
            break;

          case 'path':
            query.pathPattern = value;
            break;

          case 'keyword':
          case 'keywords':
            if (!query.keywords) query.keywords = [];
            query.keywords.push(...value.split(','));
            break;

          case 'project':
            query.projectScope = value;
            break;
        }
      }
    }

    return query;
  }
}

/**
 * DSL 查询引擎
 * 根据查询条件过滤和排序 ContextItem
 */
export class DSLQueryEngine {
  constructor(private contextItems: ContextItem[]) {}

  /**
   * 执行 DSL 查询
   */
  execute(query: DSLQuery, options: DSLFilterOptions = {}): DSLResult {
    const startTime = Date.now();

    // 应用过滤器
    let filteredItems = this.applyFilters(this.contextItems, query);

    // 应用排序
    filteredItems = this.applySorting(filteredItems, options);

    // 应用分页
    const total = filteredItems.length;
    filteredItems = this.applyPagination(filteredItems, options);

    const endTime = Date.now();

    return {
      items: filteredItems,
      total,
      queryTime: endTime - startTime
    };
  }

  private applyFilters(items: ContextItem[], query: DSLQuery): ContextItem[] {
    return items.filter(item => {
      // 路径匹配（修复版）
      if (query.path) {
        // ✅ 增强修复：标准化路径分隔符 (统一转为 /)
        // 解决 Windows 下 path 为反斜杠而 alias 为正斜杠导致的匹配失败
        const normalize = (p: string) => p.replace(/\\/g, '/');
        const qPath = normalize(query.path);
        const iPath = normalize(item.path);

        // 1. 尝试绝对路径精确匹配
        const exactMatch = iPath === qPath;

        // 2. 尝试 Alias 匹配 (移除 @ 前缀比较)
        const rawAlias = item.alias || '';
        const normAlias = normalize(rawAlias);
        const cleanAlias = normAlias.replace(/^@/, '');
        
        const aliasMatch = normAlias === qPath || cleanAlias === qPath;

        // 3. 尝试相对路径/后缀匹配 (智能匹配)
        // 如果 query.path 是 "utils.ts"，它应该匹配 "/.../src/utils.ts"
        const suffixMatch = qPath && (
          iPath.endsWith(qPath) ||
          iPath.endsWith('/' + qPath)
        ) || false;

        // 只要满足任意一个条件，就算匹配成功
        if (!exactMatch && !aliasMatch && !suffixMatch) {
          return false;
        }
      }

      // 路径模式匹配 (简化版 glob)
      if (query.pathPattern) {
        if (!this.matchesGlob(item.path, query.pathPattern)) {
          return false;
        }
      }

      // 类型匹配
      if (query.type && item.type !== query.type) {
        return false;
      }

      // 语义类型匹配
      if (query.semantic && item.semantic !== query.semantic) {
        return false;
      }

      // 重要性过滤
      if (query.minImportance !== undefined && item.importance) {
        const importance = computeContextImportance(item.importance);
        if (importance < query.minImportance) {
          return false;
        }
      }

      // 标签过滤
      if (query.tags && query.tags.length > 0) {
        if (!item.tags || !query.tags.every(tag => item.tags?.includes(tag))) {
          return false;
        }
      }

      // 时间范围过滤
      if (query.timeRange) {
        if (item.importance) {
          const lastUsed = item.importance.lastUsed;

          if (query.timeRange.from && lastUsed < query.timeRange.from) {
            return false;
          }

          if (query.timeRange.to && lastUsed > query.timeRange.to) {
            return false;
          }
        }
      }

      // 关键词搜索
      if (query.keywords && query.keywords.length > 0) {
        const contentToSearch = item.content.toLowerCase();
        const hasKeyword = query.keywords.some(keyword =>
          contentToSearch.includes(keyword.toLowerCase())
        );

        if (!hasKeyword) {
          return false;
        }
      }

      // 项目作用域过滤
      if (query.projectScope) {
        // 这里假设将来 ContextItem 会有 projectScope 字段
        // 暂时跳过
      }

      return true;
    });
  }

  private applySorting(items: ContextItem[], options: DSLFilterOptions): ContextItem[] {
    const { sortBy = 'importance', sortOrder = 'desc' } = options;

    return items.sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case 'importance':
          if (a.importance && b.importance) {
            comparison = computeContextImportance(b.importance) - computeContextImportance(a.importance);
          } else if (a.importance) {
            comparison = -1;
          } else if (b.importance) {
            comparison = 1;
          }
          break;

        case 'recency':
          if (a.importance && b.importance) {
            comparison = b.importance.lastUsed - a.importance.lastUsed;
          } else if (a.importance) {
            comparison = -1;
          } else if (b.importance) {
            comparison = 1;
          }
          break;

        case 'relevance':
          // 使用 ContextBuffer 中的 computeItemScore 方法
          // 这里简化处理，使用重要性作为相关性
          if (a.importance && b.importance) {
            comparison = computeContextImportance(b.importance) - computeContextImportance(a.importance);
          }
          break;

        case 'path':
          comparison = a.path.localeCompare(b.path);
          break;
      }

      return sortOrder === 'desc' ? comparison : -comparison;
    });
  }

  private applyPagination(items: ContextItem[], options: DSLFilterOptions): ContextItem[] {
    const { limit, offset = 0 } = options;

    if (limit !== undefined) {
      return items.slice(offset, offset + limit);
    }

    return items;
  }

  /**
   * 简化的 glob 匹配
   */
  private matchesGlob(path: string, pattern: string): boolean {
    // 简单的 glob 实现，支持 * 和 **
    const regexPattern = pattern
      .replace(/\./g, '\\.') // 转义点号
      .replace(/\*/g, '.*')  // * 匹配任意字符
      .replace(/\*\*/g, '.*'); // ** 也匹配任意字符（简化处理）

    const regex = new RegExp(`^${regexPattern}$`);
    return regex.test(path);
  }
}

/**
 * 扩展的 ContextProtocol，支持 DSL 查询
 */
export class ExtendedContextProtocol {
  /**
   * 使用 DSL 查询上下文
   */
  static async queryContext(dslQuery: string, availableItems: ContextItem[]): Promise<ContextItem[]> {
    const parsedQuery = DSLParser.parse(dslQuery);
    const engine = new DSLQueryEngine(availableItems);
    const result = engine.execute(parsedQuery);

    return result.items;
  }

  /**
   * 解析包含 DSL 的用户输入
   */
  static parseUserInput(input: string): { dslQueries: string[]; plainText: string } {
    // 提取 DSL 查询（以 @ 或 # 开头的部分）
    const dslRegex = /[@#][^{}`]+|"[^"]*"|'[^']*'/g;
    const dslMatches: string[] = [];
    let plainText = input;

    let match;
    while ((match = dslRegex.exec(input)) !== null) {
      dslMatches.push(match[0]);
    }

    // 从原文中移除 DSL 部分，得到纯文本
    for (const dsl of dslMatches) {
      plainText = plainText.replace(dsl, '').trim();
    }

    return {
      dslQueries: dslMatches,
      plainText
    };
  }
}