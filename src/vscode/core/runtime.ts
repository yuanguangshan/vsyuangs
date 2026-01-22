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
    model?: string
  ) {
    try {
      console.log('[VSCodeRuntime] Starting chat execution...');
      
      // 通过 ContextAdapter 收集 VS Code 环境中的上下文
      await this.contextAdapter.collectContext();
      
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
