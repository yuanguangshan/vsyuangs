import { snapshotFromBuffer, diffContext, ContextSnapshot } from '../../engine/agent/contextDiff';
import { AgentRuntime } from '../../engine/agent/AgentRuntime';
import { ContextManager } from '../../engine/agent/contextManager';
import { VSCodeContextAdapter } from './contextAdapter';

/**
 * VS Code Agent Runtime 包装器
 * 将 AgentRuntime 与 VS Code 环境连接
 * 
 * 职责：
 * - 初始化 AgentRuntime
 * - 通过 VSCodeContextAdapter 收集 VS Code 上下文
 * - 调用底层 AgentRuntime 执行任务
 */
export class VSCodeAgentRuntime {
  private runtime: AgentRuntime;
  private contextAdapter: VSCodeContextAdapter;
  private lastContextSnapshot: ContextSnapshot | null = null;

  constructor() {
    console.log('[VSCodeRuntime] Initializing...');
    // 初始化 AgentRuntime，传入初始上下文
    this.runtime = new AgentRuntime({
      history: [],
      input: undefined
    });

    // 初始化 VS Code 上下文适配器
    this.contextAdapter = new VSCodeContextAdapter(this.runtime.getContextManager());
    console.log('[VSCodeRuntime] Initialized with context adapter');
  }

  /**
   * 运行聊天模式
   * @param userInput 用户输入
   * @param stream 流式输出回调
   * @param model 模型名称（可选）
   * @param onContextInitialized 上下文初始化回调
   * @param abortSignal 取消信号
   */
  async runChat(
    userInput: string,
    stream?: (chunk: string) => void,
    model?: string,
    onContextInitialized?: () => void,
    abortSignal?: AbortSignal
  ) {
    try {
      console.log('[VSCodeRuntime] Starting chat execution...');
      
      // ✅ 1. 先解析并加载 @ 引用（同步等待）
      await this.contextAdapter.resolveUserReferences(userInput);
      
      // ✅ 2. 等待所有异步上下文项添加完成
      await this.runtime.getContextManager().flush();
      
      // ✅ 3. 然后收集其他上下文
      await this.contextAdapter.collectContext();
      
      // ✅ 4. 计算 Diff 并通知 UI
      const buffer = this.runtime.getContextManager().getContextBuffer();
      const snapshot = snapshotFromBuffer(buffer);
      const diff = diffContext(this.lastContextSnapshot, snapshot);
      
      this.lastContextSnapshot = snapshot;

      // ✅ 5. 确保在 AI 生成前触发回调（不管是否有变化）
      if (onContextInitialized) {
          console.log(`[VSCodeRuntime] Context initialized with ${buffer.export().length} items`);
          onContextInitialized();
      }

      // ✅ 6. 启动事件监听器
      this.contextAdapter.setupEventListeners();

      // ✅ 7. 运行 AI（此时所有 @ 文件已加载完成）
      await this.runtime.run(userInput, 'chat', stream, model, abortSignal);

      console.log('[VSCodeRuntime] Chat execution completed');
      return this.runtime;
    } catch (error) {
      console.error('[VSCodeRuntime] Error running chat:', error);
      throw error;
    }
  }

  /**
   * 获取上下文管理器
   */
  getContextManager(): ContextManager {
    return this.runtime.getContextManager();
  }

  /**
   * 获取上下文适配器
   */
  getContextAdapter(): VSCodeContextAdapter {
    return this.contextAdapter;
  }

  /**
   * 获取执行记录器
   */
  getExecutionRecorder() {
    return this.runtime.getExecutionRecorder();
  }

  /**
   * 获取底层 AgentRuntime 实例
   */
  getRuntime() {
    return this.runtime;
  }
}
