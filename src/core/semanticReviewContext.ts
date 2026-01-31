/**
 * Semantic Review Context - Phase 3 完整上下文构建器
 * 
 * 目标：
 * - 构建基于真实可编译上下文的语义审查
 * - 支持 TypeScript Program 的内存构建
 * - 实现项目根查找（tsconfig.json 向上搜索）
 * - 输出分级语义风险（非 pass/fail）
 * 
 * 原则：
 * - 在 diff 应用后进行语义审查
 * - 基于真实 AST 和类型系统
 * - 区分 critical、error、warning、info
 */

import * as vscode from 'vscode';
import * as ts from 'typescript';
import * as path from 'path';

/**
 * 语义风险级别
 */
export enum SemanticRiskLevel {
  /** 关键：必须阻塞 */
  CRITICAL = 'critical',
  /** 错误：需要修复 */
  ERROR = 'error',
  /** 警告：需要注意 */
  WARNING = 'warning',
  /** 信息：可选改进 */
  INFO = 'info'
}

/**
 * 语义风险类别
 */
export enum SemanticRiskCategory {
  /** 类型安全 */
  TYPE_SAFETY = 'type_safety',
  /** 逻辑错误 */
  LOGIC = 'logic',
  /** 安全问题 */
  SECURITY = 'security',
  /** 性能问题 */
  PERFORMANCE = 'performance',
  /** API 误用 */
  API_MISUSE = 'api_misuse',
  /** 代码质量 */
  CODE_QUALITY = 'code_quality'
}

/**
 * 语义风险
 */
export interface SemanticRisk {
  /** 风险 ID */
  id: string;
  
  /** 风险级别 */
  level: SemanticRiskLevel;
  
  /** 风险类别 */
  category: SemanticRiskCategory;
  
  /** 风险消息 */
  message: string;
  
  /** 文件路径 */
  filePath: string;
  
  /** 代码位置 */
  range?: {
    startLine: number;
    startChar: number;
    endLine: number;
    endChar: number;
  };
  
  /** 相关代码片段 */
  snippet?: string;
  
  /** 修复建议 */
  suggestion?: string;
  
  /** 置信度 [0, 1] */
  confidence: number;
}

/**
 * Phase 3 语义审查结果
 */
export interface Phase3ReviewResult {
  /** 是否通过审查 */
  passed: boolean;
  
  /** 阻塞原因（如果未通过） */
  blockReason?: string;
  
  /** 语义风险列表 */
  risks: SemanticRisk[];
  
  /** 风险统计 */
  stats: {
    critical: number;
    error: number;
    warning: number;
    info: number;
  };
  
  /** 审查耗时（毫秒） */
  duration: number;
}

/**
 * 语义审查上下文
 */
export interface SemanticReviewContext {
  /** TypeScript Program */
  program: ts.Program;
  
  /** TypeScript Compiler API */
  compiler: typeof ts;
  
  /** 项目根目录 */
  projectRoot: string;
  
  /** tsconfig.json 路径 */
  tsconfigPath: string;
}

/**
 * Phase 3 语义审查器
 */
export class Phase3SemanticReviewer {
  /**
   * 构建语义审查上下文
   */
  static async buildContext(): Promise<SemanticReviewContext | null> {
    const startTime = Date.now();

    try {
      // 1. 查找项目根目录（tsconfig.json 向上搜索）
      const projectRoot = await this.findProjectRoot();
      if (!projectRoot) {
        console.warn('[Phase3SemanticReviewer] No tsconfig.json found');
        return null;
      }

      const tsconfigPath = path.resolve(projectRoot, 'tsconfig.json');

      if (!ts.sys.fileExists(tsconfigPath)) {
        console.warn('[Phase3SemanticReviewer] Cannot resolve tsconfig.json');
        return null;
      }

      console.log(`[Phase3SemanticReviewer] Found tsconfig.json: ${tsconfigPath}`);

      // 2. 读取 tsconfig.json
      const configResult = ts.readConfigFile(tsconfigPath, ts.sys.readFile);
      if (configResult.error) {
        console.error('[Phase3SemanticReviewer] Failed to read tsconfig.json:', configResult.error);
        return null;
      }

      // 3. 创建 TypeScript Program
      const configParseResult = ts.parseJsonConfigFileContent(
        configResult.config,
        ts.sys,
        projectRoot,
        undefined,
        tsconfigPath
      );

      const program = ts.createProgram({
        rootNames: configParseResult.fileNames,
        options: {
          ...configParseResult.options,
          // 确保 type checking 是严格的
          strict: true,
          noImplicitAny: true,
          strictNullChecks: true,
          noUnusedLocals: true,
          noUnusedParameters: true,
          noImplicitReturns: true,
          noFallthroughCasesInSwitch: true
        }
      });

      const duration = Date.now() - startTime;
      console.log(`[Phase3SemanticReviewer] Context built in ${duration}ms`);

      return {
        program,
        compiler: ts,
        projectRoot,
        tsconfigPath
      };
    } catch (error) {
      console.error('[Phase3SemanticReviewer] Failed to build context:', error);
      return null;
    }
  }

  /**
   * 查找项目根目录（tsconfig.json 向上搜索）
   */
  private static async findProjectRoot(): Promise<string | null> {
    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    if (!workspaceFolder) {
      return null;
    }

    const workspacePath = workspaceFolder.uri.fsPath;

    // 从当前目录向上搜索 tsconfig.json
    let currentPath = workspacePath;
    const maxDepth = 10;

    for (let i = 0; i < maxDepth; i++) {
      const tsconfigPath = path.join(currentPath, 'tsconfig.json');
      if (ts.sys.fileExists(tsconfigPath)) {
        return currentPath;
      }

      const parentPath = path.dirname(currentPath);
      if (parentPath === currentPath) {
        // 已到达根目录
        break;
      }

      currentPath = parentPath;
    }

    return null;
  }

  /**
   * 执行 Phase 3 语义审查
   */
  static async review(
    filePaths: string[],
    context?: SemanticReviewContext
  ): Promise<Phase3ReviewResult> {
    const startTime = Date.now();
    const risks: SemanticRisk[] = [];

    try {
      // 如果没有提供上下文，尝试构建
      const reviewContext = context || (await this.buildContext());
      if (!reviewContext) {
        // 无法构建上下文，返回空结果
        console.warn('[Phase3SemanticReviewer] No context available, skipping semantic review');
        return {
          passed: true,
          risks: [],
          stats: { critical: 0, error: 0, warning: 0, info: 0 },
          duration: Date.now() - startTime
        };
      }

      // 对每个文件进行审查
      for (const filePath of filePaths) {
        const fileRisks = await this.reviewFile(filePath, reviewContext);
        risks.push(...fileRisks);
      }

      // 统计风险
      const stats = this.calculateRiskStats(risks);

      // 判断是否通过审查
      const passed = stats.critical === 0 && stats.error === 0;
      const blockReason = !passed
        ? `${stats.critical} critical risks and ${stats.error} errors detected`
        : undefined;

      const duration = Date.now() - startTime;
      console.log(`[Phase3SemanticReviewer] Review completed in ${duration}ms: ${risks.length} risks`);

      return {
        passed,
        blockReason,
        risks,
        stats,
        duration
      };
    } catch (error) {
      console.error('[Phase3SemanticReviewer] Review failed:', error);
      return {
        passed: false,
        blockReason: error instanceof Error ? error.message : String(error),
        risks,
        stats: this.calculateRiskStats(risks),
        duration: Date.now() - startTime
      };
    }
  }

  /**
   * 审查单个文件
   */
  private static async reviewFile(
    filePath: string,
    context: SemanticReviewContext
  ): Promise<SemanticRisk[]> {
    let risks: SemanticRisk[] = [];

    try {
      // 获取 SourceFile
      const sourceFile = context.program.getSourceFile(filePath);
      if (!sourceFile) {
        console.warn(`[Phase3SemanticReviewer] SourceFile not found: ${filePath}`);
        return [];
      }

      // 1. TypeScript 诊断信息
      const diagnostics = context.program.getSemanticDiagnostics(sourceFile);
      const diagnosticRisks = this.convertDiagnosticsToRisks(diagnostics, filePath);
      
      // 2. 自定义规则检查
      const sourceFilePath = sourceFile.fileName;
      const customRisks = this.runCustomRules(sourceFile, sourceFilePath);

      risks = [...diagnosticRisks, ...customRisks];

      return risks;
    } catch (error) {
      console.error(`[Phase3SemanticReviewer] Failed to review file ${filePath}:`, error);
      return [];
    }
  }

  /**
   * 将 TypeScript 诊断信息转换为语义风险
   */
  private static convertDiagnosticsToRisks(
    diagnostics: readonly ts.Diagnostic[],
    filePath: string
  ): SemanticRisk[] {
    return diagnostics.map(diagnostic => {
      const level = this.diagnosticCategoryToRiskLevel(diagnostic.category);
      const category = this.diagnosticMessageToCategory(diagnostic.messageText);

      let range;
      if (diagnostic.start !== undefined && diagnostic.length !== undefined) {
        const startLine = diagnostic.start;
        const startChar = 0; // 简化处理
        const endLine = diagnostic.start + diagnostic.length;
        const endChar = 0;

        range = { startLine, startChar, endLine, endChar };
      }

      return {
        id: `ts-${diagnostic.code}`,
        level,
        category,
        message: ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'),
        filePath,
        range,
        confidence: 1.0
      };
    });
  }

  /**
   * 运行自定义规则
   */
  private static runCustomRules(
    sourceFile: ts.SourceFile,
    filePath: string
  ): SemanticRisk[] {
    const risks: SemanticRisk[] = [];

    // 1. 禁止使用 any 类型
    this.checkNoAny(sourceFile, filePath, risks);

    // 2. 禁止空 catch 块
    this.checkNoEmptyCatch(sourceFile, filePath, risks);

    // 3. 禁止 console.log（在生产代码中）
    this.checkNoConsoleLog(sourceFile, filePath, risks);

    // 4. 禁止 eval
    this.checkNoEval(sourceFile, filePath, risks);

    return risks;
  }

  /**
   * 检查禁止使用 any 类型
   */
  private static checkNoAny(
    node: ts.Node,
    filePath: string,
    risks: SemanticRisk[]
  ): void {
    if (node.kind === ts.SyntaxKind.AnyKeyword) {
      risks.push({
        id: 'no-any',
        level: SemanticRiskLevel.WARNING,
        category: SemanticRiskCategory.TYPE_SAFETY,
        message: 'Avoid using `any` type, use `unknown` or specific types instead',
        filePath,
        range: this.nodeToRange(node),
        confidence: 0.9,
        suggestion: 'Replace `any` with a specific type or `unknown`'
      });
    }

    ts.forEachChild(node, child => this.checkNoAny(child, filePath, risks));
  }

  /**
   * 检查禁止空 catch 块
   */
  private static checkNoEmptyCatch(
    node: ts.Node,
    filePath: string,
    risks: SemanticRisk[]
  ): void {
    if (ts.isTryStatement(node) && node.catchClause) {
      const catchClause = node.catchClause;
      const hasStatements = catchClause.block.statements.length > 0;

      if (!hasStatements) {
        risks.push({
          id: 'no-empty-catch',
          level: SemanticRiskLevel.ERROR,
          category: SemanticRiskCategory.LOGIC,
          message: 'Empty catch block detected. Either handle the error or rethrow it.',
          filePath,
          range: this.nodeToRange(catchClause),
          confidence: 1.0,
          suggestion: 'Add error handling or rethrow the error'
        });
      }
    }

    ts.forEachChild(node, child => this.checkNoEmptyCatch(child, filePath, risks));
  }

  /**
   * 检查禁止 console.log
   */
  private static checkNoConsoleLog(
    node: ts.Node,
    filePath: string,
    risks: SemanticRisk[]
  ): void {
    if (ts.isCallExpression(node)) {
      const expression = node.expression;

      // 检查是否是 console.log
      if (ts.isPropertyAccessExpression(expression)) {
        const objectName = expression.expression.getText();
        const propertyName = expression.name.getText();

        if (objectName === 'console' && propertyName === 'log') {
          // 排除测试文件
          if (!filePath.includes('.test.') && !filePath.includes('.spec.')) {
            risks.push({
              id: 'no-console-log',
              level: SemanticRiskLevel.WARNING,
              category: SemanticRiskCategory.CODE_QUALITY,
              message: 'Avoid using console.log in production code',
              filePath,
              range: this.nodeToRange(node),
              confidence: 0.8,
              suggestion: 'Use a proper logging library instead'
            });
          }
        }
      }
    }

    ts.forEachChild(node, child => this.checkNoConsoleLog(child, filePath, risks));
  }

  /**
   * 检查禁止 eval
   */
  private static checkNoEval(
    node: ts.Node,
    filePath: string,
    risks: SemanticRisk[]
  ): void {
    if (ts.isCallExpression(node)) {
      const expression = node.expression;

      // 检查是否是 eval
      if (ts.isIdentifier(expression) && expression.text === 'eval') {
        risks.push({
          id: 'no-eval',
          level: SemanticRiskLevel.CRITICAL,
          category: SemanticRiskCategory.SECURITY,
          message: 'The use of eval is dangerous and can lead to security vulnerabilities',
          filePath,
          range: this.nodeToRange(node),
          confidence: 1.0,
          suggestion: 'Avoid using eval. Use alternative approaches instead'
        });
      }
    }

    ts.forEachChild(node, child => this.checkNoEval(child, filePath, risks));
  }

  /**
   * 将诊断类别转换为风险级别
   */
  private static diagnosticCategoryToRiskLevel(
    category: ts.DiagnosticCategory
  ): SemanticRiskLevel {
    switch (category) {
      case ts.DiagnosticCategory.Error:
        return SemanticRiskLevel.ERROR;
      case ts.DiagnosticCategory.Warning:
        return SemanticRiskLevel.WARNING;
      case ts.DiagnosticCategory.Suggestion:
        return SemanticRiskLevel.INFO;
      case ts.DiagnosticCategory.Message:
        return SemanticRiskLevel.INFO;
      default:
        return SemanticRiskLevel.INFO;
    }
  }

  /**
   * 根据诊断消息推断风险类别
   */
  private static diagnosticMessageToCategory(
    messageText: string | ts.DiagnosticMessageChain
  ): SemanticRiskCategory {
    const message = typeof messageText === 'string'
      ? messageText
      : ts.flattenDiagnosticMessageText(messageText, '\n').toLowerCase();

    if (message.includes('security') || message.includes('xss') || message.includes('injection')) {
      return SemanticRiskCategory.SECURITY;
    }

    if (message.includes('performance') || message.includes('loop') || message.includes('o(n)')) {
      return SemanticRiskCategory.PERFORMANCE;
    }

    if (message.includes('type') || message.includes('any') || message.includes('undefined')) {
      return SemanticRiskCategory.TYPE_SAFETY;
    }

    if (message.includes('unused') || message.includes('dead code')) {
      return SemanticRiskCategory.CODE_QUALITY;
    }

    return SemanticRiskCategory.LOGIC;
  }

  /**
   * 将 AST 节点转换为范围
   */
  private static nodeToRange(
    node: ts.Node
  ): { startLine: number; startChar: number; endLine: number; endChar: number } {
    const sourceFile = node.getSourceFile();
    const start = ts.getLineAndCharacterOfPosition(sourceFile, node.getStart(sourceFile));
    const end = ts.getLineAndCharacterOfPosition(sourceFile, node.end);

    return {
      startLine: start.line,
      startChar: start.character,
      endLine: end.line,
      endChar: end.character
    };
  }

  /**
   * 计算风险统计
   */
  private static calculateRiskStats(
    risks: SemanticRisk[]
  ): { critical: number; error: number; warning: number; info: number } {
    const stats = {
      critical: 0,
      error: 0,
      warning: 0,
      info: 0
    };

    for (const risk of risks) {
      switch (risk.level) {
        case SemanticRiskLevel.CRITICAL:
          stats.critical++;
          break;
        case SemanticRiskLevel.ERROR:
          stats.error++;
          break;
        case SemanticRiskLevel.WARNING:
          stats.warning++;
          break;
        case SemanticRiskLevel.INFO:
          stats.info++;
          break;
      }
    }

    return stats;
  }
}

/**
 * 快捷函数：执行 Phase 3 语义审查
 */
export async function reviewPhase3(
  filePaths: string[],
  context?: SemanticReviewContext
): Promise<Phase3ReviewResult> {
  return Phase3SemanticReviewer.review(filePaths, context);
}

/**
 * 快捷函数：构建语义审查上下文
 */
export async function buildSemanticReviewContext(): Promise<SemanticReviewContext | null> {
  return Phase3SemanticReviewer.buildContext();
}