import fs from 'fs';
import path from 'path';

/**
 * Sampling strategies for context content
 */
export type SamplingStrategy = 'head' | 'tail' | 'head_tail' | 'full';

/**
 * Cost profile for estimating token usage
 */
export interface CostProfile {
  tokensPerLine: number;
  maxTokens: number;
}

/**
 * Context item that needs to be sampled
 */
export interface ContextItem {
  id: string;
  type: 'file' | 'directory';
  path: string;
  samplingStrategy: SamplingStrategy;
  estimate(): Promise<{ byteSize: number; lineCount: number }>;
  resolve(): Promise<string>;
}

/**
 * Pending context item with lazy resolution
 */
export class PendingContextItem implements ContextItem {
  constructor(
    public id: string,
    public type: 'file' | 'directory',
    public path: string,
    public samplingStrategy: SamplingStrategy = 'head_tail'
  ) {}

  /**
   * Estimate the size without reading the file content
   */
  async estimate(): Promise<{ byteSize: number; lineCount: number }> {
    try {
      const stats = await fs.promises.stat(this.path);
      const byteSize = stats.size;
      
      // Rough estimate: average line is about 80 characters
      const lineCount = Math.ceil(byteSize / 80);
      
      return { byteSize, lineCount };
    } catch (error) {
      console.error(`Error estimating ${this.path}:`, error);
      return { byteSize: 0, lineCount: 0 };
    }
  }

  /**
   * Read and resolve the file content
   */
  async resolve(): Promise<string> {
    try {
      return await fs.promises.readFile(this.path, 'utf-8');
    } catch (error) {
      console.error(`Error reading ${this.path}:`, error);
      return '';
    }
  }
}

/**
 * Sampler configuration
 */
export interface SamplerConfig {
  maxLines?: number;
  maxBytes?: number;
  maxTokens?: number;
  defaultStrategy?: SamplingStrategy;
}

/**
 * Default configuration
 */
const DEFAULT_CONFIG: Required<SamplerConfig> = {
  maxLines: 1000,
  maxBytes: 1024 * 100, // 100KB
  maxTokens: 4000,
  defaultStrategy: 'head_tail'
};

/**
 * Context Sampler
 * 
 * Responsible for sampling and truncating context content based on
 * sampling strategies and budget constraints.
 */
export class ContextSampler {
  private config: Required<SamplerConfig>;

  constructor(config: SamplerConfig = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  /**
   * Sample a single context item
   */
  async sample(item: ContextItem, config?: Partial<SamplerConfig>): Promise<string> {
    const effectiveConfig = { ...this.config, ...config };
    const strategy = item.samplingStrategy || effectiveConfig.defaultStrategy;

    // Estimate first (cheap operation)
    const { byteSize, lineCount } = await item.estimate();

    // If within limits, just resolve and return
    if (byteSize <= effectiveConfig.maxBytes && lineCount <= effectiveConfig.maxLines) {
      return await item.resolve();
    }

    // Need to sample based on strategy
    const content = await item.resolve();
    return this.applySamplingStrategy(content, strategy, effectiveConfig);
  }

  /**
   * Sample multiple context items with budget allocation
   */
  async sampleMultiple(items: ContextItem[], config?: Partial<SamplerConfig>): Promise<Map<string, string>> {
    const results = new Map<string, string>();

    for (const item of items) {
      try {
        const sampled = await this.sample(item, config);
        results.set(item.id, sampled);
      } catch (error) {
        console.error(`Error sampling item ${item.id}:`, error);
        results.set(item.id, '');
      }
    }

    return results;
  }

  /**
   * Apply sampling strategy to content
   */
  private applySamplingStrategy(
    content: string,
    strategy: SamplingStrategy,
    config: Required<SamplerConfig>
  ): string {
    const lines = content.split('\n');
    const totalLines = lines.length;

    switch (strategy) {
      case 'head':
        return this.sampleHead(lines, config.maxLines);

      case 'tail':
        return this.sampleTail(lines, config.maxLines);

      case 'head_tail':
        return this.sampleHeadTail(lines, config.maxLines);

      case 'full':
        return content;

      default:
        return this.sampleHeadTail(lines, config.maxLines);
    }
  }

  /**
   * Sample from the beginning of the file
   */
  private sampleHead(lines: string[], maxLines: number): string {
    const sampled = lines.slice(0, maxLines);
    return sampled.join('\n');
  }

  /**
   * Sample from the end of the file
   */
  private sampleTail(lines: string[], maxLines: number): string {
    const sampled = lines.slice(-maxLines);
    return sampled.join('\n');
  }

  /**
   * Sample from both beginning and end of the file
   */
  private sampleHeadTail(lines: string[], maxLines: number): string {
    if (lines.length <= maxLines) {
      return lines.join('\n');
    }

    const headLines = Math.floor(maxLines / 2);
    const tailLines = maxLines - headLines;

    const head = lines.slice(0, headLines);
    const tail = lines.slice(-tailLines);

    // Add separator to indicate truncation
    const separator = `\n... [${lines.length - maxLines} lines truncated] ...\n`;
    return [...head, separator, ...tail].join('\n');
  }

  /**
   * Estimate token count for content
   */
  estimateTokens(content: string): number {
    // Rough estimate: 1 token ≈ 4 characters
    return Math.ceil(content.length / 4);
  }

  /**
   * Check if content exceeds token budget
   */
  exceedsTokenBudget(content: string, budget?: number): boolean {
    const effectiveBudget = budget || this.config.maxTokens;
    const estimatedTokens = this.estimateTokens(content);
    return estimatedTokens > effectiveBudget;
  }
}

/**
 * Create a sampler with custom configuration
 */
export function createSampler(config?: SamplerConfig): ContextSampler {
  return new ContextSampler(config);
}

/**
 * Default sampler instance
 */
export const defaultSampler = new ContextSampler();