import type { AIRequestMessage } from '../core/validation';
// import { AgentPlan } from './plan';

export type AgentMode = 'chat' | 'command' | 'command+exec';

export interface AgentInput {
    rawInput: string;
    stdin?: string;
    context?: AgentContext;
    options?: {
        model?: string;
        stream?: boolean;
        autoYes?: boolean;
        verbose?: boolean;
    };
}

export interface AgentContext {
    files?: Array<{ path: string; content: string }>;
    gitDiff?: string;
    history?: AIRequestMessage[];
    contextItems?: import('./contextBuffer').ContextItem[];
    totalTokens?: number;
    highConfidenceItems?: import('./contextBuffer').ContextItem[];
    mediumConfidenceItems?: import('./contextBuffer').ContextItem[];
    lowConfidenceItems?: import('./contextBuffer').ContextItem[];
}

export interface AgentIntent {
    type: 'chat' | 'shell' | 'analysis';
    capabilities: {
        reasoning?: boolean;
        code?: boolean;
        longContext?: boolean;
        streaming?: boolean;
    };
}

export interface AgentPrompt {
    system?: string;
    messages: AIRequestMessage[];
    outputSchema?: any;
}

export interface LLMResult {
    rawText: string;
    parsed?: any;
    plan?: any;
    latencyMs: number;
    tokens?: {
        prompt: number;
        completion: number;
        total: number;
    };
    costUsd?: number;
}

export type AgentAction =
    | { type: 'print'; content: string }
    | { type: 'confirm'; next: AgentAction }
    | { type: 'execute'; command: string; risk: 'low' | 'medium' | 'high' };

/**
 * Observation 类型分级（v3.1）
 * 用于区分哪些 Observation 需要确认，哪些不需要
 */
export type ObservationKind = 'tool_result' | 'system_note' | 'error' | 'none';

/**
 * 完整的 Observation 接口
 */
export interface Observation {
    kind: ObservationKind;
    content: string;
    timestamp: number;
}
