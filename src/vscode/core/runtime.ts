import { snapshotFromBuffer, diffContext, ContextSnapshot } from '../../engine/agent/contextDiff';
import { AgentRuntime } from '../../engine/agent/AgentRuntime';
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
   */
  async runChat(
    userInput: string,
    stream?: (chunk: string) => void,
    model?: string,
    onContextInitialized?: () => void
  ) {
    try {
      console.log('[VSCodeRuntime] Starting chat execution...');
      
      // 通过 ContextAdapter 收集 VS Code 环境中的上下文
      await this.contextAdapter.collectContext();
      
      // 解析用户输入中的引用
      await this.contextAdapter.resolveUserReferences(userInput);
      
      // 计算 Diff 并决定是否更新 UI
      const buffer = this.runtime.getContextManager().getContextBuffer();
      const snapshot = snapshotFromBuffer(buffer);
      const diff = diffContext(this.lastContextSnapshot, snapshot);
      
      this.lastContextSnapshot = snapshot;

      // 只有在新增或内容变化时才通知 UI (On-Demand Push)
      if (onContextInitialized && (diff.added.length > 0 || diff.changed.length > 0)) {
          console.log(`[VSCodeRuntime] Context diff detected: +${diff.added.length} ~${diff.changed.length}`);
          onContextInitialized();
      } else if (!this.lastContextSnapshot && onContextInitialized) {
          // 第一次运行时，如果有内容也通知
          if (!buffer.isEmpty()) {
               onContextInitialized();
          }
      }

      // 启动 VS Code 事件监听器
      this.contextAdapter.setupEventListeners();

      // 运行 AgentRuntime
      await this.runtime.run(userInput, 'chat', stream, model);

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
  getContextManager() {
    return this.runtime.getContextManager();
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
