# Integration Guide v1.2.1
## Four-Layer Validation Architecture

本文档说明了如何在 v1.2 基础上集成 v1.2.1 的四层验证架构。

---

## 📋 快速开始

### v1.2.1 的核心改进

v1.2.1 在原有的 v1.2 功能基础上，增加了**语义校验层**，形成了完整的四层验证架构：

```
Layer 1: Schema Validation (原有)
  └─ ReviewSchemaValidator.validate()
      检查：类型、格式、必填字段
      阻断：是

Layer 2: Semantic Validation (v1.2.1 新增) ⭐
  └─ SemanticReviewValidator.validate()
      检查：文件存在、range 合法、统计自洽
      阻断：是

Layer 3: Security Validation (原有，改进)
  └─ DiffSecurityValidator.validate()
      检查：路径、大小、伪造
      阻断：是

Layer 4: Automated Scanner (原有，明确职责)
  └─ AutomatedTestScanner.scan()
      检查：风险模式、质量指标
      阻断：否（建议层）
```

---

## 🔧 快速集成

### 最小改动方案

如果你已经在使用 v1.2 的功能，只需要在 Schema 验证之后添加语义校验：

```typescript
import { ReviewSchemaValidator } from '../core/reviewSchema';
import { SemanticReviewValidator } from '../core/semanticReviewValidator'; // v1.2.1 新增

// 你现有的代码
const reviewResult = await performAIReview(diffText);

// 原有的 Schema 验证
const schemaValidation = ReviewSchemaValidator.validate(reviewResult);
if (!schemaValidation.valid) {
  throw new Error('Schema validation failed');
}

// ✨ 新增：语义校验（v1.2.1）
const semanticValidation = await SemanticReviewValidator.validate(reviewResult);
if (!semanticValidation.valid) {
  throw new Error('Semantic validation failed');
}

// 显示警告（可选）
if (semanticValidation.warnings.length > 0) {
  console.warn('Semantic warnings:', semanticValidation.warnings);
}

// 继续原有的安全验证、扫描等...
```

---

## 📊 完整的集成示例

### 完整的 Git Review 工作流（v1.2.1）

```typescript
import * as vscode from 'vscode';
import { GitManager } from '../vscode/git/GitManager';
import { ReviewDiagnosticsProvider } from '../vscode/provider/ReviewDiagnosticsProvider';
import { SmartStageSuggester } from '../vscode/git/SmartStageSuggester';
import { getScanner } from '../core/AutomatedTestScanner';
import { ReviewSchemaValidator } from '../core/reviewSchema';
import { SemanticReviewValidator } from '../core/semanticReviewValidator'; // v1.2.1
import { DiffParser } from '../core/diff';
import { validateDiffSecurity } from '../core/diffSecurityValidator';

class GitReviewWorkflow {
  private diagnostics: ReviewDiagnosticsProvider;
  private scanner = getScanner();

  constructor(diagnostics: ReviewDiagnosticsProvider) {
    this.diagnostics = diagnostics;
  }

  /**
   * 完整的 Review 工作流（四层验证）
   */
  async reviewStagedChanges(): Promise<void> {
    try {
      // 1. 获取暂存区 Diff
      const diffText = await GitManager.getStagedDiff();
      if (!diffText) {
        vscode.window.showInformationMessage('No staged changes found');
        return;
      }

      // 2. AI Review
      const reviewResult = await this.performAIReview(diffText);

      // 3. Layer 1: Schema 校验
      const schemaValidation = ReviewSchemaValidator.validate(reviewResult);
      if (!schemaValidation.valid) {
        vscode.window.showErrorMessage(
          `Schema validation failed: ${schemaValidation.errors.join(', ')}`
        );
        return;
      }

      // 4. Layer 2: 语义校验（v1.2.1 新增）⭐
      const semanticValidation = await SemanticReviewValidator.validate(reviewResult);
      if (!semanticValidation.valid) {
        const errors = semanticValidation.semanticErrors
          .map(e => e.message)
          .join('\n');
        vscode.window.showErrorMessage(`Semantic validation failed:\n${errors}`);
        return;
      }

      // 显示语义警告（可选）
      if (semanticValidation.warnings.length > 0) {
        const warnings = semanticValidation.warnings
          .map(w => w.message)
          .join('\n');
        console.warn('Semantic warnings:\n', warnings);
        // 可以选择显示给用户
        vscode.window.showWarningMessage(
          `Semantic validation passed with ${semanticValidation.warnings.length} warning(s)`,
          'View Details'
        ).then(selection => {
          if (selection === 'View Details') {
            vscode.window.showInformationMessage(warnings);
          }
        });
      }

      // 5. Layer 3: 安全验证
      const parseResult = DiffParser.parse(diffText);
      const securityValidation = validateDiffSecurity(parseResult);
      if (!securityValidation.valid) {
        const errors = securityValidation.errors
          .map(e => e.message)
          .join('\n');
        vscode.window.showErrorMessage(`Security validation failed:\n${errors}`);
        return;
      }

      // 6. Layer 4: 自动化扫描（建议层）
      const scanResult = await this.scanner.scanGeneratedCode(diffText, {
        scanType: 'full',
        runTests: false
      });

      // 处理扫描结果（警告，不阻断）
      if (!scanResult.passed) {
        const recommendations = scanResult.recommendations.join('\n');
        console.warn('Scan found issues:\n', recommendations);
        
        vscode.window.showWarningMessage(
          'Scan found issues. Check the Output Channel for details.',
          'View Details'
        ).then(selection => {
          if (selection === 'View Details') {
            // 显示详细扫描结果
            this.scanner.getOutputChannel().show(true);
          }
        });
      }

      // 7. 更新 Diagnostics
      this.diagnostics.updateDiagnostics(reviewResult);

      // 8. 显示摘要
      this.diagnostics.showReviewSummary(reviewResult);

    } catch (error) {
      vscode.window.showErrorMessage(`Review failed: ${error}`);
    }
  }

  /**
   * 应用修复建议（四层验证 + UX 改进）
   */
  async applySuggestion(suggestion: import('../core/reviewSchema').ReviewSuggestion): Promise<boolean> {
    try {
      // 1. 检查是否有 diff
      if (!suggestion.diff) {
        vscode.window.showWarningMessage('Suggestion does not contain a diff');
        return false;
      }

      // 2. Layer 3: 安全验证（必须通过）
      const parseResult = DiffParser.parse(suggestion.diff.content);
      const securityValidation = validateDiffSecurity(parseResult);
      if (!securityValidation.valid) {
        vscode.window.showErrorMessage(
          `Security validation failed: ${securityValidation.errors.map(e => e.message).join(', ')}`
        );
        return false;
      }

      // 3. Layer 4: 扫描建议（建议层）
      const scanResult = await this.scanner.scanReviewSuggestion(suggestion);
      if (!scanResult.passed) {
        const confirmed = await vscode.window.showWarningMessage(
          'Scan found issues. Apply anyway?',
          'Yes, Apply',
          'Cancel'
        );
        if (confirmed !== 'Yes, Apply') {
          return false;
        }
      }

      // 4. 高风险操作：强制预览（UX 改进）
      if (suggestion.safety.risk === 'high') {
        const previewConfirmed = await this.showDiffPreview(suggestion);
        if (!previewConfirmed) {
          return false;
        }
      }

      // 5. 应用 Diff
      const success = await this.diagnostics.applySuggestion(suggestion);
      
      if (success) {
        vscode.window.showInformationMessage('Suggestion applied successfully');
      }

      return success;

    } catch (error) {
      vscode.window.showErrorMessage(`Failed to apply suggestion: ${error}`);
      return false;
    }
  }

  /**
   * 智能建议工作流
   */
  async suggestSmartStaging(): Promise<void> {
    // 1. 分析暂存区
    const suggestion = await SmartStageSuggester.analyzeStagedFiles();
    
    if (!suggestion) {
      vscode.window.showInformationMessage('No staged changes found');
      return;
    }

    // 2. 显示建议
    await SmartStageSuggester.showGroupingSuggestion(suggestion);
  }

  /**
   * 执行 AI Review（占位符）
   */
  private async performAIReview(diffText: string): Promise<import('../core/reviewSchema').ReviewResultV1> {
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

  /**
   * 显示 Diff 预览（UX 改进）
   */
  private async showDiffPreview(suggestion: import('../core/reviewSchema').ReviewSuggestion): Promise<boolean> {
    const panel = vscode.window.createWebviewPanel(
      'diffPreview',
      'AI Generated Change Preview',
      vscode.ViewColumn.Beside,
      { enableScripts: false }
    );

    panel.webview.html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Diff Preview</title>
        <style>
          body {
            font-family: var(--vscode-font-family);
            padding: 20px;
            color: var(--vscode-foreground);
          }
          .warning {
            background: var(--vscode-editorWarning-foreground);
            border: 2px solid var(--vscode-editorWarning-border);
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 4px;
          }
          .ai-label {
            background: #007acc;
            color: white;
            padding: 4px 8px;
            border-radius: 3px;
            font-size: 12px;
            margin-right: 8px;
          }
          h1 { margin-bottom: 10px; }
          h2 { margin-top: 20px; margin-bottom: 10px; }
          p { margin-bottom: 10px; }
          pre {
            background: var(--vscode-textCodeBlock-background);
            padding: 15px;
            border-radius: 4px;
            overflow-x: auto;
            font-family: var(--vscode-editor-font-family);
            font-size: 13px;
          }
          .button-container {
            margin-top: 20px;
            text-align: right;
          }
        </style>
      </head>
      <body>
        <div class="warning">
          <h2>⚠️ High Risk Change</h2>
          <p>This change is generated by AI and has been marked as <strong>${suggestion.safety.risk} risk</strong>.</p>
          <p>Please review the diff carefully before applying.</p>
        </div>

        <h1><span class="ai-label">AI Generated</span> ${this.escapeHtml(suggestion.title)}</h1>
        
        ${suggestion.description ? `<p>${this.escapeHtml(suggestion.description)}</p>` : ''}
        
        <h2>Unified Diff</h2>
        <pre>${this.escapeHtml(suggestion.diff!.content)}</pre>
      </body>
      </html>
    `;

    // 显示确认对话框
    const confirm = await vscode.window.showWarningMessage(
      'Are you sure you want to apply this AI-generated change?',
      { modal: true },
      'Yes, Apply',
      'Cancel'
    );

    panel.dispose();
    return confirm === 'Yes, Apply';
  }

  private escapeHtml(text: string): string {
    return text
      .replace(/&/g, '&')
      .replace(/</g, '<')
      .replace(/>/g, '>')
      .replace(/"/g, '"')
      .replace(/'/g, '&#039;');
  }
}
```

---

## 🎯 四层验证详解

### Layer 1: Schema Validation

**目的**：验证 ReviewResult 的格式和类型

**检查项**：
- ✅ 必填字段是否存在
- ✅ 字段类型是否正确
- ✅ 枚举值是否合法
- ✅ 字符串格式是否正确

**阻断**：是

**示例**：

```typescript
const schemaValidation = ReviewSchemaValidator.validate(reviewResult);

interface ValidationResult {
  valid: boolean;
  errors: SchemaValidationError[];
}

interface SchemaValidationError {
  path: string;
  message: string;
}
```

---

### Layer 2: Semantic Validation (v1.2.1 新增) ⭐

**目的**：验证 ReviewResult 在语义上的正确性

**检查项**：
- ✅ Summary 统计是否自洽
- ✅ Issue/Suggestion ID 唯一性
- ✅ 文件路径是否存在
- ✅ Range 是否在文件行数内
- ✅ Diff 是否只影响 appliesTo.filePath
- ⚠️ 低置信度警告（不阻断）
- ⚠️ 缺少解释警告（不阻断）

**阻断**：是（错误），否（警告）

**示例**：

```typescript
const semanticValidation = await SemanticReviewValidator.validate(reviewResult);

interface SemanticValidationResult {
  valid: boolean;
  semanticErrors: SemanticValidationError[];
  warnings: SemanticValidationWarning[];
}

interface SemanticValidationError {
  type: 
    | 'FILE_NOT_FOUND'
    | 'RANGE_OUT_OF_BOUNDS'
    | 'DIFF_MISMATCH'
    | 'SUMMARY_INCONSISTENCY'
    | 'DUPLICATE_ISSUE_ID'
    | 'DUPLICATE_SUGGESTION_ID';
  message: string;
  issueId?: string;
  suggestionId?: string;
  filePath?: string;
}

interface SemanticValidationWarning {
  type: 
    | 'LOW_CONFIDENCE'
    | 'MISSING_EXPLANATION'
    | 'HIGH_RISK_SUGGESTION';
  message: string;
  issueId?: string;
  suggestionId?: string;
}
```

**使用场景**：

```typescript
// 场景 1: AI 生成了不存在的文件路径
{
  issues: [{
    id: '1',
    type: 'bug',
    severity: 'error',
    message: 'Fix bug in file',
    location: {
      filePath: 'non-existent-file.ts', // ❌ 文件不存在
      range: { startLine: 10, endLine: 20 }
    }
  }]
}

// 结果：semanticErrors = [{
//   type: 'FILE_NOT_FOUND',
//   message: 'File not found in workspace: non-existent-file.ts'
// }]

// 场景 2: Range 越界
{
  issues: [{
    id: '2',
    type: 'bug',
    severity: 'error',
    message: 'Fix bug',
    location: {
      filePath: 'file.ts', // 只有 50 行
      range: { startLine: 100, endLine: 110 } // ❌ 越界
    }
  }]
}

// 结果：semanticErrors = [{
//   type: 'RANGE_OUT_OF_BOUNDS',
//   message: 'Range out of bounds in file.ts: lines 100-110'
// }]

// 场景 3: 低置信度警告
{
  issues: [{
    id: '3',
    type: 'bug',
    severity: 'error',
    message: 'Possible bug',
    confidence: 0.3 // ⚠️ 低置信度
  }]
}

// 结果：warnings = [{
//   type: 'LOW_CONFIDENCE',
//   message: 'Issue 3 has low confidence: 0.3'
// }]
// valid = true（警告不阻断）
```

---

### Layer 3: Security Validation

**目的**：防止恶意 Diff 攻击

**检查项**：
- ✅ 路径穿越（`../`）
- ✅ 绝对路径（`/etc/`、`C:\Windows\`）
- ✅ 文件大小限制
- ✅ 行长度限制
- ✅ Hunk Header 伪造检测
- ✅ 上下文行数限制

**阻断**：是

**示例**：

```typescript
const parseResult = DiffParser.parse(diffText);
const securityValidation = validateDiffSecurity(parseResult);

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
}
```

---

### Layer 4: Automated Scanner

**目的**：提供风险模式和质量指标的建议

**检查项**：
- ⚠️ 安全风险模式（建议层）
- ⚠️ 质量指标（建议层）
- ⚠️ 修复建议（建议层）

**阻断**：否（建议层）

**示例**：

```typescript
const scanner = getScanner();
const scanResult = await scanner.scanGeneratedCode(diffText, {
  scanType: 'full',
  runTests: false
});

interface ScanResult {
  passed: boolean; // 表示"没有严重警告"，不代表"可以安全执行"
  timestamp: Date;
  scanType: 'security' | 'quality' | 'full';
  securityCheck: SecurityCheckResult;
  qualityCheck?: QualityCheckResult;
  recommendations: string[];
}

// 注意：Scanner 是建议层，安全执行需要先通过 DiffSecurityValidator.validate()
```

---

## 🔄 Validator vs Scanner 边界

### 关键区别

| 层次 | 职责 | 阻断 | 示例 |
|------|------|------|------|
| Schema Validation | 格式验证 | 是 | 类型错误、缺少必填字段 |
| Semantic Validation | 语义验证 | 是（错误）<br>否（警告） | 文件不存在、range 越界 |
| Security Validation | 防御攻击 | 是 | 路径穿越、绝对路径 |
| Automated Scanner | 建议优化 | 否 | 质量指标、风险模式 |

### 使用原则

1. **Validator = 决策层**
   - 必须通过，系统才能继续
   - 失败时应该立即阻断
   - 用户提供明确的错误信息

2. **Scanner = 建议层**
   - 失败时只警告，不阻断
   - 用户可以选择继续或停止
   - 提供详细的建议和修复方案

### 代码示例

```typescript
// ✅ 正确：Validator 必须通过
const securityValidation = validateDiffSecurity(diff);
if (!securityValidation.valid) {
  throw new Error('Security validation failed');
}

// ✅ 正确：Scanner 失败只警告
const scanResult = await scanner.scanGeneratedCode(diffText);
if (!scanResult.passed) {
  console.warn('Scan found issues:', scanResult.recommendations);
  // 用户可以选择继续
}

// ❌ 错误：Scanner 的 passed 不代表可以安全执行
if (scanResult.passed) {
  await DiffApplier.apply(diff); // ❌ 危险！没有安全验证
}

// ✅ 正确：先通过 Validator，再应用
const securityValidation = validateDiffSecurity(diff);
if (securityValidation.valid) {
  await DiffApplier.apply(diff); // ✅ 安全
}
```

---

## 📚 API 参考

### SemanticReviewValidator

```typescript
import { SemanticReviewValidator, validateSemanticReview } from '../core/semanticReviewValidator';

// 方式 1: 使用类
const semanticValidation = await SemanticReviewValidator.validate(reviewResult);

// 方式 2: 使用快捷函数
const semanticValidation = await validateSemanticReview(reviewResult);

// 方式 3: 验证并抛出异常
try {
  await SemanticReviewValidator.validateOrThrow(reviewResult);
  // 验证通过，继续处理
} catch (error) {
  console.error('Semantic validation failed:', error);
}
```

---

## 🎯 迁移指南

### 从 v1.2 升级到 v1.2.1

#### 步骤 1: 安装依赖

无需额外依赖，v1.2.1 的所有改进都是新增文件。

#### 步骤 2: 更新导入

```typescript
// 新增导入
import { SemanticReviewValidator } from '../core/semanticReviewValidator';
```

#### 步骤 3: 添加语义校验

在你的 AI Review 工作流中，在 Schema 验证之后添加语义校验：

```typescript
// 原有代码
const schemaValidation = ReviewSchemaValidator.validate(reviewResult);
if (!schemaValidation.valid) {
  throw new Error('Schema validation failed');
}

// 新增：语义校验
const semanticValidation = await SemanticReviewValidator.validate(reviewResult);
if (!semanticValidation.valid) {
  throw new Error('Semantic validation failed');
}

// 显示警告（可选）
if (semanticValidation.warnings.length > 0) {
  console.warn('Semantic warnings:', semanticValidation.warnings);
}
```

#### 步骤 4: 更新错误处理

```typescript
// 原有错误处理
catch (error) {
  if (error.message.includes('Schema validation failed')) {
    // 处理 Schema 错误
  }
}

// 新增：处理语义错误
catch (error) {
  if (error.message.includes('Semantic validation failed')) {
    // 处理语义错误
  }
}
```

#### 步骤 5: 更新文档

更新你的集成文档，说明四层验证架构。

---

## 🧪 测试

### 测试语义校验

```typescript
import { SemanticReviewValidator } from '../core/semanticReviewValidator';

// 测试 1: 文件不存在
const invalidReview = {
  schemaVersion: "1.0",
  meta: { model: "gpt-4", generatedAt: new Date().toISOString(), reviewType: "commit" },
  summary: { riskLevel: "low", issueCount: 1, suggestionCount: 0 },
  issues: [{
    id: '1',
    type: 'bug',
    severity: 'error',
    message: 'Fix bug',
    location: {
      filePath: 'non-existent.ts',
      range: { startLine: 10, endLine: 20 }
    }
  }]
};

const result = await SemanticReviewValidator.validate(invalidReview);
console.assert(!result.valid);
console.assert(result.semanticErrors.length > 0);
console.assert(result.semanticErrors[0].type === 'FILE_NOT_FOUND');

// 测试 2: 低置信度警告
const lowConfidenceReview = {
  schemaVersion: "1.0",
  meta: { model: "gpt-4", generatedAt: new Date().toISOString(), reviewType: "commit" },
  summary: { riskLevel: "low", issueCount: 1, suggestionCount: 0 },
  issues: [{
    id: '1',
    type: 'bug',
    severity: 'warning',
    message: 'Possible bug',
    confidence: 0.3
  }]
};

const result2 = await SemanticReviewValidator.validate(lowConfidenceReview);
console.assert(result2.valid); // 警告不阻断
console.assert(result2.warnings.length > 0);
console.assert(result2.warnings[0].type === 'LOW_CONFIDENCE');
```

---

## 📖 更多资源

- [v1.2.1 改进文档](./IMPROVEMENTS_V1.2.1.md)
- [v1.2 集成指南](./FEATURES_INTEGRATION_GUIDE.md)
- [实现总结](./IMPLEMENTATION_SUMMARY.md)

---

**版本**: v1.2.1  
**日期**: 2026-01-31  
**作者**: vsyuangs Team