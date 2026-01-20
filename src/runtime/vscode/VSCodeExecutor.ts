import * as vscode from 'vscode';
import * as path from 'path';

export class VSCodeExecutor {
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
        return entries.map(([name, type]) => `${name}${type === vscode.FileType.Directory ? '/' : ''}`).join('\n');
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

    // 处理 Diff 应用
    static async applyDiff(diff: string): Promise<string> {
        // 这是一个复杂的逻辑，通常需要一个 diff parser
        // 为了演示，我们先输出一个通知
        vscode.window.showInformationMessage("Agent requested a code diff. Applying...");
        // 实际上可以调用 git 命令或者使用 workspace.applyEdit
        return "Diff application initiated.";
    }
}
