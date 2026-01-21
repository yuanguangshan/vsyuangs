import { randomUUID } from 'crypto';
import { ContextImportance, createContextImportance, computeContextImportance } from './contextImportance';
import { summarizeContext } from './contextSummary';

export type ContextItem = {
    type: 'file' | 'directory';
    path: string;
    id?: string;
    importance?: ContextImportance;
    alias?: string;
    content: string;
    summary?: string;
    summarized?: boolean;
    tokens: number;
    // 引用协议相关字段
    semantic?: 'source_code' | 'log' | 'config' | 'decision' | 'evidence' | 'documentation' | 'test' | 'requirement';
    summaryQuality?: number; // 摘要质量评分 (0-1)
    summarySourceHash?: string; // 摘要来源内容的哈希值
    referencedBy?: string[]; // 引用此ContextItem的AI响应ID列表
    usageStats?: {
        referencedCount: number; // 被显式引用的次数
        verifiedUseful: number; // 经验证有用的引用次数
        verifiedNotUseful: number; // 经验证无用的引用次数
    };
};

export type InjectionStrategy = 'ranked' | 'recent' | 'all';

export interface BuildPromptOptions {
  maxTokens?: number;
  strategy?: InjectionStrategy;
}

const estimateTokens = (text: string) => Math.ceil(text.length / 4);

export class ContextBuffer {
    private items: ContextItem[] = [];
    private maxTokens = 32000; // 约 12.8 万字符

    async addAsync(item: Omit<ContextItem, 'tokens'>, bypassTokenLimit: boolean = false) {
        const tokens = estimateTokens(item.content);
        this.items.push({
            ...item,
            id: item.id ?? randomUUID(),
            importance: item.importance ?? createContextImportance(item.path, item.type),
            tokens,
            usageStats: item.usageStats ?? {
                referencedCount: 0,
                verifiedUseful: 0,
                verifiedNotUseful: 0
            }
        });
        if (!bypassTokenLimit) {
            await this.trimIfNeeded();
        }
    }

    add(item: Omit<ContextItem, 'tokens'>, bypassTokenLimit: boolean = false) {
        const tokens = estimateTokens(item.content);
        this.items.push({
            ...item,
            id: item.id ?? randomUUID(),
            importance: item.importance ?? createContextImportance(item.path, item.type),
            tokens,
            usageStats: item.usageStats ?? {
                referencedCount: 0,
                verifiedUseful: 0,
                verifiedNotUseful: 0
            }
        });
        if (!bypassTokenLimit) {
            // 对于同步方法，我们只做基本修剪（不进行摘要）
            this.basicTrimIfNeeded();
        }
    }

    private basicTrimIfNeeded() {
        while (this.totalTokens() > this.maxTokens) {
            // 按重要性评分排序，低重要性的在前面
            this.items.sort((a, b) =>
                computeContextImportance(a.importance!) -
                computeContextImportance(b.importance!)
            );

            const removed = this.items.shift();

            if (removed) {
                console.log(
                    `[Context Trim] removed low-importance: ${removed.path}`
                );
            }
        }
    }

    clear() {
        this.items = [];
    }

    list() {
        return this.items.map((item, i) => ({
            index: i + 1,
            type: item.type,
            path: item.path,
            alias: item.alias,
            tokens: item.tokens,
            summary: item.summary
        }));
    }

    isEmpty() {
        return this.items.length === 0;
    }

    export() {
        return this.items;
    }

    import(items: ContextItem[]) {
        this.items = items;
    }

    private totalTokens() {
        return this.items.reduce((sum, i) => sum + i.tokens, 0);
    }

    private async trimIfNeeded() {
        while (this.totalTokens() > this.maxTokens) {
            // 1. 找一个「尚未 summary」且重要性最低的
            const candidates = this.items
                .filter(i => !i.summarized)
                .sort((a, b) =>
                    computeContextImportance(a.importance!) -
                    computeContextImportance(b.importance!)
                );

            if (candidates.length > 0) {
                const candidate = candidates[0];

                // 2. 执行 summary
                try {
                    const summary = await summarizeContext({
                        type: candidate.type,
                        path: candidate.path,
                        content: candidate.content
                    });

                    candidate.summary = summary;
                    candidate.summarized = true;

                    // 3. 用 summary 重新计算 token
                    candidate.tokens = estimateTokens(summary);

                    // 4. 释放原始内容以节省内存（保留原始内容的标记）
                    const originalContentSize = estimateTokens(candidate.content);
                    candidate.content = `[ARCHIVED: Original content was ${originalContentSize} tokens, summarized to ${candidate.tokens} tokens]`;

                    console.log(
                        `[Context Summary] ${candidate.path} reduced from ${originalContentSize} to ${candidate.tokens} tokens`
                    );

                    continue; // 重新评估token数量
                } catch (error) {
                    console.warn(`[Context Summary] Failed to summarize ${candidate.path}:`, error);
                }
            }

            // 如果没有可摘要的项或摘要失败，则按重要性删除
            this.items.sort((a, b) =>
                computeContextImportance(a.importance!) -
                computeContextImportance(b.importance!)
            );

            const removed = this.items.shift();

            if (removed) {
                console.log(
                    `[Context Trim] removed low-importance: ${removed.path}`
                );
            }
        }
    }

    /**
     * 记录ContextItem被显式引用
     * @param path ContextItem的路径
     * @param responseId 引用该ContextItem的AI响应ID
     */
    recordExplicitReference(path: string, responseId?: string) {
        const item = this.items.find(i => i.path === path);
        if (item) {
            if (!item.usageStats) {
                item.usageStats = {
                    referencedCount: 0,
                    verifiedUseful: 0,
                    verifiedNotUseful: 0
                };
            }
            item.usageStats.referencedCount++;

            if (responseId) {
                if (!item.referencedBy) {
                    item.referencedBy = [];
                }
                if (!item.referencedBy.includes(responseId)) {
                    item.referencedBy.push(responseId);
                }
            }

            // 同时更新importance中的useCount
            if (item.importance) {
                item.importance.useCount++;
                item.importance.lastUsed = Date.now();
            }
        }
    }

    /**
     * 验证ContextItem引用的有效性
     * @param path ContextItem的路径
     * @param wasUseful 引用是否被证明有用
     */
    validateReference(path: string, wasUseful: boolean) {
        const item = this.items.find(i => i.path === path);
        if (item && item.usageStats) {
            if (wasUseful) {
                item.usageStats.verifiedUseful++;
            } else {
                item.usageStats.verifiedNotUseful++;
            }
        }
    }

    /**
     * 计算ContextItem的综合评分
     * @param item ContextItem
     * @returns 评分值
     */
    private computeItemScore(item: ContextItem): number {
        if (!item.importance) {
            // 如果没有重要性信息，默认为中等评分
            return 0.5;
        }

        const baseScore = computeContextImportance(item.importance);

        // 使用次数的影响（对数增长，避免过度放大）
        const useFactor = Math.log(1 + item.importance.useCount);

        // 新鲜度衰减（最近使用的项目获得更高评分）
        const now = Date.now();
        const daysSinceLastUse = (now - item.importance.lastUsed) / (1000 * 60 * 60 * 24);
        const freshnessFactor = Math.exp(-daysSinceLastUse / 7); // 7天半衰期

        // 显式引用的影响
        const explicitReferenceFactor = item.usageStats ?
            Math.log(1 + item.usageStats.referencedCount) : 0;

        return baseScore * useFactor * freshnessFactor * (1 + explicitReferenceFactor * 0.1);
    }

    /**
     * 根据策略对ContextItems进行排序
     * @param items ContextItem数组
     * @param strategy 排序策略
     * @returns 排序后的数组
     */
    private sortItemsByStrategy(items: ContextItem[], strategy: InjectionStrategy): ContextItem[] {
        switch (strategy) {
            case 'ranked':
                // 按综合评分降序排列
                return [...items].sort((a, b) =>
                    this.computeItemScore(b) - this.computeItemScore(a)
                );
            case 'recent':
                // 按最近使用时间降序排列
                return [...items].sort((a, b) =>
                    (b.importance?.lastUsed || 0) - (a.importance?.lastUsed || 0)
                );
            case 'all':
            default:
                // 保持原有顺序
                return [...items];
        }
    }

    buildPrompt(userInput: string, options: BuildPromptOptions = {}): string {
        const { maxTokens, strategy = 'ranked' } = options;

        if (this.isEmpty()) return userInput;

        // 根据策略排序items
        const sortedItems = this.sortItemsByStrategy([...this.items], strategy);

        // 如果指定了maxTokens，我们需要截断内容以满足限制
        let filteredItems = sortedItems;
        if (maxTokens) {
            filteredItems = [];
            let currentTokens = 0;

            for (const item of sortedItems) {
                if (currentTokens + item.tokens > maxTokens) {
                    break;
                }
                filteredItems.push(item);
                currentTokens += item.tokens;
            }
        }

        // 按重要性和语义类型分组
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

                    const body = item.summary ?? item.content;

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

                    const body = item.summary ?? item.content;

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

                    const body = item.summary ?? item.content;

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
}
// Test change for git diff
// Another test change (unstaged)
