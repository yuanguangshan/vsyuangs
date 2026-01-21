import { ContextItem } from './contextBuffer';

export interface ContextSnapshot {
  items: Array<{
    path: string;
    hash: string; // 内容哈希，用于检测变化
    tokens: number;
    semantic?: string; // 语义类型
    summaryQuality?: number; // 摘要质量
  }>;
}

export interface ContextDiff {
  added: string[];
  removed: string[];
  changed: string[];
}

/**
 * 计算两个上下文快照之间的差异
 * @param prev 上一个快照，如果为null表示首次快照
 * @param curr 当前快照
 * @returns 上下文差异对象
 */
export function diffContext(
  prev: ContextSnapshot | null,
  curr: ContextSnapshot
): ContextDiff {
  if (!prev) {
    return {
      added: curr.items.map(i => i.path),
      removed: [],
      changed: []
    };
  }

  const prevMap = new Map(prev.items.map(i => [i.path, i]));
  const currMap = new Map(curr.items.map(i => [i.path, i]));

  const added: string[] = [];
  const removed: string[] = [];
  const changed: string[] = [];

  for (const [path, item] of currMap) {
    const old = prevMap.get(path);
    if (!old) {
      added.push(path);
    } else if (old.hash !== item.hash) {
      changed.push(path);
    }
  }

  for (const path of prevMap.keys()) {
    if (!currMap.has(path)) {
      removed.push(path);
    }
  }

  return { added, removed, changed };
}

import { ContextItem } from './contextBuffer';

/**
 * 从ContextBuffer创建快照
 * @param buffer ContextBuffer实例
 * @returns ContextSnapshot
 */
export function snapshotFromBuffer(buffer: { items: ContextItem[] }): ContextSnapshot {
  const items = buffer.items || [];
  return {
    items: items.map((item: ContextItem) => ({
      path: item.path,
      hash: calculateHash(item.content), // 简单的哈希计算
      tokens: item.tokens,
      semantic: item.semantic,
      summaryQuality: item.summaryQuality
    }))
  };
}

/**
 * 简单的内容哈希计算
 * @param content 内容字符串
 * @returns 哈希字符串
 */
function calculateHash(content: string): string {
  let hash = 0;
  for (let i = 0; i < content.length; i++) {
    const char = content.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0; // 转换为32位整数
  }
  return hash.toString();
}