/**
 * Anchor Selector - 锚点选择器（三阶段过滤）
 * 
 * 目标：
 * - 从 diff context 行中选择信息量最高的锚点
 * - Token 级过滤（数字、hash、时间戳）
 * - 信息量评分（token 数、非关键字比例）
 * - 稳定性优先策略（function、import、type）
 * 
 * 原则：
 * - 至少 2 个锚点
 * - 优先选择信息量高、稳定性好的行
 * - 过滤噪音和易变内容
 */

import { normalizeLine, tokenizeLine } from './level2Similarity';

/**
 * 锚点信息
 */
export interface AnchorInfo {
  /** 原始行 */
  original: string;
  /** 归一化后的行 */
  normalized: string;
  /** Token 列表 */
  tokens: string[];
  /** 信息量分数 [0, 1] */
  score: number;
  /** 稳定性分数 [0, 1] */
  stability: number;
  /** 组合分数 [0, 1] */
  combinedScore: number;
  /** 优先级（分数越高优先级越高） */
  priority: number;
}

/**
 * 锚点信息（部分，用于构建中）
 */
interface PartialAnchorInfo {
  original: string;
  normalized: string;
  tokens: string[];
  score?: number;
  stability?: number;
  combinedScore?: number;
  priority?: number;
}

/**
 * 锚点选择选项
 */
export interface AnchorSelectorOptions {
  /** 最少锚点数量（默认 2） */
  minAnchors?: number;
  /** 最多锚点数量（默认 5） */
  maxAnchors?: number;
  /** 最小 token 数（默认 3） */
  minTokenCount?: number;
  /** 最小行长度（默认 5） */
  minLineLength?: number;
  /** 信息量权重（默认 0.6） */
  infoWeight?: number;
  /** 稳定性权重（默认 0.4） */
  stabilityWeight?: number;
}

const DEFAULT_OPTIONS: AnchorSelectorOptions = {
  minAnchors: 2,
  maxAnchors: 5,
  minTokenCount: 3,
  minLineLength: 5,
  infoWeight: 0.6,
  stabilityWeight: 0.4
};

/**
 * 锚点选择结果
 */
export interface AnchorSelectionResult {
  /** 选中的锚点 */
  anchors: AnchorInfo[];
  /** 是否成功 */
  success: boolean;
  /** 失败原因（如果失败） */
  reason?: string;
}

/**
 * 从 context 行中选择锚点
 * 
 * @param contextLines context 行列表
 * @param options 选择选项
 * @returns 锚点选择结果
 */
export function selectAnchors(
  contextLines: string[],
  options: AnchorSelectorOptions = {}
): AnchorSelectionResult {
  const opts = { ...DEFAULT_OPTIONS, ...options };

  console.log(`[AnchorSelector] Selecting anchors from ${contextLines.length} lines`);

  // 阶段 1: Token 级过滤
  const phase1Lines = filterByTokens(contextLines, opts);
  if (phase1Lines.length === 0) {
    return {
      anchors: [],
      success: false,
      reason: 'No lines passed token-level filtering'
    };
  }

  console.log(`[AnchorSelector] Phase 1: ${phase1Lines.length} lines passed token filter`);

  // 阶段 2: 信息量评分
  const phase2Result = scoreByInformation(phase1Lines, opts);
  if (phase2Result.length === 0) {
    return {
      anchors: [],
      success: false,
      reason: 'No lines passed information scoring'
    };
  }

  console.log(`[AnchorSelector] Phase 2: ${phase2Result.length} lines scored by information`);

  // 阶段 3: 稳定性优先
  const phase3Result: AnchorInfo[] = prioritizeByStability(phase2Result, opts);
  const minAnchors = opts.minAnchors !== undefined ? opts.minAnchors : DEFAULT_OPTIONS.minAnchors!;
  if (phase3Result.length < minAnchors) {
    return {
      anchors: [],
      success: false,
      reason: `Not enough stable anchors (${phase3Result.length} < ${opts.minAnchors ?? DEFAULT_OPTIONS.minAnchors})`
    };
  }

  console.log(`[AnchorSelector] Phase 3: ${phase3Result.length} stable anchors found`);

  // 按组合分数排序并选择前 N 个
  phase3Result.sort((a, b) => b.combinedScore - a.combinedScore);
  const selected = phase3Result.slice(0, opts.maxAnchors ?? DEFAULT_OPTIONS.maxAnchors);

  console.log(`[AnchorSelector] Selected ${selected.length} anchors`);
  selected.forEach((anchor, i) => {
    console.log(`  [${i + 1}] Score: ${anchor.combinedScore.toFixed(3)}, Info: ${anchor.score.toFixed(3)}, Stability: ${anchor.stability.toFixed(3)}`);
  });

  return {
    anchors: selected,
    success: true
  };
}

/**
 * 阶段 1: Token 级过滤
 * 
 * 过滤规则：
 * - 移除空行
 * - 移除过短的行
 * - 移除纯注释行
 * - 移除包含易变 token 的行（数字、hash、时间戳）
 */
function filterByTokens(
  lines: string[],
  options: AnchorSelectorOptions
): string[] {
  const filtered: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();

    // 过滤空行
    if (trimmed.length === 0) {
      continue;
    }

    // 过滤过短的行
    if (trimmed.length < options.minLineLength!) {
      continue;
    }

    // 过滤纯注释行（JavaScript/TypeScript 风格）
    if (/^\s*\/\/.*$/.test(trimmed)) {
      continue;
    }

    // 过滤包含易变 token 的行
    if (containsUnstableTokens(trimmed)) {
      continue;
    }

    filtered.push(line);
  }

  return filtered;
}

/**
 * 检查是否包含易变 token
 * 
 * 易变 token 包括：
 * - 大量数字（可能是版本号、ID）
 * - Hash 值（32+ 字符的十六进制）
 * - 时间戳（ISO 格式）
 * - UUID
 */
function containsUnstableTokens(line: string): boolean {
  const normalized = normalizeLine(line);

  // 检测大量数字（超过 3 个数字）
  const digitCount = (normalized.match(/\d/g) || []).length;
  if (digitCount > 3) {
    return true;
  }

  // 检测 Hash 值（32+ 字符的十六进制字符串）
  if (/[a-f0-9]{32,}/i.test(normalized)) {
    return true;
  }

  // 检测时间戳（ISO 8601 格式）
  if (/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(normalized)) {
    return true;
  }

  // 检测 UUID
  if (/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/i.test(normalized)) {
    return true;
  }

  return false;
}

/**
 * 阶段 2: 信息量评分
 * 
 * 评分因素：
 * - Token 数量（更多 token = 更高信息量）
 * - 非关键字比例（越少关键字 = 更高信息量）
 * - Token 多样性（不重复 token 越多 = 更高信息量）
 */
function scoreByInformation(
  lines: string[],
  options: AnchorSelectorOptions
): PartialAnchorInfo[] {
  const results: PartialAnchorInfo[] = [];

  for (const line of lines) {
    const normalized = normalizeLine(line);
    const tokens = tokenizeLine(normalized);

    // 过滤 token 数量不足的行
    if (tokens.length < options.minTokenCount!) {
      continue;
    }

    // 计算信息量分数
    const score = calculateInformationScore(tokens);

    results.push({
      original: line,
      normalized,
      tokens,
      score
    });
  }

  return results;
}

/**
 * 计算信息量分数
 * 
 * @param tokens token 列表
 * @returns 信息量分数 [0, 1]
 */
function calculateInformationScore(tokens: string[]): number {
  const commonKeywords = new Set([
    'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while',
    'import', 'export', 'from', 'default', 'class', 'extends', 'interface',
    'type', 'enum', 'async', 'await', 'try', 'catch', 'throw', 'new', 'this',
    'true', 'false', 'null', 'undefined'
  ]);

  const uniqueTokens = new Set(tokens);
  const keywordCount = tokens.filter(t => commonKeywords.has(t)).length;

  // Token 数量分数（归一化到 [0, 0.5]）
  const tokenCountScore = Math.min(tokens.length / 20, 0.5);

  // 非关键字比例分数（归一化到 [0, 0.5]）
  const nonKeywordRatio = 1 - (keywordCount / tokens.length);
  const nonKeywordScore = nonKeywordRatio * 0.5;

  // Token 多样性分数（归一化到 [0, 1]）
  const diversityScore = uniqueTokens.size / tokens.length;

  // 组合分数
  const infoScore = (tokenCountScore + nonKeywordScore + diversityScore) / 3;

  return infoScore;
}

/**
 * 阶段 3: 稳定性优先
 * 
 * 稳定性因素：
 * - 是否包含结构化标识符（function、class、interface、import、type）
 * - 是否包含命名空间或路径
 * - 是否是类型定义
 */
function prioritizeByStability(
  anchors: PartialAnchorInfo[],
  options: AnchorSelectorOptions
): AnchorInfo[] {
  const infoWeight = options.infoWeight!;
  const stabilityWeight = options.stabilityWeight!;

  return anchors.map(anchor => {
    // 计算稳定性分数
    const stability = calculateStabilityScore(anchor.tokens);

    // 计算组合分数
    const combinedScore = (anchor.score ?? 0) * infoWeight + stability * stabilityWeight;

    return {
      original: anchor.original,
      normalized: anchor.normalized,
      tokens: anchor.tokens,
      score: anchor.score ?? 0,
      stability,
      combinedScore,
      priority: combinedScore
    };
  });
}

/**
 * 计算稳定性分数
 * 
 * @param tokens token 列表
 * @returns 稳定性分数 [0, 1]
 */
function calculateStabilityScore(tokens: string[]): number {
  let stability = 0;

  // 稳定性标识符
  const stableIdentifiers = [
    'function', 'class', 'interface', 'type', 'enum', 'const', 'let', 'var',
    'import', 'export', 'from', 'default', 'extends', 'implements'
  ];

  // 检查是否包含稳定性标识符
  const hasStableIdentifier = tokens.some(t => stableIdentifiers.includes(t));
  if (hasStableIdentifier) {
    stability += 0.3;
  }

  // 检查是否包含路径或命名空间（包含 '/' 或 '.'）
  const hasPath = tokens.some(t => t.includes('/') || t.includes('.'));
  if (hasPath) {
    stability += 0.2;
  }

  // 检查是否包含大驼峰命名（类名风格）
  const hasPascalCase = tokens.some(t => /^[A-Z][a-zA-Z0-9]*$/.test(t));
  if (hasPascalCase) {
    stability += 0.2;
  }

  // 检查是否是类型定义（包含 ':' 或 'interface', 'type'）
  const isTypeDefinition = tokens.some(t => t === ':' || t === 'interface' || t === 'type');
  if (isTypeDefinition) {
    stability += 0.3;
  }

  return Math.min(stability, 1);
}

/**
 * 获取锚点的归一化字符串列表
 * 
 * @param anchors 锚点列表
 * @returns 归一化字符串列表
 */
export function getNormalizedAnchors(anchors: AnchorInfo[]): string[] {
  return anchors.map(a => a.normalized);
}

/**
 * 获取锚点的 token 列表
 * 
 * @param anchors 锚点列表
 * @returns token 列表
 */
export function getAnchorTokens(anchors: AnchorInfo[]): string[][] {
  return anchors.map(a => a.tokens);
}

/**
 * 打印锚点信息（用于调试）
 * 
 * @param anchors 锚点列表
 */
export function debugAnchors(anchors: AnchorInfo[]): void {
  console.log('[AnchorSelector] Debug info:');
  anchors.forEach((anchor, i) => {
    console.log(`  [${i + 1}]`);
    console.log(`    Original: ${anchor.original}`);
    console.log(`    Normalized: ${anchor.normalized}`);
    console.log(`    Tokens: [${anchor.tokens.join(', ')}]`);
    console.log(`    Info: ${anchor.score.toFixed(3)}, Stability: ${anchor.stability.toFixed(3)}, Combined: ${anchor.combinedScore.toFixed(3)}`);
  });
}