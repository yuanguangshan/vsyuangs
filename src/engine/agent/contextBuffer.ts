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
};

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
            tokens
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
            tokens
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

                    console.log(
                        `[Context Summary] ${candidate.path} reduced`
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

    buildPrompt(userInput: string): string {
        if (this.isEmpty()) return userInput;

        const contextBlock = this.items.map(item => {
            const title = item.alias
                ? `[Context Item] ${item.type}: ${item.alias} (${item.path})`
                : `[Context Item] ${item.type}: ${item.path}`;

            const body = item.summary ?? item.content;

            return `${title}\n---\n${body}\n---`;
        }).join('\n\n');

        return `
# 知识上下文 (Knowledge Context)
你目前的会话已加载以下参考资料。在回答用户问题时，请优先参考这些内容：

${contextBlock}

# 任务说明
基于上述提供的上下文（如果有），回答用户的问题。如果上下文中包含源码，请将其视为你当前的“真理来源”。

用户问题：
${userInput}
`;
    }
}
// Test change for git diff
// Another test change (unstaged)
