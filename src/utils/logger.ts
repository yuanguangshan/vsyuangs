import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3
}

export interface LoggerConfig {
    level: LogLevel;
    outputToConsole: boolean;
    outputToFile: boolean;
    outputToUI?: boolean;
    uiCallbacks?: ((message: string) => void)[];
    logFilePath?: string;
    maxFileSize?: number; // in bytes
}

export class Logger {
    private config: LoggerConfig;
    private logStream?: fs.WriteStream;
    private context: vscode.ExtensionContext;

    constructor(context: vscode.ExtensionContext, config?: Partial<LoggerConfig>) {
        this.context = context;
        this.config = {
            level: LogLevel.INFO,
            outputToConsole: true,
            outputToFile: true,
            outputToUI: false,
            uiCallbacks: [],
            maxFileSize: 10 * 1024 * 1024, // 10MB
            ...config
        };

        if (this.config.outputToFile) {
            this.initializeLogFile();
        }
    }

    private initializeLogFile(): void {
        try {
            const logDir = path.join(this.context.logUri.fsPath, '..');
            if (!fs.existsSync(logDir)) {
                fs.mkdirSync(logDir, { recursive: true });
            }

            const logFilePath = this.config.logFilePath ||
                path.join(logDir, `yuangs-ai-${new Date().toISOString().split('T')[0]}.log`);

            this.config.logFilePath = logFilePath;

            // Check file size and rotate if necessary
            this.rotateLogFileIfNeeded();

            this.logStream = fs.createWriteStream(logFilePath, { flags: 'a' });

            this.log(LogLevel.INFO, 'Logger', 'Log file initialized', { logFilePath });
        } catch (error) {
            console.error('Failed to initialize log file:', error);
            this.config.outputToFile = false;
        }
    }

    private rotateLogFileIfNeeded(): void {
        if (!this.config.logFilePath || !this.config.maxFileSize) {
            return;
        }

        try {
            if (fs.existsSync(this.config.logFilePath)) {
                const stats = fs.statSync(this.config.logFilePath);
                if (stats.size >= this.config.maxFileSize) {
                    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
                    const rotatedPath = `${this.config.logFilePath}.${timestamp}`;
                    fs.renameSync(this.config.logFilePath, rotatedPath);

                    // 直接输出到console而不是通过logger，避免递归调用
                    console.log(`[INFO] [Logger] Log file rotated, oldFile: ${rotatedPath}, newFile: ${this.config.logFilePath}`);
                }
            }
        } catch (error) {
            console.error('Failed to rotate log file:', error);
        }
    }

    private formatLogMessage(
        level: LogLevel,
        component: string,
        message: string,
        data?: any
    ): string {
        const timestamp = new Date().toISOString();
        const levelStr = LogLevel[level];
        let dataStr = '';

        if (data) {
            try {
                // 使用安全的JSON.stringify，处理循环引用和大对象
                dataStr = ` ${this.safeStringify(data)}`;
            } catch (error: any) {
                dataStr = ` [Data serialization error: ${error?.message || 'unknown error'}]`;
            }
        }

        return `[${timestamp}] [${levelStr}] [${component}] ${message}${dataStr}`;
    }

    private safeStringify(obj: any): string {
        const seen = new WeakSet();
        return JSON.stringify(obj, (key, value) => {
            if (typeof value === 'object' && value !== null) {
                if (seen.has(value)) {
                    return '[Circular Reference]';
                }
                seen.add(value);
            }

            // 处理大对象，限制深度和大小
            if (typeof value === 'string' && value.length > 1000) {
                return value.substring(0, 1000) + '... [truncated]';
            }

            return value;
        });
    }

    private log(level: LogLevel, component: string, message: string, data?: any): void {
        if (level < this.config.level) {
            return;
        }

        const formattedMessage = this.formatLogMessage(level, component, message, data);

        // Output to console
        if (this.config.outputToConsole) {
            if (level >= LogLevel.ERROR) {
                console.error(formattedMessage);
            } else {
                console.log(formattedMessage);
            }
        }

        // Output to file
        if (this.config.outputToFile && this.logStream) {
            try {
                // 检查write是否成功，防止backpressure堆积
                const canWrite = this.logStream.write(formattedMessage + '\n');
                if (!canWrite) {
                    // 如果流缓冲区满了，等待drain事件
                    console.warn('[Logger] Log stream backpressure detected, dropping log entry');
                }
            } catch (error) {
                console.error('Failed to write to log file:', error);
            }
        }

        // Output to UI
        if (this.config.outputToUI && this.config.uiCallbacks && this.config.uiCallbacks.length > 0) {
            try {
                // 创建一个简化版本的UI友好消息
                const uiMessage = `[${LogLevel[level]}] ${component}: ${message}${data ? ' ' + this.safeStringify(data) : ''}`;

                // 调用所有注册的回调
                for (const callback of this.config.uiCallbacks) {
                    try {
                        callback(uiMessage);
                    } catch (callbackError) {
                        console.error('Failed to execute UI callback:', callbackError);
                    }
                }
            } catch (error) {
                console.error('Failed to send log to UI:', error);
            }
        }
    }

    // Public logging methods
    debug(component: string, message: string, data?: any): void {
        this.log(LogLevel.DEBUG, component, message, data);
    }

    info(component: string, message: string, data?: any): void {
        this.log(LogLevel.INFO, component, message, data);
    }

    warn(component: string, message: string, data?: any): void {
        this.log(LogLevel.WARN, component, message, data);
    }

    error(component: string, message: string, data?: any): void {
        this.log(LogLevel.ERROR, component, message, data);
    }

    // UI callback methods
    setUICallback(callback: (message: string) => void): void {
        if (!this.config.uiCallbacks) {
            this.config.uiCallbacks = [];
        }
        this.config.uiCallbacks.push(callback);
    }

    removeUICallback(callback: (message: string) => void): void {
        if (this.config.uiCallbacks) {
            const index = this.config.uiCallbacks.indexOf(callback);
            if (index !== -1) {
                this.config.uiCallbacks.splice(index, 1);
            }
        }
    }

    enableUIOutput(): void {
        this.config.outputToUI = true;
    }

    disableUIOutput(): void {
        this.config.outputToUI = false;
    }

    clearUICallbacks(): void {
        if (this.config.uiCallbacks) {
            this.config.uiCallbacks.length = 0;
        }
    }

    // Component-specific logger factory
    getComponentLogger(component: string): ComponentLogger {
        return new ComponentLogger(this, component);
    }

    dispose(): void {
        if (this.logStream) {
            try {
                this.logStream.end();
            } catch (error) {
                console.error('Failed to close log stream:', error);
            }
        }
    }
}

export class ComponentLogger {
    constructor(private logger: Logger, private component: string) { }

    debug(message: string, data?: any): void {
        this.logger.debug(this.component, message, data);
    }

    info(message: string, data?: any): void {
        this.logger.info(this.component, message, data);
    }

    warn(message: string, data?: any): void {
        this.logger.warn(this.component, message, data);
    }

    error(message: string, data?: any): void {
        this.logger.error(this.component, message, data);
    }
}

// Global logger instance
let globalLogger: Logger | null = null;

export function initializeLogger(context: vscode.ExtensionContext, config?: Partial<LoggerConfig>): Logger {
    if (globalLogger) {
        globalLogger.dispose();
    }

    globalLogger = new Logger(context, config);
    return globalLogger;
}

export function getLogger(): Logger {
    if (!globalLogger) {
        throw new Error('Logger not initialized. Call initializeLogger first.');
    }
    return globalLogger;
}

export function getComponentLogger(component: string): ComponentLogger {
    return getLogger().getComponentLogger(component);
}