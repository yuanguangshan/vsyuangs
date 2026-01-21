import crypto from 'crypto';
import { GovernanceContext } from './state';
import { ContextBuffer } from './contextBuffer';

export class ContextManager {
  private messages: Array<{ role: string; content: string; timestamp: number }> = [];
  private contextBuffer: ContextBuffer;
  private maxHistorySize = 50;

  constructor(initialContext?: GovernanceContext) {
    this.contextBuffer = new ContextBuffer();

    if (initialContext?.history) {
      this.messages = initialContext.history.map(msg => ({
        ...msg,
        timestamp: Date.now()
      }));
    }

    if (initialContext?.input) {
      this.addMessage('user', initialContext.input);
    }
  }

  addMessage(role: string, content: string): void {
    this.messages.push({
      role,
      content,
      timestamp: Date.now()
    });

    if (this.messages.length > this.maxHistorySize) {
      this.messages = this.messages.slice(-this.maxHistorySize);
    }
  }

  addToolResult(toolName: string, result: string): void {
    const content = `Tool ${toolName} returned:\n${result}`;
    this.addMessage('tool', content);
  }

  addObservation(observation: string): void {
    this.addMessage('system', observation);
  }

  getMessages(): Array<{ role: 'system' | 'user' | 'assistant' | 'tool'; content: string }> {
    return this.messages.map(({ role, content }) => ({
      role: role as 'system' | 'user' | 'assistant' | 'tool',
      content
    }));
  }

  getContextBuffer(): ContextBuffer {
    return this.contextBuffer;
  }

  addContextItem(item: Omit<import('./contextBuffer').ContextItem, 'tokens'>) {
    this.contextBuffer.add(item);
  }

  async addContextItemAsync(item: Omit<import('./contextBuffer').ContextItem, 'tokens'>) {
    await this.contextBuffer.addAsync(item);
  }

  buildContextPrompt(userInput: string, options?: import('./contextBuffer').BuildPromptOptions) {
    return this.contextBuffer.buildPrompt(userInput, options);
  }

  getRecentMessages(count: number): Array<{ role: string; content: string; timestamp: number }> {
    return this.messages.slice(-count);
  }

  getHash(): string {
    const content = JSON.stringify(this.messages);
    return crypto.createHash('sha256').update(content).digest('hex');
  }

  getSnapshot() {
    return {
      inputHash: this.getHash(),
      systemPromptVersion: 'v1.0.0',
      toolSetVersion: 'v1.0.0',
      recentMessages: this.getRecentMessages(10)
    };
  }

  clear(): void {
    this.messages = [];
    this.contextBuffer.clear();
  }
}
