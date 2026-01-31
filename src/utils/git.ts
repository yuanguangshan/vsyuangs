/**
 * Git 适配器 - 扩展版本
 *
 * 基于 GitManager.ts 的功能进行增强
 * 使用 VS Code Git Extension API 替代命令行
 */

import * as vscode from 'vscode';
import { GitManager } from '../vscode/git/GitManager';
import type {
    GitCommitResult,
    GitReviewResult,
    GitReviewIssue,
    GitStatus,
    GitBranch,
    GitCommitHistory,
    DiffApplyOptions
} from '../core/types';

export class GitAdapter {
    /**
     * 提交更改
     * 
     * @param message 提交消息
     * @returns Promise<GitCommitResult> 提交结果
     */
    async commit(message: string): Promise<GitCommitResult> {
        try {
            await GitManager.commit(message);
            
            return {
                success: true,
                message: 'Commit successful'
            };
        } catch (error: any) {
            console.error('[GitAdapter] Commit failed:', error);
            return {
                success: false,
                error: error.message || 'Unknown git error'
            };
        }
    }
}
