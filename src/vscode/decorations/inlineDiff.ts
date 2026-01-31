import * as vscode from 'vscode';

/**
 * Cursor 风格的 Inline Diff 装饰器
 * 红色背景 + 删除线：表示被删除的旧代码
 * 绿色背景：表示新增的代码
 */
export class InlineDiffRenderer {
    
    private static addedDecoration: vscode.TextEditorDecorationType | undefined;
    private static removedDecoration: vscode.TextEditorDecorationType | undefined;

    /**
     * 初始化装饰器类型
     */
    public static init(context: vscode.ExtensionContext): void {
        if (this.addedDecoration) {
            return; // 已经初始化过了
        }

        // 创建新增代码的装饰器（绿色背景）
        this.addedDecoration = vscode.window.createTextEditorDecorationType({
            backgroundColor: 'rgba(46, 160, 67, 0.25)', // 绿色背景，低透明度
            isWholeLine: true,
            after: {
                contentText: '  ⟵ AI suggestion', // 行尾提示
                color: '#00c853',
            },
        });

        // 创建删除代码的装饰器（红色背景 + 删除线）
        this.removedDecoration = vscode.window.createTextEditorDecorationType({
            backgroundColor: 'rgba(248, 81, 73, 0.25)', // 红色背景，低透明度
            textDecoration: 'line-through',
            isWholeLine: true,
        });

        // 注册装饰器到上下文
        context.subscriptions.push(this.addedDecoration);
        context.subscriptions.push(this.removedDecoration);
    }

    /**
     * 在编辑器中显示 Inline Diff
     * @param editor 当前激活的文本编辑器
     * @param selection 选中的范围
     * @param original 原始代码
     * @param optimized 优化后的代码
     */
    public static show(
        editor: vscode.TextEditor,
        selection: vscode.Selection,
        original: string,
        optimized: string
    ): void {
        if (!this.addedDecoration || !this.removedDecoration) {
            console.warn('[InlineDiffRenderer] Decoration types not initialized. Call init() first.');
            return;
        }

        // 计算行级差异（简化版）
        const oldLines = original.split('\n');
        const newLines = optimized.split('\n');

        const addedRanges: vscode.DecorationOptions[] = [];
        const removedRanges: vscode.DecorationOptions[] = [];

        let line = selection.start.line;

        for (let i = 0; i < Math.max(oldLines.length, newLines.length); i++) {
            const oldLine = oldLines[i];
            const newLine = newLines[i];

            if (oldLine !== newLine) {
                // 如果旧行存在但新行不同 -> 视为删除
                if (oldLine && i < oldLines.length) {
                    removedRanges.push({
                        range: new vscode.Range(line + i, 0, line + i, 999), // 覆盖整行
                    });
                }

                // 如果新行存在但旧行不同 -> 视为新增
                if (newLine && i < newLines.length) {
                    addedRanges.push({
                        range: new vscode.Range(line + i, 0, line + i, 999),
                    });
                }
            }
        }

        // 应用装饰器
        editor.setDecorations(this.removedDecoration, removedRanges);
        editor.setDecorations(this.addedDecoration, addedRanges);
    }

    /**
     * 清除所有装饰器
     * @param editor 文本编辑器
     */
    public static clear(editor: vscode.TextEditor): void {
        if (!this.addedDecoration || !this.removedDecoration) {
            return;
        }

        editor.setDecorations(this.removedDecoration, []);
        editor.setDecorations(this.addedDecoration, []);
    }
}