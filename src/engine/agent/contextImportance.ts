import { randomUUID } from 'crypto';

export interface ContextImportance {
  id: string;              // stable id
  path: string;            // file / dir path
  type: 'file' | 'directory';

  // === Usage stats ===
  useCount: number;
  successCount: number;
  failureCount: number;

  // === Time ===
  lastUsed: number;
  createdAt: number;

  // === Learned weight ===
  confidence: number;      // 0 ~ 1, init 0.5
}

/**
 * 计算上下文重要性分数
 * 评分公式与Skill系统保持一致
 * @param ctx ContextImportance对象
 * @param now 当前时间戳
 * @returns 重要性分数 (0-1)
 */
export function computeContextImportance(
  ctx: ContextImportance,
  now = Date.now()
): number {
  const total = ctx.successCount + ctx.failureCount;
  const successRate = total === 0 ? 0.5 : ctx.successCount / total;

  const idleDays = (now - ctx.lastUsed) / (1000 * 60 * 60 * 24);
  const freshness = Math.exp(-idleDays / 14); // 14 天半衰

  return (
    0.45 * successRate +
    0.35 * freshness +
    0.20 * ctx.confidence
  );
}

/**
 * 创建新的ContextImportance对象
 * @param path 文件或目录路径
 * @param type 类型
 * @returns ContextImportance对象
 */
export function createContextImportance(path: string, type: 'file' | 'directory'): ContextImportance {
  const now = Date.now();
  return {
    id: randomUUID(),
    path,
    type,
    useCount: 0,
    successCount: 0,
    failureCount: 0,
    confidence: 0.5,
    createdAt: now,
    lastUsed: now
  };
}

/**
 * 更新ContextImportance状态
 * @param ctx ContextImportance对象
 * @param success 是否成功
 */
export function updateContextImportance(ctx: ContextImportance, success: boolean) {
  ctx.useCount++;
  ctx.lastUsed = Date.now();

  if (success) {
    ctx.successCount++;
    ctx.confidence = Math.min(1, ctx.confidence + 0.05);
  } else {
    ctx.failureCount++;
    ctx.confidence = Math.max(0, ctx.confidence - 0.1);
  }
}