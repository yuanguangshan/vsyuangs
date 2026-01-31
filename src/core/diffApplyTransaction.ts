/**
 * Diff Apply Transaction - 原子性事务模型
 * 
 * 目标：
 * - 实现真正的可回滚事务（不是 try/catch）
 * - 支持 tmp → bak → replace 流程
 * - 引入 fsync 与 hash 校验
 * - 支持 DIRTY TRANSACTION 状态检测
 * 
 * 原则：
 * - Apply ≠ Commit
 * - 失败自动回滚
 * - 多文件原子性保证
 */

import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';

/**
 * 事务状态
 */
export enum TransactionState {
  /** 未开始 */
  IDLE = 'idle',
  /** 已开始，未提交 */
  ACTIVE = 'active',
  /** 已提交 */
  COMMITTED = 'committed',
  /** 已回滚 */
  ROLLED_BACK = 'rolled_back',
  /** 脏状态：部分失败，需要手动清理 */
  DIRTY = 'dirty'
}

/**
 * 文件操作类型
 */
export enum FileOperationType {
  /** 写入新文件 */
  WRITE = 'write',
  /** 替换文件 */
  REPLACE = 'replace',
  /** 删除文件 */
  DELETE = 'delete'
}

/**
 * 文件操作记录
 */
export interface FileOperation {
  /** 操作类型 */
  type: FileOperationType;
  
  /** 文件路径 */
  filePath: string;
  
  /** 原始内容（用于回滚） */
  originalContent?: string;
  
  /** 新内容（用于提交） */
  newContent?: string;
  
  /** 原始文件 hash */
  originalHash?: string;
  
  /** 新文件 hash */
  newHash?: string;
  
  /** 操作是否成功 */
  success?: boolean;
  
  /** 错误信息 */
  error?: string;
}

/**
 * 事务选项
 */
export interface TransactionOptions {
  /** 是否使用临时文件（默认 true） */
  useTempFile?: boolean;
  
  /** 是否使用备份文件（默认 true） */
  useBackupFile?: boolean;
  
  /** 是否进行 hash 校验（默认 true） */
  useHashValidation?: boolean;
  
  /** 是否执行 fsync（默认 true） */
  useFsync?: boolean;
  
  /** 临时文件后缀（默认 .tmp） */
  tempFileSuffix?: string;
  
  /** 备份文件后缀（默认 .bak） */
  backupFileSuffix?: string;
}

/**
 * 默认选项
 */
const DEFAULT_OPTIONS: TransactionOptions = {
  useTempFile: true,
  useBackupFile: true,
  useHashValidation: true,
  useFsync: true,
  tempFileSuffix: '.tmp',
  backupFileSuffix: '.bak'
};

/**
 * Diff Apply Transaction
 * 
 * 实现真正的原子性事务，支持：
 * - 多文件操作
 * - 自动回滚
 * - 状态管理
 * - 脏状态检测
 */
export class DiffApplyTransaction {
  /** 事务 ID */
  readonly transactionId: string;
  
  /** 事务状态 */
  private state: TransactionState = TransactionState.IDLE;
  
  /** 文件操作记录 */
  private operations: FileOperation[] = [];
  
  /** 原始文件内容缓存（用于回滚） */
  private originalContents = new Map<string, string>();
  
  /** 选项 */
  private readonly options: TransactionOptions;
  
  /** 工作区根目录 */
  private readonly workspaceRoot: string;

  constructor(options: TransactionOptions = {}) {
    this.transactionId = crypto.randomBytes(16).toString('hex');
    this.options = { ...DEFAULT_OPTIONS, ...options };
    
    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    this.workspaceRoot = workspaceFolder?.uri.fsPath || '';
    
    console.log(`[DiffApplyTransaction] Created transaction ${this.transactionId}`);
  }

  /**
   * 开始事务
   */
  begin(): void {
    if (this.state !== TransactionState.IDLE) {
      throw new Error(`Cannot begin transaction: state is ${this.state}`);
    }

    this.state = TransactionState.ACTIVE;
    console.log(`[DiffApplyTransaction ${this.transactionId}] Transaction started`);
  }

  /**
   * 应用文件内容
   * 
   * 流程：
   * 1. 读取原始内容
   * 2. 计算 hash
   * 3. 写入临时文件
   * 4. 备份原始文件
   * 5. 替换原文件
   * 6. 验证 hash
   */
  async apply(filePath: string, newContent: string): Promise<void> {
    if (this.state !== TransactionState.ACTIVE) {
      throw new Error(`Cannot apply file: transaction state is ${this.state}`);
    }

    const operation: FileOperation = {
      type: FileOperationType.REPLACE,
      filePath,
      newContent
    };

    try {
      // 1. 读取原始内容
      const originalContent = await this.readFile(filePath);
      operation.originalContent = originalContent;
      operation.originalHash = this.calculateHash(originalContent);
      operation.newHash = this.calculateHash(newContent);

      // 缓存原始内容（用于回滚）
      this.originalContents.set(filePath, originalContent);

      // 2. 如果启用了临时文件
      if (this.options.useTempFile) {
        const tempFilePath = filePath + (this.options.tempFileSuffix || '.tmp');
        await this.writeFile(tempFilePath, newContent);
        
        // 3. 如果启用了备份文件
        if (this.options.useBackupFile) {
          const backupFilePath = filePath + (this.options.backupFileSuffix || '.bak');
          await this.writeFile(backupFilePath, originalContent);
        }
        
        // 4. 替换原文件
        await this.replaceFile(tempFilePath, filePath);
      } else {
        // 直接写入
        await this.writeFile(filePath, newContent);
      }

      // 5. 验证 hash（如果启用）
      if (this.options.useHashValidation) {
        const actualContent = await this.readFile(filePath);
        const actualHash = this.calculateHash(actualContent);
        
        if (actualHash !== operation.newHash) {
          throw new Error(
            `Hash validation failed for ${filePath}: expected ${operation.newHash}, got ${actualHash}`
          );
        }
      }

      operation.success = true;
      this.operations.push(operation);

      console.log(`[DiffApplyTransaction ${this.transactionId}] Applied ${filePath}`);
    } catch (error) {
      operation.success = false;
      operation.error = error instanceof Error ? error.message : String(error);
      this.operations.push(operation);

      console.error(`[DiffApplyTransaction ${this.transactionId}] Failed to apply ${filePath}:`, error);
      throw error;
    }
  }

  /**
   * 提交事务
   * 
   * 清理临时文件和备份文件
   */
  async commit(): Promise<void> {
    if (this.state !== TransactionState.ACTIVE) {
      throw new Error(`Cannot commit transaction: state is ${this.state}`);
    }

    try {
      // 清理临时文件和备份文件
      for (const operation of this.operations) {
        if (!operation.success) continue;

        const tempFilePath = operation.filePath + (this.options.tempFileSuffix || '.tmp');
        const backupFilePath = operation.filePath + (this.options.backupFileSuffix || '.bak');

        // 删除临时文件
        if (this.options.useTempFile && await this.fileExists(tempFilePath)) {
          await this.deleteFile(tempFilePath);
        }

        // 删除备份文件
        if (this.options.useBackupFile && await this.fileExists(backupFilePath)) {
          await this.deleteFile(backupFilePath);
        }
      }

      this.state = TransactionState.COMMITTED;
      this.originalContents.clear();

      console.log(`[DiffApplyTransaction ${this.transactionId}] Transaction committed`);
    } catch (error) {
      console.error(`[DiffApplyTransaction ${this.transactionId}] Failed to commit:`, error);
      this.state = TransactionState.DIRTY;
      throw error;
    }
  }

  /**
   * 回滚事务
   * 
   * 恢复所有文件到原始状态
   */
  async rollback(): Promise<void> {
    if (this.state !== TransactionState.ACTIVE && this.state !== TransactionState.DIRTY) {
      throw new Error(`Cannot rollback transaction: state is ${this.state}`);
    }

    console.log(`[DiffApplyTransaction ${this.transactionId}] Rolling back transaction`);

    const rollbackErrors: Error[] = [];

    try {
      // 按相反顺序回滚
      for (const operation of [...this.operations].reverse()) {
        if (!operation.success || !operation.originalContent) continue;

        try {
          // 写入原始内容
          await this.writeFile(operation.filePath, operation.originalContent);

          // 验证 hash
          if (this.options.useHashValidation) {
            const actualContent = await this.readFile(operation.filePath);
            const actualHash = this.calculateHash(actualContent);
            const expectedHash = this.calculateHash(operation.originalContent);

            if (actualHash !== expectedHash) {
              throw new Error(
                `Rollback hash validation failed for ${operation.filePath}: expected ${expectedHash}, got ${actualHash}`
              );
            }
          }

          // 清理临时文件和备份文件
          if (this.options.useTempFile) {
            const tempFilePath = operation.filePath + (this.options.tempFileSuffix || '.tmp');
            if (await this.fileExists(tempFilePath)) {
              await this.deleteFile(tempFilePath);
            }
          }

          if (this.options.useBackupFile) {
            const backupFilePath = operation.filePath + (this.options.backupFileSuffix || '.bak');
            if (await this.fileExists(backupFilePath)) {
              await this.deleteFile(backupFilePath);
            }
          }
        } catch (error) {
          rollbackErrors.push(error instanceof Error ? error : new Error(String(error)));
        }
      }

      this.state = TransactionState.ROLLED_BACK;
      this.originalContents.clear();

      console.log(`[DiffApplyTransaction ${this.transactionId}] Transaction rolled back`);

      // 如果有回滚错误，抛出警告
      if (rollbackErrors.length > 0) {
        console.warn(
          `[DiffApplyTransaction ${this.transactionId}] Rollback completed with ${rollbackErrors.length} errors:`,
          rollbackErrors
        );
      }
    } catch (error) {
      console.error(`[DiffApplyTransaction ${this.transactionId}] Failed to rollback:`, error);
      this.state = TransactionState.DIRTY;
      throw error;
    }
  }

  /**
   * 获取事务状态
   */
  getState(): TransactionState {
    return this.state;
  }

  /**
   * 获取事务 ID
   */
  getTransactionId(): string {
    return this.transactionId;
  }

  /**
   * 获取所有操作记录
   */
  getOperations(): FileOperation[] {
    return [...this.operations];
  }

  /**
   * 检查是否处于脏状态
   */
  isDirty(): boolean {
    return this.state === TransactionState.DIRTY;
  }

  /**
   * 获取已修改的文件列表
   */
  getModifiedFiles(): string[] {
    return this.operations
      .filter(op => op.success)
      .map(op => op.filePath);
  }

  /**
   * 读取文件
   */
  private async readFile(filePath: string): Promise<string> {
    const fullPath = this.resolveFullPath(filePath);
    return fs.promises.readFile(fullPath, 'utf8');
  }

  /**
   * 写入文件
   */
  private async writeFile(filePath: string, content: string): Promise<void> {
    const fullPath = this.resolveFullPath(filePath);
    
    // 确保目录存在
    const dir = path.dirname(fullPath);
    await fs.promises.mkdir(dir, { recursive: true });

    // 写入文件
    await fs.promises.writeFile(fullPath, content, 'utf8');

    // 如果启用了 fsync
    if (this.options.useFsync) {
      const handle = await fs.promises.open(fullPath, 'r');
      try {
        await handle.sync();
      } finally {
        await handle.close();
      }
    }
  }

  /**
   * 替换文件（原子性操作）
   */
  private async replaceFile(tempPath: string, targetPath: string): Promise<void> {
    const fullTempPath = this.resolveFullPath(tempPath);
    const fullTargetPath = this.resolveFullPath(targetPath);

    // 在某些系统上，重命名是原子操作
    await fs.promises.rename(fullTempPath, fullTargetPath);
  }

  /**
   * 删除文件
   */
  private async deleteFile(filePath: string): Promise<void> {
    const fullPath = this.resolveFullPath(filePath);
    await fs.promises.unlink(fullPath);
  }

  /**
   * 检查文件是否存在
   */
  private async fileExists(filePath: string): Promise<boolean> {
    const fullPath = this.resolveFullPath(filePath);
    try {
      await fs.promises.access(fullPath);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * 计算 hash
   */
  private calculateHash(content: string): string {
    return crypto.createHash('sha256').update(content).digest('hex');
  }

  /**
   * 解析完整路径
   */
  private resolveFullPath(filePath: string): string {
    if (path.isAbsolute(filePath)) {
      return filePath;
    }

    return path.join(this.workspaceRoot, filePath);
  }
}

/**
 * 快捷函数：创建事务
 */
export function createTransaction(options?: TransactionOptions): DiffApplyTransaction {
  return new DiffApplyTransaction(options);
}

/**
 * 快捷函数：执行事务（自动回滚）
 */
export async function executeTransaction<T>(
  callback: (tx: DiffApplyTransaction) => Promise<T>,
  options?: TransactionOptions
): Promise<T> {
  const tx = new DiffApplyTransaction(options);

  tx.begin();

  try {
    const result = await callback(tx);
    await tx.commit();
    return result;
  } catch (error) {
    await tx.rollback();
    throw error;
  }
}