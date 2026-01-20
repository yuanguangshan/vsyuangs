import { ProposedAction, ToolExecutionResult } from './state';
import { VSCodeExecutor } from '../../runtime/vscode/VSCodeExecutor';

/**
 * VS Code 适配版的 ToolExecutor
 * 将所有执行逻辑重定向到 VS Code API
 */
export class ToolExecutor {
  static async execute(action: ProposedAction): Promise<ToolExecutionResult> {
    const { type, payload } = action;

    try {
      switch (type) {
        case 'tool_call':
          return await this.executeTool(payload);

        case 'shell_cmd':
          const shellResult = await VSCodeExecutor.runCommand(payload.command);
          return { success: true, output: shellResult };

        case 'code_diff':
          const diffResult = await VSCodeExecutor.applyDiff(payload.diff);
          return { success: true, output: diffResult };

        case 'answer':
          return {
            success: true,
            output: payload.content || payload.text || '',
            artifacts: []
          };

        default:
          return {
            success: false,
            error: `Unknown action type: ${type}`,
            output: ''
          };
      }
    } catch (error: any) {
      return {
        success: false,
        error: error.message || String(error),
        output: ''
      };
    }
  }

  private static async executeTool(payload: any): Promise<ToolExecutionResult> {
    const toolName = payload.tool_name;
    const params = payload.parameters || {};

    switch (toolName) {
      case 'read_file':
        try {
          const content = await VSCodeExecutor.readFile(params.path);
          return { success: true, output: content };
        } catch (e: any) {
          return { success: false, error: e.message, output: "" };
        }

      case 'write_file':
        const writeResult = await VSCodeExecutor.writeFile(params.path, params.content);
        return { success: true, output: writeResult };

      case 'list_files':
        try {
          const fileList = await VSCodeExecutor.listFiles(params.path || '.');
          return { success: true, output: fileList };
        } catch (e: any) {
          return { success: false, error: e.message, output: "" };
        }

      default:
        return {
          success: false,
          error: `Unknown tool: ${toolName}`,
          output: ''
        };
    }
  }
}
