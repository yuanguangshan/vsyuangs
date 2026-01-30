/**
 * Diff 应用工具
 * 
 * 提供基础的 Diff 解析和应用功能
 * 支持代码审查场景
 */

/**
 * Diff 块类型
 */
export interface DiffBlock {
    /** 文件路径 */
    filePath?: string;
    /** 语言类型 */
    language?: string;
    /** Diff 内容 */
    content: string;
    /** 添加的行数 */
    addedLines?: number;
    /** 删除的行数 */
    removedLines?: number;
}

/**
 * Diff 应用器
 */
export class DiffApplier {
    /**
     * 从文本中提取代码块
     * 
     * 支持格式：
     * ```language
     * code
     * ```
     * 
     * @param text 包含代码块的文本
     * @returns 提取的代码块数组
     */
    static extractCodeBlocks(text: string): DiffBlock[] {
        const regex = /```(\w+)?\n([\s\S]*?)```/g;
        const blocks: DiffBlock[] = [];
        let match;

        while ((match = regex.exec(text)) !== null) {
            blocks.push({
                language: match[1] || 'text',
                content: match[2].trim(),
                filePath: undefined,
                addedLines: undefined,
                removedLines: undefined
            });
        }

        return blocks;
    }

    /**
     * 提取 Unified Diff
     * 
     * 格式：
     * --- a/file.txt
     * +++ b/file.txt
     * @@ lines
     * + added lines
     * - removed lines
     * 
     * @param text 包含 Diff 的文本
     * @returns Diff 块数组
     */
    static extractUnifiedDiffs(text: string): DiffBlock[] {
        const lines = text.split('\n');
        const blocks: DiffBlock[] = [];
        let currentBlock: DiffBlock | null = null;
        let filePath = '';
        let addedCount = 0;
        let removedCount = 0;

        for (const line of lines) {
            // 检测文件头
            if (line.startsWith('--- ') || line.startsWith('+++ ')) {
                const matches = line.match(/^[\+\-]{3} ([^\t\n]*)/);
                if (matches) {
                    filePath = matches[1].trim();
                }
                continue;
            }

            // 检测 hunk 头
            if (line.startsWith('@@')) {
                if (currentBlock) {
                    currentBlock.addedLines = addedCount;
                    currentBlock.removedLines = removedCount;
                    currentBlock.filePath = filePath;
                    blocks.push(currentBlock);
                }
                currentBlock = {
                    filePath: filePath,
                    language: 'diff',
                    content: line,
                    addedLines: undefined,
                    removedLines: undefined
                };
                addedCount = 0;
                removedCount = 0;
                continue;
            }

            // 统计添加和删除的行
            if (line.startsWith('+') && !line.startsWith('+++')) {
                addedCount++;
            } else if (line.startsWith('-') && !line.startsWith('---')) {
                removedCount++;
            }
        }

        if (currentBlock) {
            currentBlock.addedLines = addedCount;
            currentBlock.removedLines = removedCount;
            currentBlock.filePath = filePath;
            blocks.push(currentBlock);
        }

        return blocks;
    }

    /**
     * 将代码审查结果转换为结构化格式
     * 
     * 支持从 AI 返回的文本或 JSON 格式
     * 
     * @param text AI 返回的代码审查文本
     * @returns 结构化的审查结果数组
     */
    static parseReviewResults(text: string): Array<{
        type: 'error' | 'warning' | 'info';
        message: string;
        suggestion?: string;
        file?: string;
        line?: number;
    }> {
        const issues: Array<{
            type: 'error' | 'warning' | 'info';
            message: string;
            suggestion?: string;
            file?: string;
            line?: number;
        }> = [];

        const lines = text.split('\n');
        let currentType: 'error' | 'warning' | 'info' | null = null;
        let currentMessage = '';

        for (const line of lines) {
            // 检测严重程度标签
            const errorMatch = line.match(/🔴\s*(Error|error)\s*:?\s*(.+)/i);
            const warningMatch = line.match(/🟡\s*(Warning|warning)\s*:?\s*(.+)/i);
            const infoMatch = line.match(/🔵\s*(Info|info)\s*:?\s*(.+)/i);

            if (errorMatch) {
                if (currentType) {
                    issues.push({
                        type: currentType,
                        message: currentMessage,
                        suggestion: undefined
                    });
                }
                currentType = 'error';
                currentMessage = errorMatch[1].trim();
                issues.push({
                    type: currentType,
                    message: currentMessage,
                    suggestion: undefined
                });
            } else if (warningMatch) {
                if (currentType) {
                    issues.push({
                        type: currentType,
                        message: currentMessage,
                        suggestion: undefined
                    });
                }
                currentType = 'warning';
                currentMessage = warningMatch[1].trim();
                issues.push({
                    type: currentType,
                    message: currentMessage,
                    suggestion: undefined
                });
            } else if (infoMatch) {
                if (currentType) {
                    issues.push({
                        type: currentType,
                        message: currentMessage,
                        suggestion: undefined
                    });
                }
                currentType = 'info';
                currentMessage = infoMatch[1].trim();
                issues.push({
                    type: currentType,
                    message: currentMessage,
                    suggestion: undefined
                });
            } else if (line.trim()) {
                // 普通文本行，可能是问题描述
                currentMessage += (currentMessage ? ' ' : '') + line.trim();
            }
        }

        return issues;
    }

    /**
     * 应用 Diff 到活动编辑器
     * 
     * 注意：这是基础实现，不处理冲突
     * 
     * @param code 要应用的代码
     * @returns Promise<void>
     */
    static async applyToActiveEditor(code: string): Promise<void> {
        const activeEditor = await vscode.commands.executeCommand('workbench.action.quickOpen');
        
        // 这里需要由外部调用方准备编辑器
        // 简化的实现：返回代码，由调用方处理
        console.log('[DiffApplier] Code ready to be applied:', code.substring(0, 100) + '...');
    }
}
