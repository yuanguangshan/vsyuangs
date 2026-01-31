
import * as vscode from 'vscode';
import * as path from 'path';

export class GitManager {
    private static getGitApi() {
        const gitExtension = vscode.extensions.getExtension('vscode.git')?.exports;
        return gitExtension?.getAPI(1);
    }

    private static getRepository(): any {
        const api = this.getGitApi();
        if (!api) return undefined;

        // 1. 优先尝试获取用户当前编辑器所在的仓库
        if (vscode.window.activeTextEditor) {
            const editorPath = vscode.window.activeTextEditor.document.uri.fsPath;
            // 使用更稳健的路径包含判断 (不区分大小写)
            const repo = api.repositories.find((r: any) => {
                const rootPath = r.rootUri.fsPath;
                return !path.relative(rootPath, editorPath).startsWith('..') && !path.isAbsolute(path.relative(rootPath, editorPath));
            });
            if (repo) return repo;
        }

        // 2. 否则返回第一个仓库作为兜底
        return api.repositories[0];
    }

    /**
     * 获取暂存区的 Diff 文本
     * 策略升级：
     * 1. 分批并发获取 (Batch Processing)：避免此处产生过大并发压力
     * 2. 动态熔断 (Circuit Breaker)：一旦累计大小超过限制，立即停止后续 fetch
     * 3. 全局异常捕获 (Error Handling)：确保 Git 报错不影响插件稳定性
     */
    static async getStagedDiff(): Promise<string> {
        try {
            const repo = this.getRepository();
            if (!repo) return '';

            const changes = await repo.diffIndexWithHEAD();
            if (!changes || changes.length === 0) return '';

            const MAX_DIFF_SIZE = 50 * 1024; // 50KB 安全限制
            const BATCH_SIZE = 5; // 每批处理 5 个文件
            let fullDiff = '';

            for (let i = 0; i < changes.length; i += BATCH_SIZE) {
                // 如果已经超限，提前结束循环，避免无效 IO
                if (fullDiff.length >= MAX_DIFF_SIZE) {
                    fullDiff += `\n... (Remaining ${changes.length - i} files omitted due to size limit)\n`;
                    break;
                }

                const batch = changes.slice(i, i + BATCH_SIZE);
                // 并发执行当前批次
                const batchResults = await Promise.all(batch.map(async (change: any) => {
                    try {
                        const diff = await repo.diff(change.uri.fsPath);
                        return {
                            fileName: path.basename(change.uri.fsPath),
                            content: diff
                        };
                    } catch (e) {
                        return { fileName: path.basename(change.uri.fsPath), content: '(Failed to read diff)' };
                    }
                }));

                // 累加结果
                for (const file of batchResults) {
                    const block = `--- ${file.fileName}\n${file.content}\n\n`;

                    if (fullDiff.length + block.length > MAX_DIFF_SIZE) {
                        // 如果单个文件超大，显示截断提示
                        if (block.length > MAX_DIFF_SIZE) {
                            fullDiff += `--- ${file.fileName}\n(Diff too large, skipped)\n\n`;
                        } else {
                            fullDiff += `\n... (Remaining files omitted)\n`;
                        }
                        // 强制结束外层循环
                        i = changes.length;
                        break;
                    }
                    fullDiff += block;
                }
            }

            return fullDiff;
        } catch (error) {
            console.error('[GitManager] Failed to get staged diff:', error);
            return '';
        }
    }

    /**
     * 将 AI 生成的 Commit 消息回填到 VS Code Git 输入框
     */
    static async setCommitMessage(message: string) {
        const repo = this.getRepository();
        if (repo) {
            repo.inputBox.value = message;
            // 尝试聚焦到 Git 视图
            await vscode.commands.executeCommand('workbench.view.scm');
        }
    }

    /**
     * [增强版] 执行 Git Commit
     * @throws Error 包含具体的业务错误信息
     */
    static async commit(message: string): Promise<void> {
        const repo = this.getRepository();
        
        if (!repo) {
            throw new Error('未在当前工作区找到有效的 Git 仓库');
        }

        // 1. 输入校验
        if (!message || !message.trim()) {
            throw new Error('提交信息不能为空');
        }

        // 2. 健壮的暂存区检查 (使用 state.indexChanges 而非 diffIndexWithHEAD)
        // 注意：indexChanges 包含所有暂存的变更 (Added, Modified, Deleted, Renamed)
        const stagedChanges = repo.state.indexChanges;
        if (!stagedChanges || stagedChanges.length === 0) {
            // 尝试聚焦 Git 视图引导用户
            await vscode.commands.executeCommand('workbench.view.scm');
            throw new Error('暂存区为空，请先暂存更改 (git add)');
        }

        // 3. 执行提交
        try {
            await repo.commit(message);
        } catch (error: any) {
            // 4. 错误信息清洗 (避免直接暴露底层 Git 错误码)
            let cleanError = error.message || error;
            if (cleanError.includes('lock file')) {
                cleanError = 'Git 锁定文件已存在，可能有另一个 Git 进程正在运行';
            } else if (cleanError.includes('hooks')) {
                cleanError = 'Git Pre-commit 钩子执行失败';
            }
            throw new Error(`Commit 失败: ${cleanError}`);
        }
    }
}
