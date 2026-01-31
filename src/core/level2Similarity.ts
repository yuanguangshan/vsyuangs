/**
 * Level 2 Similarity Algorithms - 模糊定位相似度计算
 * 
 * 目标：
 * - 实现 LCS (Longest Common Subsequence) 相似度
 * - 实现 Jaccard Token 相似度
 * - 组合相似度评分公式
 * - 支持 early-exit cutoff 机制控制大文本性能
 * 
 * 原则：
 * - O(n·m) 复杂度，通过 cutoff 控制性能
 * - Token 级匹配，降低噪音
 * - 可配置阈值
 */

/**
 * LCS (Longest Common Subsequence) 相似度
 * 
 * 计算两个序列的最长公共子序列长度，归一化到 [0, 1]
 * 
 * 复杂度：O(n·m)
 * 
 * @param a 第一个序列
 * @param b 第二个序列
 * @param cutoff 最大计算限制，超过则提前退出（默认 10000）
 * @returns 相似度 [0, 1]
 */
export function lcsSimilarity(
  a: string[],
  b: string[],
  cutoff = 10000
): number {
  const n = a.length;
  const m = b.length;

  // Early exit: 如果任一序列为空
  if (n === 0 || m === 0) {
    return 0;
  }

  // Early exit: 如果序列太大且超过 cutoff
  if (n * m > cutoff) {
    console.warn(`[Level2Similarity] LCS early exit: ${n} × ${m} > ${cutoff}`);
    return 0; // 返回 0 表示无法可靠计算
  }

  // DP 矩阵优化：只保留两行
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

  let operations = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      operations++;

      // Early exit: 超过 cutoff
      if (operations > cutoff) {
        console.warn(`[Level2Similarity] LCS early exit at ${operations} operations`);
        return dp[n][m] / Math.max(n, m, 1);
      }

      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  const lcsLength = dp[n][m];
  const maxLength = Math.max(n, m, 1);

  return lcsLength / maxLength;
}

/**
 * Jaccard Token 相似度
 * 
 * 计算两个集合的 Jaccard 相似度
 * J(A, B) = |A ∩ B| / |A ∪ B|
 * 
 * 复杂度：O(n + m)
 * 
 * @param a 第一个序列
 * @param b 第二个序列
 * @returns 相似度 [0, 1]
 */
export function jaccardSimilarity(a: string[], b: string[]): number {
  // 转换为集合去重
  const setA = new Set(a);
  const setB = new Set(b);

  // Early exit: 如果任一集合为空
  if (setA.size === 0 && setB.size === 0) {
    return 1; // 两个都为空，视为完全相似
  }

  if (setA.size === 0 || setB.size === 0) {
    return 0; // 一个为空，另一个不为空，视为完全不相似
  }

  // 计算交集
  const intersection = [...setA].filter(x => setB.has(x));

  // 计算并集
  const union = new Set([...setA, ...setB]);

  // Jaccard 相似度
  const similarity = intersection.length / union.size;

  return similarity;
}

/**
 * 组合相似度评分
 * 
 * 使用加权组合 LCS 和 Jaccard 相似度
 * Score = 0.6 * LCS + 0.4 * Jaccard
 * 
 * 权重说明：
 * - LCS (60%): 行级精确匹配，更可靠
 * - Jaccard (40%): Token 级模糊匹配，更灵活
 * 
 * @param lcsScore LCS 相似度 [0, 1]
 * @param jaccardScore Jaccard 相似度 [0, 1]
 * @param weights 可选的权重配置
 * @returns 组合相似度 [0, 1]
 */
export interface SimilarityWeights {
  lcsWeight?: number;
  jaccardWeight?: number;
}

export function combinedSimilarityScore(
  lcsScore: number,
  jaccardScore: number,
  weights: SimilarityWeights = {}
): number {
  const lcsWeight = weights.lcsWeight ?? 0.6;
  const jaccardWeight = weights.jaccardWeight ?? 0.4;

  // 归一化权重
  const totalWeight = lcsWeight + jaccardWeight;
  const normalizedLcsWeight = lcsWeight / totalWeight;
  const normalizedJaccardWeight = jaccardWeight / totalWeight;

  const combinedScore = lcsScore * normalizedLcsWeight + jaccardScore * normalizedJaccardWeight;

  return combinedScore;
}

/**
 * 相似度结果
 */
export interface SimilarityResult {
  /** 组合相似度 */
  score: number;
  /** LCS 相似度 */
  lcs: number;
  /** Jaccard 相似度 */
  jaccard: number;
  /** 是否通过阈值 */
  passed: boolean;
  /** 计算耗时（毫秒） */
  duration: number;
}

/**
 * 计算完整相似度（包含计时和阈值判断）
 * 
 * @param a 第一个序列
 * @param b 第二个序列
 * @param threshold 相似度阈值（默认 0.5）
 * @param cutoff 最大计算限制
 * @param weights 可选的权重配置
 * @returns 相似度结果
 */
export function calculateSimilarity(
  a: string[],
  b: string[],
  threshold = 0.5,
  cutoff = 10000,
  weights: SimilarityWeights = {}
): SimilarityResult {
  const startTime = Date.now();

  const lcs = lcsSimilarity(a, b, cutoff);
  const jaccard = jaccardSimilarity(a, b);
  const score = combinedSimilarityScore(lcs, jaccard, weights);
  const passed = score >= threshold;
  const duration = Date.now() - startTime;

  return {
    score,
    lcs,
    jaccard,
    passed,
    duration
  };
}

/**
 * 归一化行（用于比较）
 * 
 * 移除多余空格，转换为小写
 * 
 * @param line 原始行
 * @returns 归一化后的行
 */
export function normalizeLine(line: string): string {
  return line.trim().replace(/\s+/g, ' ').toLowerCase();
}

/**
 * Token 化行（用于 Jaccard 相似度）
 * 
 * 将行拆分为 token 列表
 * 
 * @param line 原始行
 * @returns token 列表
 */
export function tokenizeLine(line: string): string[] {
  // 简单的分词策略：按空格、标点符号分割
  return line
    .replace(/[^\w\s]/g, ' ') // 移除标点符号
    .split(/\s+/) // 按空格分割
    .filter(t => t.length > 0) // 过滤空 token
    .map(t => t.toLowerCase()); // 转小写
}

/**
 * 批量计算相似度（优化版本）
 * 
 * 用于计算多个候选窗口的相似度
 * 
 * @param target 目标序列
 * @param candidates 候选序列列表
 * @param threshold 相似度阈值
 * @param cutoff 最大计算限制
 * @returns 相似度结果列表
 */
export function batchSimilarity(
  target: string[],
  candidates: string[][],
  threshold = 0.5,
  cutoff = 10000
): SimilarityResult[] {
  const results: SimilarityResult[] = [];

  for (const candidate of candidates) {
    const result = calculateSimilarity(target, candidate, threshold, cutoff);
    results.push(result);
  }

  return results;
}

/**
 * 找到最佳匹配
 * 
 * 从候选列表中找到相似度最高的匹配
 * 
 * @param target 目标序列
 * @param candidates 候选序列列表（每个候选是一个序列）
 * @param threshold 相似度阈值
 * @param cutoff 最大计算限制
 * @returns 最佳匹配结果（如果没有匹配则返回 null）
 */
export function findBestMatch(
  target: string[],
  candidates: string[][],
  threshold = 0.5,
  cutoff = 10000
): SimilarityResult | null {
  const results = batchSimilarity(target, candidates, threshold, cutoff);

  // 按相似度降序排序
  results.sort((a, b) => b.score - a.score);

  // 返回第一个通过阈值的匹配
  return results.find(r => r.passed) ?? null;
}
