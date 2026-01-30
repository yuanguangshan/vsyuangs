# Diff Property-Based Tests 设计

**版本：** v2.1  
**目的：** 通过属性测试验证 Apply Engine 的不变式  
**工具：** 推荐 fast-check (JavaScript/TypeScript)

> **核心理念：** 不是测试"这个例子是否能通过"，而是验证"对于所有可能的输入，某些属性必须成立"。

---

## Property-Based Tests 简介

### 与示例测试的区别

| 维度 | 示例测试 | Property-Based Tests |
|------|----------|-------------------|
| 测试范围 | 特定输入 | 所有可能输入 |
| 发现问题 | 已知 bug | 未知 bug |
| 覆盖率 | 低（人为选择） | 高（随机生成） |
| 隔离根因 | 困难 | 容易（最小化 counterexample） |

### 适用场景

- ✅ 不变式验证（Apply Engine 不变式）
- ✅ 边界条件（空 diff、超大 diff）
- ✅ 组合爆炸（多文件、多 hunk）
- ✅ 安全性（恶意 diff）

---

## Safety Properties（安全性属性）

### Property S1: No Accidental Change（无意外修改）

**性质：**
> 如果 diff apply 成功，那么修改范围必须 ⊆ diff 描述的范围

**形式化表达：**
```
changedLines = linesChanged(before, after)
changedLines ⊆ (diff.adds ∪ diff.removes)
```

**测试策略：**
```typescript
property(
  "no accidental change",
  arbitray.document,
  arbitrary.diff,
  (doc, diff) => {
    const result = apply(diff, doc);
    if (!result.success) return true; // 失败无所谓
    
    const changed = findChangedLines(doc, result.document);
    const expected = new Set([
      ...diff.adds,
      ...diff.removes
    ]);
    
    return changed.every(line => expected.has(line));
  }
);
```

**预期结果：**
- ✅ 所有修改都应该在 diff 中
- ❌ 如果修改了 diff 外的行 → 失败

---

### Property S2: Context Mismatch ⇒ Always Fail（Context 不匹配必失败）

**性质：**
> 任何 context 不匹配都必须导致失败

**测试策略：**
```typescript
property(
  "context mismatch always fails",
  arbitrary.validDiff,
  arbitrary.position,
  (diff, pos) => {
    // 破坏一个 context 行
    const brokenDiff = corruptContextAt(diff, pos);
    
    const result = apply(brokenDiff, doc);
    return !result.success;
  }
);
```

**预期结果：**
- ✅ 破坏 context 后，apply 必须失败
- ❌ 如果 apply 成功 → 违反 G1（安全优先）

---

### Property S3: Remove Must Exist（删除行必须存在）

**性质：**
> 所有 remove 行必须在文档中存在

**形式化表达：**
```
∀ r ∈ removedLines: r ∈ document
```

**测试策略：**
```typescript
property(
  "remove must exist",
  arbitrary.validDiff,
  arbitrary.position,
  (diff, pos) => {
    const doc = generateDocument(diff);
    // 移除一个 remove 行的目标位置
    const brokenDoc = removeLineAt(doc, diff.removes[pos]);
    
    const result = apply(diff, brokenDoc);
    return !result.success;
  }
);
```

**预期结果：**
- ✅ remove 行不存在时，apply 必须失败
- ❌ 如果 apply 成功 → 违反 A2（Remove 精确性）

---

## Determinism Properties（确定性属性）

### Property D1: Idempotence of Dry Run（Dry Run 幂等性）

**性质：**
> Dry run 不修改文档

**形式化表达：**
```
dryRun(diff, doc) ≡ doc
```

**测试策略：**
```typescript
property(
  "dry run is idempotent",
  arbitrary.document,
  arbitrary.diff,
  (doc, diff) => {
    const original = doc.toString();
    
    const result = apply(diff, doc, { dryRun: true });
    
    return doc.toString() === original;
  }
);
```

**预期结果：**
- ✅ Dry run 后文档必须完全不变
- ❌ 如果文档被修改 → 违反 A5（无副作用）

---

### Property D2: Apply Is Deterministic（Apply 确定性）

**性质：**
> 相同输入产生相同输出

**形式化表达：**
```
apply(d, s₁) ≡ apply(d, s₂) if s₁ ≡ s₂
```

**测试策略：**
```typescript
property(
  "apply is deterministic",
  arbitrary.document,
  arbitrary.diff,
  (doc, diff) => {
    const clone1 = cloneDocument(doc);
    const clone2 = cloneDocument(doc);
    
    const result1 = apply(diff, clone1);
    const result2 = apply(diff, clone2);
    
    return JSON.stringify(result1) === JSON.stringify(result2);
  }
);
```

**预期结果：**
- ✅ 相同输入必须产生完全相同的输出
- ❌ 如果输出不同 → 违反 G2（确定性）

---

### Property D3: Order Sensitivity（顺序敏感性）

**性质：**
> Hunks 顺序影响结果

**形式化表达：**
```
apply([h₁, h₂], doc) ≠ apply([h₂, h₁], doc)
```

**测试策略：**
```typescript
property(
  "hunk order matters",
  arbitrary.document,
  arbitrary.twoIndependentHunks,
  (doc, [h1, h2]) => {
    const diff1 = { files: [{ hunks: [h1, h2] }] };
    const diff2 = { files: [{ hunks: [h2, h1] }] };
    
    const result1 = apply(diff1, doc);
    const result2 = apply(diff2, doc);
    
    // 结果必须不同或都失败
    return !result1.success || !result2.success || 
           result1.document !== result2.document;
  }
);
```

**预期结果：**
- ✅ 顺序不同必须导致不同结果
- ❌ 如果顺序无关 → 违反 A4（单调状态变更）

---

## Fuzzy Guard Properties（模糊匹配防护属性）

### Property F1: Fuzzy Disabled = Strict Mode（模糊关闭 = 严格模式）

**性质：**
> 当 `config.fuzzy = false` 时，任何差异都必须失败

**测试策略：**
```typescript
property(
  "fuzzy disabled means strict",
  arbitrary.document,
  arbitrary.diffWithWhitespaceDiff,
  (doc, diff) => {
    const result = apply(diff, doc, { fuzzy: false });
    return !result.success;
  }
);
```

**预期结果：**
- ✅ 任何空格差异都必须失败
- ❌ 如果 apply 成功 → 违反 F1

---

### Property F2: Multiple Candidates = Fail（多个候选必失败）

**性质：**
> 存在多个匹配候选时必须失败

**测试策略：**
```typescript
property(
  "multiple candidates fail",
  arbitrary.documentWithDuplicateContext,
  arbitrary.diffMatchingThatContext,
  (doc, diff) => {
    const result = apply(diff, doc, { fuzzy: true });
    return !result.success;
  }
);
```

**预期结果：**
- ✅ 多个匹配时必须失败（无论 strict 或 fuzzy）
- ❌ 如果 apply 成功 → 违反 F3 和 A3（唯一锚点）

---

## Invertibility Properties（可逆性属性）

### Property I1: Apply + Undo = Original（应用 + 撤销 = 原始）

**性质：**
> 如果支持 undo，那么 apply + undo 必须回到原始文档

**形式化表达：**
```
undo(apply(d, s)) ≡ s
```

**测试策略：**
```typescript
property(
  "apply + undo = original",
  arbitrary.document,
  arbitrary.diff,
  (doc, diff) => {
    const result = apply(diff, doc);
    if (!result.success) return true;
    
    const undoResult = undo(result.document);
    
    return undoResult.document === doc;
  }
);
```

**预期结果：**
- ✅ Undo 后必须回到原始文档
- ❌ 如果文档不同 → undo 实现有 bug

---

## Composition Properties（组合性质）

### Property C1: Hunks Apply Sequentially（Hunks 顺序应用）

**性质：**
> 多个 hunks 的 apply 结果等于按顺序 apply 每个 hunk

**形式化表达：**
```
apply([h₁, h₂], doc) ≡ apply(h₂, apply(h₁, doc))
```

**测试策略：**
```typescript
property(
  "hunks apply sequentially",
  arbitrary.document,
  arbitrary.twoHunks,
  (doc, [h1, h2]) => {
    const result1 = apply({ hunks: [h1, h2] }, doc);
    
    const intermediate = apply({ hunks: [h1] }, doc);
    const result2 = intermediate.success ? 
      apply({ hunks: [h2] }, intermediate.document) : 
      intermediate;
    
    return JSON.stringify(result1) === JSON.stringify(result2);
  }
);
```

**预期结果：**
- ✅ 批量应用必须等于顺序应用
- ❌ 如果结果不同 → 违反 A4（单调状态变更）

---

## Error Properties（错误属性）

### Property E1: Error Is Informative（错误信息清晰）

**性质：**
> 所有错误都必须包含足够的信息来定位问题

**形式化表达：**
```
∀ e ∈ errors: (e.line !== undefined) ∨ (e.hunkIndex !== undefined)
```

**测试策略：**
```typescript
property(
  "error is informative",
  arbitrary.invalidDiff,
  (diff) => {
    const result = apply(diff, doc);
    
    if (result.success) return true;
    
    return result.line !== undefined || 
           result.hunkIndex !== undefined;
  }
);
```

**预期结果：**
- ✅ 所有错误都必须包含行号或 hunk 索引
- ❌ 如果错误信息不足 → 难以调试

---

## Arbitrary Generators（任意生成器）

### Document Generator

```typescript
const document = arbitrary.array(
  arbitrary.stringMatching(/^[ \t]*\w.*$/), // 有效代码行
  { minLength: 1, maxLength: 1000 }  // 安全限制内
).map(lines => lines.join('\n'));
```

### Diff Generator

```typescript
const diff = arbitrary.object({
  files: arbitrary.array(
    arbitrary.object({
      hunks: arbitrary.array(
        arbitrary.object({
          oldStart: arbitrary.nat(),
          oldCount: arbitrary.nat({ max: 50 }), // 限制内
          newStart: arbitrary.nat(),
          newCount: arbitrary.nat({ max: 50 }),
          lines: arbitrary.array(
            arbitrary.object({
              type: arbitrary.constantFrom('context', 'add', 'remove'),
              content: arbitrary.string(),
              raw: arbitrary.string()
            })
          )
        }),
        { minLength: 1, maxLength: 50 }
      )
    }),
    { minLength: 1, maxLength: 20 }
  )
});
```

---

## Test Runner 示例

```typescript
import fc from 'fast-check';

describe('Diff Apply Engine - Property-Based Tests', () => {
  
  it('Property S1: No accidental change', () => {
    fc.assert(
      fc.property(document, diff, (doc, diff) => {
        const result = apply(diff, doc);
        if (!result.success) return true;
        
        const changed = findChangedLines(doc, result.document);
        const expected = new Set([
          ...diff.files.flatMap(f => f.hunks.flatMap(h => 
            h.lines.filter(l => l.type === 'add' || l.type === 'remove')
          ))
        ]);
        
        return changed.every(line => expected.has(line));
      }),
      { numRuns: 1000, seed: 12345 }
    );
  });
  
  it('Property D1: Dry run is idempotent', () => {
    fc.assert(
      fc.property(document, diff, (doc, diff) => {
        const original = doc.toString();
        
        apply(diff, doc, { dryRun: true });
        
        return doc.toString() === original;
      }),
      { numRuns: 1000 }
    );
  });
  
});
```

---

## 最小化 Counterexample

**问题：** Property-Based Tests 会找到反例，但可能很复杂

**解决方案：** 使用 fast-check 的自动最小化

```typescript
// fast-check 会自动最小化这个反例
// 例如：从 100 行的 diff 最小化到 1 行
fc.assert(property, { numRuns: 1000 });
```

**示例：**
```
Counterexample found:
- 原始：100 行 diff，第 50 行 context 不匹配
- 最小化：1 行 diff，第 1 行 context 不匹配
```

---

## 与不变式的对应关系

| Property | 验证的不变式 |
|----------|--------------|
| S1: No Accidental Change | G1 (Safety First), A5 (No Side Effects) |
| S2: Context Mismatch ⇒ Fail | G1 (Safety First), A1 (Context Authority) |
| S3: Remove Must Exist | A2 (Remove Exactness) |
| D1: Dry Run Idempotence | A5 (No Side Effects) |
| D2: Apply Deterministic | G2 (Determinism) |
| D3: Order Sensitivity | G3 (Locality), A4 (Monotonic State) |
| F1: Fuzzy Disabled = Strict | F1 (Fuzzy Constraints) |
| F2: Multiple Candidates = Fail | A3 (Single Anchor), F3 (Multiple Candidates) |
| I1: Apply + Undo = Original | P2 (Raw Preservation) |
| C1: Hunks Apply Sequentially | A4 (Monotonic State) |
| E1: Error Is Informative | 全局（可观测性） |

---

## 实现检查清单

在实现 Property-Based Tests 时：

- [ ] 每个不变式至少有一个 property
- [ ] 使用 fast-check 或类似工具
- [ ] 设置合理的 numRuns（1000+）
- [ ] 设置固定 seed（可重现）
- [ ] 验证最小化功能正常
- [ ] CI/CD 集成
- [ ] 失败时自动报告 counterexample

---

## 工具推荐

### fast-check (JavaScript/TypeScript)
```bash
npm install fast-check --save-dev
```

### QuickCheck (Haskell)
```bash
cabal install QuickCheck
```

### Hedgehog (Scala)
```sbt
libraryDependencies += "com.stripe" %% "hedgehog" % "0.9.0"
```

---

## 性能考虑

| 因素 | 建议 |
|------|------|
| numRuns | 1000-10000（平衡覆盖率和时间）|
| maxDepth | 限制生成器深度（避免无限生成）|
| seed | 固定 seed（CI 可重现）|
| parallel | 不建议（调试困难）|

---

## 版本历史

### v2.1 (2026-01-31)
- ✅ 初始版本，定义所有核心属性
- ✅ 与不变式清单对应
- ✅ 提供实现示例

---

## 参考资料

- [fast-check Documentation](https://github.com/dubzzz/fast-check)
- [Property-Based Testing in TypeScript](https://dev.to/leandronsp/teste-baseado-em-propriedades-em-typescript-3k6g)
- [Apply Engine Invariants](./diff-apply-invariants.md)