import * as vscode from 'vscode';
import * as path from 'path';
import { createIgnoreFilter } from '../../vscode/utils/ignoreFilter';

export class VSCodeExecutor {
    private static ignoreFilter = createIgnoreFilter();
    // 处理文件渲染/预览
    static async previewFile(filePath: string) {
        const fullPath = path.isAbsolute(filePath)
            ? filePath
            : path.join(vscode.workspace.workspaceFolders?.[0].uri.fsPath || '', filePath);
        const uri = vscode.Uri.file(fullPath);
        await vscode.commands.executeCommand('vscode.open', uri);
    }

    // 执行终端命令
    static async runCommand(command: string): Promise<string> {
        return new Promise((resolve) => {
            const terminal = vscode.window.activeTerminal || vscode.window.createTerminal('Yuangs Agent');
            terminal.show();
            terminal.sendText(command);
            // VS Code 终端不容易直接获取输出，通常我们会返回一个状态
            resolve("Command sent to VS Code terminal.");
        });
    }

    // 应用文件修改
    static async writeFile(filePath: string, content: string): Promise<string> {
        const fullPath = this.getAbsolutePath(filePath);
        const uri = vscode.Uri.file(fullPath);
        await vscode.workspace.fs.writeFile(uri, Buffer.from(content));
        return `File saved: ${filePath}`;
    }

    // 读取文件内容
    static async readFile(filePath: string): Promise<string> {
        const fullPath = this.getAbsolutePath(filePath);
        const uri = vscode.Uri.file(fullPath);
        const content = await vscode.workspace.fs.readFile(uri);
        return Buffer.from(content).toString('utf8');
    }

    // 列出目录文件
    static async listFiles(dirPath: string = '.'): Promise<string> {
        const fullPath = this.getAbsolutePath(dirPath);
        const uri = vscode.Uri.file(fullPath);
        const entries = await vscode.workspace.fs.readDirectory(uri);
        
        // Apply ignore filter if available
        let filteredEntries = entries;
        if (this.ignoreFilter) {
            const workspaceRoot = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
            if (workspaceRoot) {
                filteredEntries = entries.filter(([name, type]) => {
                    const entryPath = path.join(fullPath, name);
                    return !this.ignoreFilter!.shouldIgnore(entryPath, workspaceRoot);
                });
            }
        }
        
        return filteredEntries.map(([name, type]) => `${name}${type === vscode.FileType.Directory ? '/' : ''}`).join('\n');
    }

    // 获取绝对路径辅助方法
    private static getAbsolutePath(filePath: string): string {
        if (path.isAbsolute(filePath)) {
            return filePath;
        }
        const workspaceFolder = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
        if (!workspaceFolder) {
            throw new Error("No workspace folder open.");
        }
        return path.join(workspaceFolder, filePath);
    }

    // 处理 Diff 应用 (三阶段执行：Pre-Exec / Exec / Post-Exec)
    static async applyDiff(diff: string): Promise<string> {
        const workspaceRoot = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
        if (!workspaceRoot) {
            throw new Error("No workspace opened.");
        }

        try {
            // --- Phase 1: Pre-Exec (Snapshot/Validation) ---
            const status = await this.execCommand("git status --porcelain", workspaceRoot);
            if (status.trim().length > 0) {
                const choice = await vscode.window.showWarningMessage(
                    "Working tree is dirty. Apply diff anyway?",
                    { modal: true },
                    "Stash and Continue", "Abort"
                );
                if (choice === "Stash and Continue") {
                    await this.execCommand("git stash", workspaceRoot);
                } else {
                    throw new Error("Execution aborted due to dirty working tree.");
                }
            }

            const preHash = (await this.execCommand("git rev-parse HEAD", workspaceRoot)).trim();

            // --- Phase 2: Exec (Application) ---
            await this.execCommandWithInput("git apply --index", diff, workspaceRoot);

            // --- Phase 3: Post-Exec (Validation & Commit) ---
            const changedFiles = (await this.execCommand("git diff --name-only HEAD", workspaceRoot))
                .trim()
                .split("\n")
                .filter(f => f.length > 0);

            const commitMessage = `Agent: Applied semantic code change\n\n- Files: ${changedFiles.join(", ")}`;
            await this.execCommand(`git commit -m "${commitMessage}"`, workspaceRoot);

            const postHash = (await this.execCommand("git rev-parse HEAD", workspaceRoot)).trim();

            vscode.window.showInformationMessage(`Successfully applied change: ${postHash.substring(0, 7)}`);

            return `[SUCCESS] Applied 3-phase execution.\n- Snapshot: ${preHash.substring(0, 7)}\n- Commit: ${postHash.substring(0, 7)}\n- Files: ${changedFiles.length}`;

        } catch (error: any) {
            vscode.window.showErrorMessage(`Diff failed: ${error.message}`);
            // Rollback if possible (git reset --hard)
            return `[FAILED] ${error.message}`;
        }
    }

    private static async execCommand(command: string, cwd: string): Promise<string> {
        const { exec } = require('child_process');
        return new Promise((resolve, reject) => {
            exec(command, { cwd }, (error: any, stdout: string, stderr: string) => {
                if (error) reject(new Error(stderr || error.message));
                else resolve(stdout);
            });
        });
    }

    private static async execCommandWithInput(command: string, input: string, cwd: string): Promise<string> {
        const { exec } = require('child_process');
        return new Promise((resolve, reject) => {
            const child = exec(command, { cwd }, (error: any, stdout: string, stderr: string) => {
                if (error) reject(new Error(stderr || error.message));
                else resolve(stdout);
            });
            child.stdin.write(input);
            child.stdin.end();
        });
    }
}
