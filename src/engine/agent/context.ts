import { AgentInput, AgentContext } from './types';
import { ContextBuffer } from './contextBuffer';
import { ExtendedContextProtocol } from './contextDSL';
import { computeContextImportance } from './contextImportance';

export function buildContext(input: AgentInput, contextBuffer: ContextBuffer): AgentContext {
    // 同步获取所有上下文项
    const items = contextBuffer.export();

    return {
        files: items.map(item => ({
            path: item.path,
            content: item.content,
        })),
        gitDiff: undefined, // Will be enhanced later
        history: [], // Will be populated from conversation history
        contextItems: items,
        totalTokens: items.reduce((sum, item) => sum + item.tokens, 0),
        highConfidenceItems: items.filter(item =>
            item.importance && computeContextImportance(item.importance) > 0.7
        ),
        mediumConfidenceItems: items.filter(item =>
            item.importance &&
            computeContextImportance(item.importance) > 0.3 &&
            computeContextImportance(item.importance) <= 0.7
        ),
        lowConfidenceItems: items.filter(item =>
            !item.importance || computeContextImportance(item.importance) <= 0.3
        )
    };
}
