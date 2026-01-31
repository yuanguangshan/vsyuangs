# Step 6: Level 3 人工确认机制

## 概述

本文档定义了 **Level 3 人工确认机制** 的设计规范，用于在需要全量替换时强制用户确认，防止误操作。

## 目标

- 低置信度 diff 必须人工确认
- 严重语义问题需要人工确认
- 支持 CI / 本地 / GitOps 多场景

## 触发条件

### Level 3 触发条件

以下情况需要 Level 3 确认：

1. **低置信度**
   - 置信度 < 0.5
   - 模糊匹配相似度 < 0.7

2. **大范围修改**
   - 修改行数 > 100
   - 影响文件数 > 5

3. **高风险操作**
   - 删除文件
   - 新增高风险 API（eval、innerHTML 等）

### Phase 3 触发条件

以下情况需要人工确认：

1. **Critical 风险**
   - 任何 SemanticRiskLevel.CRITICAL

2. **多个 Error 风险**
   - Error 数量 ≥ 3

3. **安全相关风险**
   - SemanticRiskCategory.SECURITY

## CI 场景

### 阻塞并输出 JSON 审计报告

```yaml
name: AI Diff Review

on:
  pull_request:
    branches: [ main ]

jobs:
  review:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Apply Diff
        run: npm run diff:apply -- --dry-run

      - name: Review Risks
        run: npm run diff:review

      - name: Require Confirmation
        if: needs-confirmation
        run: |
          echo "⚠️ This diff requires human review"
          echo "Please review the risks before merging"
          exit 1
```

### 交互式确认

```typescript
const result = await pipeline.execute(diffContent);

if (result.usedLevel === 3 || hasHighRisk(result)) {
  const confirmed = await vscode.window.showWarningMessage(
    'This diff requires human confirmation',
    { modal: true },
    'Review Diff',
    'Cancel'
  );

  if (confirmed === 'Review Diff') {
    // 显示 diff 预览
    await showDiffPreview(result);
  } else {
    // 取消操作
    await pipeline.cancel('User cancelled');
  }
}
```

## 本地场景

### 生成 `.diff.review.json`

```json
{
  "timestamp": "2026-01-31T20:00:00Z",
  "diffHash": "abc123",
  "transactionId": "tx-abc123",
  "usedLevel": 3,
  "confidence": 0.45,
  "requiresConfirmation": true,
  "files": [
    {
      "path": "src/example.ts",
      "level": 3,
      "confidence": 0.42,
      "reason": "Low confidence match"
    }
  ],
  "semanticRisks": [
    {
      "level": "critical",
      "category": "security",
      "message": "Use of eval detected"
    }
  ],
  "reviewStatus": "pending"
}
```

### 用户确认流程

1. **显示预览**
   ```typescript
   await vscode.commands.executeCommand(
     'workbench.action.diff.open',
     originalUri,
     modifiedUri
   );
   ```

2. **显示风险摘要**
   ```typescript
   const message = `
     This diff requires confirmation:
     - Level: ${result.usedLevel}
     - Confidence: ${result.confidence.toFixed(2)}
     - Critical risks: ${result.semanticReview?.stats.critical}
     - Error risks: ${result.semanticReview?.stats.error}
   `;
   
   const choice = await vscode.window.showInformationMessage(
     message,
     { modal: true },
     'Apply',
     'Cancel'
   );
   ```

3. **确认应用**
   ```typescript
   if (choice === 'Apply') {
     await pipeline.commit();
     updateReviewStatus('approved');
   } else {
     await pipeline.rollback();
     updateReviewStatus('rejected');
   }
   ```

## GitOps 场景

### 标记 PR 为 `needs-human-review`

```yaml
- name: Check for Level 3
  id: check
  run: |
    if [ "$USED_LEVEL" = "3" ]; then
      echo "needs_human_review=true" >> $GITHUB_OUTPUT
    fi

- name: Mark PR for Review
  if: steps.check.outputs.needs_human_review == 'true'
  uses: actions/github-script@v7
  with:
    script: |
      github.rest.issues.addLabels({
        issue_number: context.issue.number,
        labels: ['needs-human-review']
      });
```

### 自动回滚机制

```typescript
// 在 CI 中自动回滚
if (result.status === 'FAILED' && result.usedLevel === 3) {
  await pipeline.rollback();
  
  // 发送通知
  await notifyTeam({
    title: 'AI Diff Rejected',
    message: 'Diff required human review but was not confirmed',
    reason: result.rollbackReason
  });
}
```

## UI 设计

### Diff Preview Panel

```
┌─────────────────────────────────────────┐
│ Patch Preview                          │
├─────────────────────────────────────────┤
│ Original    Modified                   │
│ ┌────────┐  ┌────────┐              │
│ │ old... │  │ new... │              │
│ │ code  │  │ code  │              │
│ └────────┘  └────────┘              │
├─────────────────────────────────────────┤
│ Risks:                                │
│ ⚠️ Critical: 1                       │
│ ⚠️ Error: 2                          │
├─────────────────────────────────────────┤
│ [Review Risks]  [Apply]  [Cancel]    │
└─────────────────────────────────────────┘
```

### Risk Summary

```
┌─────────────────────────────────────────┐
│ Risk Summary                          │
├─────────────────────────────────────────┤
│ Level: 3 (Low Confidence)          │
│ Confidence: 0.45                     │
├─────────────────────────────────────────┤
│ Critical Risks (1):                   │
│   🔴 no-eval: Use of eval is...    │
├─────────────────────────────────────────┤
│ Error Risks (2):                     │
│   ⚠️ no-empty-catch: Empty catch... │
│   ⚠️ no-any: Avoid using any...    │
├─────────────────────────────────────────┤
│ [View Full Report]  [Confirm] [Reject]│
└─────────────────────────────────────────┘
```

## 确认流程

### 1. 确认前检查

```typescript
function preConfirmationCheck(result: PipelineResult): boolean {
  // 检查是否有 critical 风险
  if (result.semanticReview?.stats.critical > 0) {
    return false;
  }

  // 检查置信度
  if (result.confidence !== undefined && result.confidence < 0.3) {
    return false;
  }

  // 检查是否有严重错误
  if (result.semanticReview?.stats.error > 5) {
    return false;
  }

  return true;
}
```

### 2. 分步确认

```typescript
async function stepwiseConfirmation(result: PipelineResult): Promise<boolean> {
  // 步骤 1: 概述确认
  const step1 = await vscode.window.showInformationMessage(
    `Apply diff to ${result.appliedFiles.length} files?`,
    'Review',
    'Cancel'
  );

  if (step1 !== 'Review') return false;

  // 步骤 2: 风险确认
  if (result.semanticReview?.stats.critical > 0) {
    const step2 = await vscode.window.showWarningMessage(
      'This diff contains critical security risks. Continue?',
      { modal: true },
      'Review Risks',
      'Cancel'
    );

    if (step2 !== 'Review Risks') return false;
  }

  // 步骤 3: 最终确认
  const step3 = await vscode.window.showWarningMessage(
    'Are you sure you want to apply these changes?',
    { modal: true },
    'Apply',
    'Cancel'
  );

  return step3 === 'Apply';
}
```

### 3. 确认后操作

```typescript
async function postConfirmation(
  result: PipelineResult,
  confirmed: boolean
): Promise<void> {
  if (confirmed) {
    // 提交事务
    await pipeline.commit();

    // 记录审计日志
    await logAudit({
      action: 'diff_applied',
      level: result.usedLevel,
      confirmed: true,
      timestamp: new Date().toISOString()
    });

    // 通知用户
    vscode.window.showInformationMessage(
      'Diff applied successfully'
    );
  } else {
    // 回滚事务
    await pipeline.rollback();

    // 记录拒绝日志
    await logAudit({
      action: 'diff_rejected',
      level: result.usedLevel,
      confirmed: false,
      timestamp: new Date().toISOString()
    });
  }
}
```

## 配置选项

```typescript
interface ConfirmationOptions {
  /** 是否显示 diff 预览 */
  showDiffPreview?: boolean;
  
  /** 是否显示风险摘要 */
  showRiskSummary?: boolean;
  
  /** 是否分步确认 */
  stepwiseConfirmation?: boolean;
  
  /** 是否允许跳过确认（仅开发环境） */
  allowSkip?: boolean;
  
  /** 自定义确认处理器 */
  customHandler?: (result: PipelineResult) => Promise<boolean>;
}
```

## 总结

Level 3 人工确认机制提供了最后一道防线，确保高风险 diff 不会自动应用。通过 CI、本地和 GitOps 多场景支持，可以灵活适应不同的工作流程。

---

**实施状态：** 📝 文档完成  
**下一步：** Step 7: 审计与产物输出