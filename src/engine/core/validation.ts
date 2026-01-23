import { z } from 'zod';
import * as fs from 'fs';
import * as path from 'path';

export type UserConfig = {
    defaultModel?: string;
    aiProxyUrl?: string;
    accountType?: 'free' | 'pro' | 'paid';
    contextWindow?: number;
    maxFileTokens?: number;
    maxTotalTokens?: number;
    [key: string]: any;
};

export type AppsConfig = Record<string, string>;

export type AIRequestMessage = {
    role: 'system' | 'user' | 'assistant' | 'tool';
    content: string;
};

export type AIResponse = {
    choices?: Array<{
        message?: {
            content?: string;
        };
        delta?: {
            content?: string;
        };
    }>;
};

export const DEFAULT_AI_PROXY_URL = 'https://api.openai.com/v1/chat/completions';
export const DEFAULT_ACCOUNT_TYPE = 'free' as const;

// 默认值（如果配置文件不存在）
export const DEFAULT_MODEL_FALLBACK = 'gpt-4o-mini';

// 从配置文件读取默认模型
function loadDefaultModelFromConfig(): string {
    try {
        // 尝试从 __dirname 查找配置文件
        const possiblePaths = [
            path.join(__dirname, 'models.config.json'),
            path.join(process.cwd(), 'src', 'engine', 'core', 'models.config.json')
        ];

        for (const configPath of possiblePaths) {
            if (fs.existsSync(configPath)) {
                const content = fs.readFileSync(configPath, 'utf-8');
                const config = JSON.parse(content);
                const model = config.defaultModel || DEFAULT_MODEL_FALLBACK;
                console.log(`[validation] Loaded default model from config: ${model}`);
                return model;
            }
        }

        console.warn('[validation] Models config file not found, using fallback');
        return DEFAULT_MODEL_FALLBACK;
    } catch (error) {
        console.error('[validation] Failed to read models config:', error);
        return DEFAULT_MODEL_FALLBACK;
    }
}

// 初始化时加载默认模型并导出
export const DEFAULT_MODEL: string = loadDefaultModelFromConfig();

export const DEFAULT_APPS = {
    shici: 'https://wealth.want.biz/shici/index.html',
    dict: 'https://wealth.want.biz/pages/dict.html',
    pong: 'https://wealth.want.biz/pages/pong.html'
} as const;

export const aiCommandPlanSchema = z.object({
    plan: z.string().describe('Explanation of the command'),
    command: z.string().optional().describe('The shell command to execute'),
    macro: z.string().optional().describe('Name of an existing macro to reuse'),
    risk: z.enum(['low', 'medium', 'high']).describe('Risk level assessment')
}).refine(data => data.command || data.macro, {
    message: 'Either command or macro must be provided'
});

export type AICommandPlan = z.infer<typeof aiCommandPlanSchema>;

export const aiFixPlanSchema = z.object({
    plan: z.string().describe('Fix explanation'),
    command: z.string().describe('The fixed shell command (always required for fixes)'),
    risk: z.enum(['low', 'medium', 'high']).describe('Risk level assessment')
});

export type AIFixPlan = z.infer<typeof aiFixPlanSchema>;

export const userConfigSchema = z.object({
    defaultModel: z.string().optional(),
    aiProxyUrl: z.string().url().optional(),
    accountType: z.enum(['free', 'pro', 'paid']).optional(),
    contextWindow: z.number().optional(),
    maxFileTokens: z.number().optional(),
    maxTotalTokens: z.number().optional()
}).passthrough();

export const appsConfigSchema = z.record(z.string(), z.string());

export const macroSchema = z.object({
    commands: z.string(),
    description: z.string(),
    createdAt: z.string()
});

export type Macro = z.infer<typeof macroSchema>;

export const historyEntrySchema = z.object({
    question: z.string(),
    command: z.string(),
    time: z.string()
});

export type HistoryEntry = z.infer<typeof historyEntrySchema>;

export function extractJSON(raw: string): string {
    let jsonContent = raw.trim();

    if (jsonContent.includes('```json')) {
        jsonContent = jsonContent.split('```json')[1].split('```')[0].trim();
    }
    else if (jsonContent.includes('```')) {
        jsonContent = jsonContent.split('```')[1].split('```')[0].trim();
    }

    const firstBrace = jsonContent.indexOf('{');
    const lastBrace = jsonContent.lastIndexOf('}');

    if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
        jsonContent = jsonContent.substring(firstBrace, lastBrace + 1);
    }

    return jsonContent;
}

export function safeParseJSON<T>(
    raw: string,
    schema: z.ZodSchema<T>,
    fallback: T
): { success: true; data: T } | { success: false; error: z.ZodError } {
    try {
        const jsonContent = extractJSON(raw);
        const result = schema.safeParse(JSON.parse(jsonContent));

        if (result.success) {
            return { success: true, data: result.data };
        } else {
            return { success: false, error: result.error };
        }
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error };
        }
        return {
            success: false,
            error: new z.ZodError([
                {
                    code: z.ZodIssueCode.custom,
                    message: `Failed to parse JSON: ${error instanceof Error ? error.message : String(error)}`,
                    path: []
                }
            ])
        };
    }
}

export function parseUserConfig(content: string): UserConfig {
    return userConfigSchema.parse(JSON.parse(content));
}

export function parseAppsConfig(content: string): AppsConfig {
    return appsConfigSchema.parse(JSON.parse(content)) as AppsConfig;
}

export function parseMacros(content: string): Record<string, Macro> {
    const parsed = JSON.parse(content);
    const macros: Record<string, Macro> = {};

    for (const [name, value] of Object.entries(parsed)) {
        macros[name] = macroSchema.parse(value);
    }

    return macros;
}

export function parseCommandHistory(content: string): HistoryEntry[] {
    const parsed = JSON.parse(content);
    return z.array(historyEntrySchema).parse(parsed);
}
