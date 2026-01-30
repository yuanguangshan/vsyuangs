# Features Integration Guide
## AI Git Review & Commit System - Complete Feature Set

本文档说明了 v1.2 版本新增的三大核心功能及其集成方式。

---

## 📋 目录

1. [功能概览](#功能概览)
2. [Review JSON Schema v1](#review-json-schema-v1)
3. [安全验证层](#安全验证层)
4. [Diagnostics Provider](#diagnostics-provider)
5. [智能 Stage 建议](#智能-stage-建议)
6. [自动化测试扫描](#自动化测试扫描)
7. [完整工作流](#完整工作流)
8. [使用示例](#使用示例)

---

## 功能概览

v1.2 版本实现了三个核心功能，共同构成了完整的 AI Git Review/Commit 工作流：

### 🎯 三大核心功能

1. **智能 Stage 建议** (Smart Stage Suggestions)
   - 分析暂存区文件变更
   - 按逻辑分组（UI、逻辑、文档、测试等）
   - 提供 Commit 消息建议

2. **审查结果的编辑器内标注** (Diagnostics)
   - 将 AI Review 结果转换为 VS Code Diagnostics
   - 在编辑器中直接显示审查建议（波浪线）
   - 提供 Quick Fix（快速修复）

3. **自动化测试扫描** (Automated Test Scanning)
   - AI 生成代码后自动运行静态扫描
   - 执行恶意 Diff 防御测试
   - 提供安全检查报告

### 🔒 安全基础

所有功能都建立在以下安全基础上：

- **Review JSON Schema v1** - 结构化、可验证的 Review 结果
- **Diff Security Validator** - 恶意 Diff 防御层
- **Schema Validation** - 确保 Review 结果符合规范

---

## Review JSON Schema v1

### 设计目标

- ✅ 人类可读（调试、日志）
- ✅ 机器可执行（Diagnostics / CodeAction）
- ✅ 安全可审计（Malicious Diff Defense）
- ✅ 向前兼容 v2 / v3

### 核心类型

#### ReviewResultV1

```typescript
interface ReviewResultV1 {
  schemaVersion: "1.0";
  meta: {
    model: string;
    generatedAt: string;
    reviewType: "commit" | "diff" | "file";
  };
  summary: {
    riskLevel: "low" | "medium" | "high";
    issueCount: number;
    suggestionCount: number;
  };
  issues: ReviewIssue[];
  suggestions?: ReviewSuggestion[];
}
```

#### ReviewIssue

用于 Diagnostics 的核心数据结构：

```typescript
interface ReviewIssue {
  id: string;
  type: "bug" | "security" | "performance" | "style" | "logic" | "best_practice";
  severity: "info" | "warning" | "error";
  message: string;
  location?: {
    filePath: string;
    range?: {
      startLine: number;
      startChar?: number;
      endLine: number;
      endChar?: number;
    };
  };
  explanation?: string;
  confidence?: number;
  codeSnippet?: string;
}
```

#### ReviewSuggestion

用于 CodeAction 的数据结构：

```typescript
interface ReviewSuggestion {
  id: string;
  title: string;
  description?: string;
  appliesTo?: {
    filePath: string;
    range?: {
      startLine: number;
      endLine: number;
    };
  };
  diff?: {
    type: "unified";
    content: string;
  };
  safety: {
    risk: "low" | "medium" | "high";
    requiresConfirmation?: boolean;
  };
}
```

### 验证器

```typescript
import { ReviewSchemaValidator } from '../core/reviewSchema';

// 验证 Review 结果
const validation = ReviewSchemaValidator.validate(reviewResult);
if (!validation.valid) {
  console.error('Invalid review result:', validation.errors);
}
```

---

## 安全验证层

### 功能

- 🔒 防止路径穿越攻击（`../`）
- 🔒 防止绝对路径攻击（`/etc/`、`C:\Windows\`）
- 🔒 防止大文件 DoS 攻击
- 🔒 防止上下文模糊攻击
- 🔒 防止 Hunk Header 伪造

### 使用方式

#### 基础验证

```typescript
import { DiffSecurityValidator, validateDiffSecurity } from '../core/diffSecurityValidator';
import { DiffParser } from '../core/diff';

// 方式 1: 使用默认限制
const diff = DiffParser.parse(diffText);
const validation = validateDiffSecurity(diff);

if (!validation.valid) {
  console.error('Security validation failed:', validation.errors);
}

// 方式 2: 自定义限制
const validator = new DiffSecurityValidator({
  maxLineLength: 8192,        // 8KB
  maxContextLines: 100,        // 100 行
  maxFilesPerDiff: 10,         // 10 个文件
  allowedExtensions: ['ts', 'js'] // 只允许 TS/JS
});

const validation = validator.validate(diff);
```

#### 安全检查结果

```typescript
interface SecurityValidationResult {
  valid: boolean;
  errors: SecurityValidationError[];
}

interface SecurityValidationError {
  type: 
    | 'PATH_TRAVERSAL' 
    | 'ABSOLUTE_PATH' 
    | 'LINE_TOO_LONG' 
    | 'CONTEXT_TOO_LARGE' 
    | 'HUNK_TOO_LARGE' 
    | 'TOO_MANY_HUNKS' 
    | 'TOO_MANY_FILES' 
    | 'EXTENSION_NOT_ALLOWED'
    | 'FORBIDDEN_PATH_PATTERN'
    | 'HUNK_HEADER_FORGERY'
    | 'INVALID_UNIFIED_DIFF';
  
  message: string;
  filePath?: string;
  hunkIndex?: number;
  line?: number;
  actual?: number;
  max?: number;
}
```

---

## Diagnostics Provider

### 功能

- 📝 将 AI Review 结果转换为 VS Code Diagnostics
- 📊 在编辑器中直接显示审查建议（波浪线）
- 🔧 提供 CodeAction（快速修复）
- 🎨 根据严重程度显示不同颜色的波浪线
- 💡 显示详细解释和修复建议

### 使用方式

#### 初始化

```typescript
import { ReviewDiagnosticsProvider, registerReviewCommands } from '../vscode/provider/ReviewDiagnosticsProvider';

const diagnosticsProvider = new ReviewDiagnosticsProvider();

// 注册命令
registerReviewCommands(diagnosticsProvider, context);
```

#### 更新 Diagnostics

```typescript
// 从 AI Review 结果更新
diagnosticsProvider.updateDiagnostics(reviewResult);

// 显示摘要
diagnosticsProvider.showReviewSummary(reviewResult);
```

#### 应用修复建议

```typescript
// 通过 Code Action 自动调用
await diagnosticsProvider.applySuggestion(suggestion);

// 手动调用
const success = await diagnosticsProvider.applySuggestion(suggestion);
if (success) {
  console.log('Suggestion applied successfully');
}
```

#### 清除 Diagnostics

```typescript
diagnosticsProvider.clear();
```

### CodeAction 工作流

1. 用户点击波浪线
2. 显示 Quick Fix 列表
3. 用户选择修复建议
4. 自动进行安全验证
5. 应用 Diff（如果通过验证）

---

## 智能 Stage 建议

### 功能

- 📦 分析暂存区文件变更
- 🗂️ 按逻辑分组（UI、逻辑、文档、测试、配置）
- 📝 提供 Commit 消息建议
- 💡 显示分组理由和详细视图

### 文件分类规则

| 类型 | 扩展名/路径 | 示例 |
|------|-------------|------|
| UI | `.css`, `.html`, `.vue`, `.png` | `components/`, `styles/` |
| Logic | `.ts`, `.js`, `.go`, `.java` | `src/`, `lib/` |
| Docs | `.md`, `.txt` | `docs/`, `README` |
| Test | `.test.ts`, `.spec.ts` | `test/`, `tests/` |
| Config | `.json`, `.yaml`, `.env` | `config/`, `package.json` |
| Other | 其他 | 其他文件 |

### 使用方式

#### 分析暂存区

```typescript
import { SmartStageSuggester } from '../vscode/git/SmartStageSuggester';

// 分析并生成分组建议
const suggestion = await SmartStageSuggester.analyzeStagedFiles();

if (suggestion) {
  console.log('Groups:', suggestion.groups);
  console.log('Rationale:', suggestion.rationale);
  console.log('Commit messages:', suggestion.commitMessages);
}
```

#### 显示建议

```typescript
// 显示简化的建议
await SmartStageSuggester.showGroupingSuggestion(suggestion);
```

#### 分组建议结构

```typescript
interface GroupingSuggestion {
  groups: FileGroup[];
  rationale: string;
  commitMessages: Array<{
    groupId: string;
    message: {
      title: string;
      body?: string;
      type?: "feat" | "fix" | "docs" | "style" | "refactor" | "test" | "chore";
    };
  }>;
}

interface FileGroup {
  id: string;
  name: string;
  type: "ui" | "logic" | "docs" | "test" | "config" | "other";
  files: string[];
  stats: {
    added: number;
    removed: number;
    context: number;
  };
}
```

---

## 自动化测试扫描

### 功能

- 🛡️ 在 AI 生成代码后自动运行静态扫描
- 🔍 执行恶意 Diff 防御测试
- 📊 提供安全检查报告
- 📝 生成修复建议

### 扫描类型

1. **Security Scan** - 安全检查（默认）
   - 路径穿越检测
   - 绝对路径检测
   - Hunk Header 伪造检测
   - 文件扩展名验证

2. **Quality Scan** - 质量检查
   - 文件大小检查
   - Hunk 复杂度检查
   - 代码行数统计

3. **Full Scan** - 完整扫描
   - 安全 + 质量检查

### 使用方式

#### 初始化

```typescript
import { getScanner, disposeScanner } from '../core/AutomatedTestScanner';

// 获取全局扫描器实例
const scanner = getScanner();

// 使用后清理
// disposeScanner();
```

#### 扫描 AI 生成的代码

```typescript
// 扫描 Diff 文本
const result = await scanner.scanGeneratedCode(diffText, {
  scanType: 'security',  // 'security' | 'quality' | 'full'
  runTests: false         // 是否运行恶意 Diff 防御测试
});

// 检查结果
if (result.passed) {
  console.log('Scan passed!');
} else {
  console.log('Issues found:', result.recommendations);
}
```

#### 扫描 Review 建议

```typescript
// 扫描单个 Review 建议中的 Diff
const result = await scanner.scanReviewSuggestion(suggestion);
```

#### 扫描结果结构

```typescript
interface ScanResult {
  passed: boolean;
  timestamp: Date;
  scanType: 'security' | 'quality' | 'full';
  securityCheck: SecurityCheckResult;
  qualityCheck?: QualityCheckResult;
  recommendations: string[];
}

interface SecurityCheckResult {
  passed: boolean;
  parseResult: {
    success: boolean;
    fileCount: number;
    hunkCount: number;
  };
  validationResult: SecurityValidationResult;
  securityIssues: SecurityIssue[];
}
```

---

## 完整工作流

### 场景 1: Git Review with Smart Stage

```typescript
// 1. 获取暂存区 Diff
const diffText = await GitManager.getStagedDiff();

// 2. AI Review（返回 ReviewResultV1）
const reviewResult = await aiReview(diffText);

// 3. 验证 Review 结果
const validation = ReviewSchemaValidator.validate(reviewResult);
if (!validation.valid) {
  throw new Error('Invalid review result');
}

// 4. 更新 Diagnostics
diagnosticsProvider.updateDiagnostics(reviewResult);

// 5. 显示摘要
diagnosticsProvider.showReviewSummary(reviewResult);
```

### 场景 2: Apply Suggestion with Security Check

```typescript
// 1. 用户点击 CodeAction
const action = userSelectedAction;

// 2. 获取建议
const suggestion = action.suggestion;

// 3. 扫描建议中的 Diff
const scanResult = await scanner.scanReviewSuggestion(suggestion);

// 4. 如果通过扫描，应用建议
if (scanResult.passed) {
  const success = await diagnosticsProvider.applySuggestion(suggestion);
  if (success) {
    console.log('Suggestion applied successfully');
  }
} else {
  vscode.window.showErrorMessage('Suggestion failed security check');
}
```

### 场景 3: Smart Stage Suggestion

```typescript
// 1. 用户准备 Commit
// 2. 触发智能 Stage 建议
const suggestion = await SmartStageSuggester.analyzeStagedFiles();

if (suggestion && suggestion.groups.length > 1) {
  // 3. 显示建议
  await SmartStageSuggester.showGroupingSuggestion(suggestion);
  
  // 4. 用户可以选择：
  //    - 查看详细分组
  //    - 应用建议（分多次 commit）
  //    - 忽略建议（一次性 commit）
} else {
  // 只有一个分组，直接 commit
  await commit();
}
```

---

## 使用示例

### 示例 1: 完整的 Review 工作流

```typescript
import { GitManager } from '../vscode/git/GitManager';
import { ReviewDiagnosticsProvider } from '../vscode/provider/ReviewDiagnosticsProvider';
import { SmartStageSuggester } from '../vscode/git/SmartStageSuggester';
import { getScanner } from '../core/AutomatedTestScanner';

class GitReviewWorkflow {
  constructor(
    private diagnostics: ReviewDiagnosticsProvider,
    private scanner = getScanner()
  ) {}

  async reviewStagedChanges() {
    // 1. 获取暂存区 Diff
    const diffText = await GitManager.getStagedDiff();
    if (!diffText) {
      vscode.window.showInformationMessage('No staged changes found');
      return;
    }

    // 2. AI Review（需要实现）
    const reviewResult = await this.performAIReview(diffText);

    // 3. 验证 Schema
    const validation = ReviewSchemaValidator.validate(reviewResult);
    if (!validation.valid) {
      vscode.window.showErrorMessage(
        `Invalid review result: ${validation.errors.join(', ')}`
      );
      return;
    }

    // 4. 更新 Diagnostics
    this.diagnostics.updateDiagnostics(reviewResult);
    this.diagnostics.showReviewSummary(reviewResult);
  }

  async suggestSmartStaging() {
    // 1. 分析暂存区
    const suggestion = await SmartStageSuggester.analyzeStagedFiles();
    
    if (!suggestion) {
      vscode.window.showInformationMessage('No staged changes found');
      return;
    }

    // 2. 显示建议
    await SmartStageSuggester.showGroupingSuggestion(suggestion);
  }

  private async performAIReview(diffText: string): Promise<ReviewResultV1> {
    // TODO: 集成实际的 AI Review 逻辑
    // 这里返回一个示例 ReviewResultV1
    
    return {
      schemaVersion: "1.0",
      meta: {
        model: "gpt-4",
        generatedAt: new Date().toISOString(),
        reviewType: "commit"
      },
      summary: {
        riskLevel: "low",
        issueCount: 0,
        suggestionCount: 1
      },
      issues: [],
      suggestions: []
    };
  }
}
```

### 示例 2: 安全的 Diff 应用

```typescript
async function applyDiffSafely(diffText: string) {
  // 1. 解析 Diff
  const parseResult = DiffParser.parse(diffText);
  if (!parseResult.success) {
    throw new Error(`Failed to parse diff: ${parseResult.error}`);
  }

  // 2. 安全验证
  const securityCheck = validateDiffSecurity(parseResult);
  if (!securityCheck.valid) {
    const errors = securityCheck.errors.map(e => e.message).join('\n');
    throw new Error(`Security check failed:\n${errors}`);
  }

  // 3. 质量检查（可选）
  const scanner = getScanner();
  const scanResult = await scanner.scanGeneratedCode(diffText, {
    scanType: 'security',
    runTests: false
  });

  if (!scanResult.passed) {
    throw new Error(`Scan failed:\n${scanResult.recommendations.join('\n')}`);
  }

  // 4. 应用 Diff
  const applyResult = await DiffApplier.apply(parseResult);
  if (!applyResult.success) {
    throw new Error(`Failed to apply diff: ${applyResult.message}`);
  }

  return applyResult;
}
```

---

## 最佳实践

### 1. 始终进行安全验证

```typescript
// ❌ 不安全
const result = await DiffApplier.apply(diff);

// ✅ 安全
const securityCheck = validateDiffSecurity(diff);
if (!securityCheck.valid) {
  // 处理安全错误
  return;
}
const result = await DiffApplier.apply(diff);
```

### 2. 验证 Review 结果

```typescript
const validation = ReviewSchemaValidator.validate(reviewResult);
if (!validation.valid) {
  console.error('Invalid review:', validation.errors);
  return;
}
```

### 3. 使用智能 Stage 建议

```typescript
// 在 commit 前检查是否需要分批
const suggestion = await SmartStageSuggester.analyzeStagedFiles();
if (suggestion.groups.length > 1) {
  // 显示建议给用户
  await SmartStageSuggester.showGroupingSuggestion(suggestion);
}
```

### 4. 集成自动化扫描

```typescript
// AI 生成代码后自动扫描
const result = await scanner.scanGeneratedCode(generatedDiff, {
  scanType: 'full',
  runTests: true
});
```

---

## 配置选项

### 安全限制配置

```typescript
import { DEFAULT_SECURITY_LIMITS } from '../core/diffSecurityValidator';

// 自定义限制
const customLimits = {
  ...DEFAULT_SECURITY_LIMITS,
  maxLineLength: 8192,        // 8KB
  maxContextLines: 100,        // 100 行
  maxFilesPerDiff: 10,         // 10 个文件
  allowedExtensions: ['ts', 'js'] // 只允许 TS/JS
};

const validator = new DiffSecurityValidator(customLimits);
```

### 扫描配置

```typescript
// 安全扫描（快速）
await scanner.scanGeneratedCode(diffText, {
  scanType: 'security',
  runTests: false
});

// 完整扫描（慢）
await scanner.scanGeneratedCode(diffText, {
  scanType: 'full',
  runTests: true
});
```

---

## 故障排查

### 问题：Diagnostics 不显示

**解决方案：**
1. 确认 `updateDiagnostics` 被调用
2. 检查 `ReviewIssue.location` 是否包含有效的文件路径
3. 查看 VS Code Output 面板的错误信息

### 问题：CodeAction 不显示

**解决方案：**
1. 确认 CodeActionProvider 已注册
2. 检查建议是否包含有效的 `diff` 内容
3. 确认命令 `vsyuangs.applyReviewSuggestion` 已注册

### 问题：Smart Stage 建议不准确

**解决方案：**
1. 检查文件分类规则是否适合项目
2. 调整 `FILE_TYPE_RULES` 配置
3. 提供反馈以改进算法

### 问题：安全扫描失败

**解决方案：**
1. 查看详细错误信息
2. 检查安全限制配置
3. 根据建议修复 Diff

---

## 总结

v1.2 版本通过以下三大功能，构建了完整的 AI Git Review/Commit 工作流：

1. **智能 Stage 建议** - 让 Git 提交记录像艺术品一样整洁
2. **审查结果的编辑器内标注** - 不需要看侧边栏，直接在代码行旁边看到 AI 提示
3. **自动化测试扫描** - AI 生成代码后，自动运行一套基础的静态扫描

所有功能都建立在坚实的**安全基础**之上，确保 AI 生成的代码安全可靠。

---

## 下一步

- [ ] 集成实际的 AI Review 逻辑
- [ ] 添加用户配置选项
- [ ] 实现更复杂的文件分类算法
- [ ] 添加更多的质量检查指标
- [ ] 支持自定义安全策略
- [ ] 添加性能优化（增量扫描）