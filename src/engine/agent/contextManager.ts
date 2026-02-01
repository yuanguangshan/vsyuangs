import crypto from 'crypto';
import { GovernanceContext } from './state';
import { ContextBuffer } from './contextBuffer';
import { ExtendedContextProtocol } from './contextDSL';
import { ContextBank } from './contextBank';

export class ContextManager {
  private messages: Array<{ role: string; content: string; timestamp: number; metadata?: { kind?: import('./types').ObservationKind } }> = [];
  private contextBuffer: ContextBuffer;
  private contextBank: ContextBank;
  private maxHistorySize = 50;
  
  // ✅ 跟踪所有异步添加操作的 Promise
  private pendingAdds: Set<Promise<void>> = new Set();

  constructor(initialContext?: GovernanceContext) {
    this.contextBuffer = new ContextBuffer();
    this.contextBank = new ContextBank();

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

  /**
   * 添加 Observation，支持类型分级（v3.1）
   * @param observation 观察内容
   * @param kind Observation 类型：tool_result, system_note, error
   */
  addObservation(observation: string, kind: import('./types').ObservationKind = 'system_note'): void {
    this.addMessage('system', observation);
    // 为最后一条消息添加 kind 元数据
    if (this.messages.length > 0) {
      this.messages[this.messages.length - 1].metadata = { kind };
    }
  }

  /**
   * 调试用：仅获取 Observation（Tool / System 注入）
   * 不包含 user / assistant
   */
  getObservations(): Array<{ role: 'tool' | 'system'; content: string }> {
    return this.messages
      .filter(m => m.role === 'tool' || m.role === 'system')
      .map(m => ({
        role: m.role as 'tool' | 'system',
        content: m.content
      }));
  }

  /**
   * 获取最新的 Observation（向后兼容）
   */
  getLastObservation(): { role: 'tool' | 'system'; content: string } | null {
    for (let i = this.messages.length - 1; i >= 0; i--) {
      const m = this.messages[i];
      if (m.role === 'tool' || m.role === 'system') {
        return { role: m.role as any, content: m.content };
      }
    }
    return null;
  }

  /**
   * 获取需要 ACK 的 Observation（排除 error 类型）
   * 这是 v3.1 的核心修复：防止 ERROR 被当成需要确认的 Observation
   */
  getLastAckableObservation(): { role: 'tool' | 'system'; content: string } | null {
    for (let i = this.messages.length - 1; i >= 0; i--) {
      const m = this.messages[i];
      if ((m.role === 'tool' || m.role === 'system') && m.metadata?.kind !== 'error') {
        return { role: m.role as any, content: m.content };
      }
    }
    return null;
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
    // ✅ 创建 Promise 并跟踪它
    const p = this.contextBuffer.addAsync(item);
    this.pendingAdds.add(p);
    
    try {
      await p;
    } finally {
      this.pendingAdds.delete(p);
    }
  }

  buildContextPrompt(userInput: string, options?: import('./contextBuffer').BuildPromptOptions) {
    return this.contextBuffer.buildPrompt(userInput, options);
  }

  /**
   * 使用 DSL 查询上下文
   */
  async queryDSL(dslQuery: string) {
    return await this.contextBuffer.queryDSL(dslQuery, this.contextBank);
  }

  /**
   * 解析包含 DSL 的用户输入并获取相关上下文
   */
  async getDSLContextForInput(input: string) {
    return await this.contextBuffer.getDSLContextForInput(input, this.contextBank);
  }

  /**
   * 初始化 Context Bank
   */
  async initializeContextBank(): Promise<void> {
    await this.contextBank.initialize();
  }

  /**
   * 从 ContextBuffer 导出高价值上下文到银行
   */
  async exportToContextBank(projectScope?: string): Promise<void> {
    await this.contextBank.exportFromContextBuffer(this.contextBuffer, projectScope);
  }

  /**
   * 从 Context Bank 查询上下文
   */
  async queryContextBank(options: import('./contextBank').BankQueryOptions): Promise<import('./contextBank').BankContextItem[]> {
    return await this.contextBank.query(options);
  }

  /**
   * 将 Context Bank 中的项目添加到当前上下文
   */
  async importFromContextBank(options: import('./contextBank').BankQueryOptions): Promise<void> {
    const bankItems = await this.contextBank.query(options);

    for (const item of bankItems) {
      // 将 BankContextItem 转换为 ContextItem 并添加到缓冲区
      this.contextBuffer.add({
        type: item.type,
        path: item.path,
        stableId: item.stableId,
        content: item.content,
        summary: item.summary,
        summarized: item.summarized,
        semantic: item.semantic,
        summaryQuality: item.summaryQuality,
        referencedBy: item.referencedBy,
        usageStats: item.usageStats,
        importance: item.importance,
        metadata: {
          source: 'context_bank',
          bankItemId: item.id
        }
      });
    }
  }

  /**
   * 记录 ContextBank 项目的使用情况
   */
  async recordBankUsage(success: boolean): Promise<void> {
    const contextItems = this.contextBuffer.export();

    for (const item of contextItems) {
      // 检查项目是否来自银行（有 bankItemId）
      const bankItemId = (item as any).metadata?.bankItemId;
      if (bankItemId) {
        try {
          // 使用银行项目 ID 而不是路径进行记录
          await this.contextBank.recordUsage(bankItemId, success);
        } catch (error) {
          console.warn(`[ContextManager] Could not record bank usage for ${bankItemId}:`, error);
        }
      }
    }
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

  /**
   * 等待所有异步上下文项添加完成
   * 
   * ✅ 真正等待所有 pending 的异步操作
   * 即使未来 addAsync() 变为真正的异步（摘要、embedding等），
   * 此方法也能确保所有操作完成后再继续。
   */
  async flush(): Promise<void> {
    if (this.pendingAdds.size === 0) {
      return;
    }
    
    console.log(`[ContextManager] Flushing ${this.pendingAdds.size} pending add operations...`);
    await Promise.all(Array.from(this.pendingAdds));
    console.log('[ContextManager] All add operations completed');
  }
}
