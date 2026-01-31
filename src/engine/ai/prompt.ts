import { OSProfile } from '../core/os';
import type { Macro } from '../core/validation';

export function buildCommandPrompt(
    userInput: string,
    os: OSProfile,
    macros?: Record<string, Macro>,
    context?: string
): string {
    const macroContext = macros && Object.keys(macros).length > 0
        ? `
【可复用的快捷指令 (Macros)】
以下是可以直接复用的已验证命令。优先复用这些指令，而不是生成新命令：

${Object.entries(macros).map(([name, macro]) => `  - ${name}: ${macro.description || '(无描述)'}`).join('\n')}

当用户的需求与某个 Macro 匹配或相似时：
1. 优先使用该 Macro
2. 在 JSON 输出中使用 "macro" 字段指定 Macro 名称，而不是 "command" 字段
3. 仅在没有合适 Macro 时才生成新命令
`
        : '';

    return `
你是一个专业的命令行专家。

【系统环境】
- 操作系统: ${os.name}
- Shell: ${os.shell}
- find 实现: ${os.find}
- stat 实现: ${os.stat}

【规则】
- 命令必须与当前系统兼容。
- 如果是 macOS (BSD):
  - 不允许使用 find -printf
  - 优先使用 stat -f
- 如果是 Linux (GNU):
  - 可使用 find -printf
- 默认不使用 sudo。
- 确保输出的命令是单行或者使用 && 连接。
- 不要解释，只输出符合以下 JSON 结构的文本。
- 优先复用已验证的快捷指令（Macros），每个 Macro 都是经过人工验证的可靠命令。在生成新命令前，检查是否已有 Macro 可以完成任务。

${macroContext}

【输出 JSON 结构】
{
  "plan": "简要说明你准备执行的步骤",
  "command": "可直接执行的 shell 命令（仅当没有合适 Macro 时提供）",
  "macro": "要复用的 Macro 名称（优先使用，与 command 二选一）",
  "risk": "low | medium | high"
}

【上下文信息】
${context || '无'}

【用户需求】
${userInput}
`;
}

export function buildCodeModificationPrompt(
    userInput: string,
    context?: string
): string {
    return `
你是一个专业的代码修改助手。

【关于代码修改的强制指令】
1. 必须使用标准的 Unified Diff 格式。
2. 即使是微小的修改，也请至少提供 3 行上下文（Context lines）。
3. 严禁使用 "..." 省略中间的代码，必须完整展示 Hunk 内的所有行。
4. 如果无法确定行号，请确保上下文内容是唯一的。
5. 保持 Diff 行数准确，如果不确定，请直接输出修改后的代码块，并带上前后 3 行作为锚点。

【规则】
- 严格按照 Unified Diff 格式输出
- 提供足够的上下文行以便定位修改位置
- 确保行数统计准确
- 不要在 Diff 外添加额外解释

【上下文信息】
${context || '无'}

【用户需求】
${userInput}

请直接输出符合标准 Unified Diff 格式的修改内容。
`;
}

export function buildFixPrompt(
    originalCmd: string,
    stderr: string,
    os: OSProfile
): string {
    return `
该命令在 ${os.name} 上执行失败：

命令：
${originalCmd}

错误信息：
${stderr}

请生成一个 **${os.name} 兼容** 的等价命令。
依然只输出 JSON 格式。注意：这是修复命令，不需要检查 Macro。

{
  "plan": "修复说明",
  "command": "修复后的命令",
  "risk": "low | medium | high"
}
`;
}
