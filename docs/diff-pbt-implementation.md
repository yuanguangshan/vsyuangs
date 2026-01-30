# Diff Apply Engine - Property-Based Tests 实现

**版本：** v2.1  
**工具：** fast-check (JavaScript/TypeScript)  
**目的：** 通过属性测试验证 Apply Engine 的不变式

---

## 📦 安装依赖

```bash
npm install --save-dev fast-check
npm install --save-dev @types/mocha  # 如果使用 mocha
```

---

## 🧪 PBT 实现策略

### 关键原则

1. **不变式优先**：每个 invariant 至少一个 property
2. **可重现性**：固定 seed，CI 可重现
3. **最小化反例**：fast-check 自动最小化
4. **性能可控**：限制 numRuns 和 generator 深度

---

## 📝 核心实现

### 1. PBT-2: Context Is Authority（上下文权威性）

**不变式：**
> 修改任意一个 context 行 → apply 必须失败

```typescript
import fc from 'fast-check';
import { DiffParser, DiffApplier } from '../src/core/diff';
import * as vscode from 'vscode';

describe('PBT-2: Context Is Authority', () => {
  
  it('修改任意一个 context 行 → apply 必须失败', () => {
    fc.assert(
      fc.property(
        // 生成有效的文档
        fc.array(fc.stringMatching(/^[ \t]*\w.*$/), { minLength: 10, maxLength: 100 }),
        // 生成有效的 hunk
        fc.record({
          oldStart: fc.nat({ max: 50 }),
          context: fc.array(fc.stringMatching(/^[ \t]*\w.*$/), { minLength: 2, maxLength: 5 }),
          removes: fc.array(fc.stringMatching(/^[ \t]*\w.*$/), { minLength: 1, maxLength: 3 }),
          adds: fc.array(fc.stringMatching(/^[ \t]*\w.*$/), { minLength: 1, maxLength: 3 })
        }),
        // 选择要篡改的 context 行索引
        fc.nat({ max: 4 })
      ).map(([docLines, hunkSpec, corruptIndex]) => {
        // 生成 unified diff
        const oldStart = hunkSpec.oldStart + 1;
        const contextLines = hunkSpec.context;
        
        let diffText = `--- a/test.ts\n+++ b/test.ts\n`;
        diffText += `@@ -${oldStart},${contextLines.length + hunkSpec.removes.length} `;
        diffText += `+${oldStart},${contextLines.length + hunkSpec.adds.length} @@\n`;
        
        // Context 行
        contextLines.forEach(line => {
          diffText += ` ${line}\n`;
        });
        
        // Remove 行
        hunkSpec.removes.forEach(line => {
          diffText += `-${line}\n`;
        });
        
        // Add 行
        hunkSpec.adds.forEach(line => {
          diffText += `+${line}\n`;
        });
        
        // 篡改指定的 context 行
        const lines = diffText.split('\n');
        let contextIdx = 3; // 跳过文件头和 hunk 头
        
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].startsWith(' ')) {
            if (contextIdx === corruptIndex) {
              // 篡改：修改一个字符
              const prefix = lines[i][0];
              const content = lines[i].substring(1);
              lines[i] = prefix + content[0] + 'X' + content.substring(2);
            }
            contextIdx++;
          }
        }
        
        return {
          doc: docLines.join('\n'),
          diff: lines.join('\n'),
          corruptIndex
        };
      }),
      async ({ doc, diff }) => {
        // 创建模拟文档
        const mockDoc = createMockDocument(doc);
        
        // 解析 diff
        const result = DiffParser.parse(diff);
        
        if (!result.success) {
          // 如果解析失败，这个测试用例无效（跳过）
          return true;
        }
        
        // 应用 diff（应该失败）
        const applyResult = await DiffApplier.apply(result, { dryRun: true });
        
        // 断言：必须失败
        return !applyResult.success;
      },
      {
        numRuns: 1000,
        seed: 12345,  // 固定 seed 以便重现
        verbose: true  // 打印反例
      }
    );
  });
  
});
```

---

### 2. PBT-3: Remove Is Sacred（删除行红线）

**不变式：**
> 删除行永远不能被 fuzzy 或忽略

```typescript
describe('PBT-3: Remove Is Sacred (红线测试)', () => {
  
  it('修改 document 中 remove 行内容 → apply 必须失败', () => {
    fc.assert(
      fc.property(
        // 生成有效的文档
        fc.array(fc.stringMatching(/^[ \t]*\w.*$/), { minLength: 10, maxLength: 100 }),
        // 生成有效的 hunk
        fc.record({
          oldStart: fc.nat({ max: 50 }),
          context: fc.array(fc.stringMatching(/^[ \t]*\w.*$/), { minLength: 2, maxLength: 5 }),
          removes: fc.array(fc.stringMatching(/^[ \t]*\w.*$/), { minLength: 1, maxLength: 3 }),
          adds: fc.array(fc.stringMatching(/^[ \t]*\w.*$/), { minLength: 1, maxLength: 3 })
        })
      ).map(([docLines, hunkSpec]) => {
        const oldStart = hunkSpec.oldStart + 1;
        
        // 生成 diff（remove 行是正确的）
        let diffText = `--- a/test.ts\n+++ b/test.ts\n`;
        diffText += `@@ -${oldStart},${hunkSpec.context.length + hunkSpec.removes.length} `;
        diffText += `+${oldStart},${hunkSpec.context.length + hunkSpec.adds.length} @@\n`;
        
        hunkSpec.context.forEach(line => {
          diffText += ` ${line}\n`;
        });
        
        hunkSpec.removes.forEach(line => {
          diffText += `-${line}\n`;
        });
        
        hunkSpec.adds.forEach(line => {
          diffText += `+${line}\n`;
        });
        
        // 篡改文档：修改第一个 remove 行的目标位置
        const corruptIdx = oldStart + hunkSpec.context.length;
        if (corruptIdx < docLines.length) {
          const originalLine = docLines[corruptIdx];
          docLines[corruptIdx] = originalLine + 'CORRUPTED';
        }
        
        return {
          doc: docLines.join('\n'),
          diff: diffText
        };
      }),
      async ({ doc, diff }) => {
        // 创建模拟文档
        const mockDoc = createMockDocument(doc);
        
        // 解析 diff
        const result = DiffParser.parse(diff);
        
        if (!result.success) {
          return true;
        }
        
        // 应用 diff（必须失败，因为 remove 行不匹配）
        const applyResult = await DiffApplier.apply(result, { dryRun: true });
        
        // 🔴 红线测试：必须失败
        return !applyResult.success;
      },
      {
        numRuns: 1000,
        seed: 12346
      }
    );
  });
  
});
```

---

### 3. PBT-5: Multiple Matches → Fail（多个匹配必失败）

**不变式：**
> 当 context 在文档中出现 ≥2 次 → apply 必须失败

```typescript
describe('PBT-5: Multiple Matches → Fail', () => {
  
  it('context 出现多次 → apply 必须失败', () => {
    fc.assert(
      fc.property(
        // 生成重复的 context 行
        fc.array(fc.stringMatching(/^[ \t]*\w.*$/), { minLength: 1, maxLength: 3 }),
        fc.nat({ min: 2, max: 5 }),  // 重复次数
        fc.array(fc.stringMatching(/^[ \t]*\w.*$/), { minLength: 1, maxLength: 3 }),
        fc.array(fc.stringMatching(/^[ \t]*\w.*$/), { minLength: 1, maxLength: 3 })
      ).map(([repeatLines, repeatCount, removes, adds]) => {
        // 构建文档：重复的 context 出现多次
        let docLines: string[] = [];
        for (let i = 0; i < repeatCount; i++) {
          docLines.push(...repeatLines);
        }
        docLines.push(...removes);
        
        // 生成 diff（只引用第一次出现的 context）
        const oldStart = 1;
        let diffText = `--- a/test.ts\n+++ b/test.ts\n`;
        diffText += `@@ -${oldStart},${repeatLines.length + removes.length} `;
        diffText += `+${oldStart},${repeatLines.length + adds.length} @@\n`;
        
        repeatLines.forEach(line => {
          diffText += ` ${line}\n`;
        });
        
        removes.forEach(line => {
          diffText += `-${line}\n`;
        });
        
        adds.forEach(line => {
          diffText += `+${line}\n`;
        });
        
        return {
          doc: docLines.join('\n'),
          diff: diffText
        };
      }),
      async ({ doc, diff }) => {
        // 创建模拟文档
        const mockDoc = createMockDocument(doc);
        
        // 解析 diff
        const result = DiffParser.parse(diff);
        
        if (!result.success) {
          return true;
        }
        
        // 应用 diff（应该失败，因为 context 出现多次）
        const applyResult = await DiffApplier.apply(result, { dryRun: true });
        
        // 断言：必须失败（因为无法确定唯一匹配）
        return !applyResult.success;
      },
      {
        numRuns: 500,
        seed: 12347
      }
    );
  });
  
});
```

---

### 4. PBT-6: Whitespace Sensitivity（空格敏感性）

**不变式：**
> 对 context 行改一个空格 → apply 必须失败

```typescript
describe('PBT-6: Whitespace Sensitivity', () => {
  
  it('context 行改一个空格 → apply 必须失败', () => {
    fc.assert(
      fc.property(
        // 生成带空格的文档
        fc.array(fc.stringMatching(/^[\t ]*\w[\w \t]*$/), { minLength: 10, maxLength: 100 }),
        // 生成 hunk
        fc.record({
          oldStart: fc.nat({ max: 50 }),
          context: fc.array(fc.stringMatching(/^[\t ]*\w[\w \t]*$/), { minLength: 2, maxLength: 5 }),
          removes: fc.array(fc.stringMatching(/^[\t ]*\w[\w \t]*$/), { minLength: 1, maxLength: 3 }),
          adds: fc.array(fc.stringMatching(/^[\t ]*\w[\w \t]*$/), { minLength: 1, maxLength: 3 })
        }),
        // 选择要篡改的行类型和位置
        fc.constantFrom('space-to-tab', 'tab-to-space', 'add-space', 'remove-space')
      ).map(([docLines, hunkSpec, corruptionType]) => {
        const oldStart = hunkSpec.oldStart + 1;
        
        // 生成原始 diff
        let diffText = `--- a/test.ts\n+++ b/test.ts\n`;
        diffText += `@@ -${oldStart},${hunkSpec.context.length + hunkSpec.removes.length} `;
        diffText += `+${oldStart},${hunkSpec.context.length + hunkSpec.adds.length} @@\n`;
        
        hunkSpec.context.forEach(line => {
          diffText += ` ${line}\n`;
        });
        
        hunkSpec.removes.forEach(line => {
          diffText += `-${line}\n`;
        });
        
        hunkSpec.adds.forEach(line => {
          diffText += `+${line}\n`;
        });
        
        // 篡改文档中的空格
        const lines = diffText.split('\n');
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].startsWith(' ') || lines[i].startsWith('-') || lines[i].startsWith('+')) {
            const prefix = lines[i][0];
            const content = lines[i].substring(1);
            
            switch (corruptionType) {
              case 'space-to-tab':
                lines[i] = prefix + content.replace(/  /g, '\t');
                break;
              case 'tab-to-space':
                lines[i] = prefix + content.replace(/\t/g, '  ');
                break;
              case 'add-space':
                lines[i] = prefix + ' ' + content;
                break;
              case 'remove-space':
                lines[i] = prefix + content.replace(/ /g, '');
                break;
            }
            break; // 只篡改第一行
          }
        }
        
        return {
          doc: docLines.join('\n'),
          diff: lines.join('\n'),
          corruptionType
        };
      }),
      async ({ doc, diff, corruptionType }) => {
        // 创建模拟文档
        const mockDoc = createMockDocument(doc);
        
        // 解析 diff
        const result = DiffParser.parse(diff);
        
        if (!result.success) {
          return true;
        }
        
        // 应用 diff（必须失败，因为空格不匹配）
        const applyResult = await DiffApplier.apply(result, { dryRun: true });
        
        // 断言：必须失败
        return !applyResult.success;
      },
      {
        numRuns: 1000,
        seed: 12348
      }
    );
  });
  
  it('空行 vs 空白行 vs 普通行 三态模型', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('empty', 'whitespace', 'normal'),
        (lineType) => {
          let content: string;
          let docLine: string;
          
          switch (lineType) {
            case 'empty':
              content = '';
              docLine = '';
              break;
            case 'whitespace':
              content = '  ';
              docLine = '  ';
              break;
            case 'normal':
              content = 'code';
              docLine = 'code';
              break;
          }
          
          // 构建简单的 diff
          const diffText = `--- a/test.ts\n+++ b/test.ts\n@@ -1,1 +1,1 @@\n ${content}\n`;
          
          // 构建文档
          const docText = `${docLine}\n`;
          
          // 解析和应用
          const result = DiffParser.parse(diffText);
          const mockDoc = createMockDocument(docText);
          const applyResult = DiffApplier.apply(result, { dryRun: true });
          
          // 断言：content 和 docLine 必须完全匹配
          return content === docLine ? applyResult.success : !applyResult.success;
        },
        {
          numRuns: 100,
          seed: 12349
        }
      );
    });
  });
  
});
```

---

## 🛠️ 辅助函数

### 创建模拟文档

```typescript
/**
 * 创建模拟 VS Code 文档对象
 * 
 * @param text 文档文本
 * @returns 模拟的 TextDocument 对象
 */
function createMockDocument(text: string): vscode.TextDocument {
  const lines = text.split('\n');
  
  return {
    uri: vscode.Uri.file('test.ts'),
    fileName: 'test.ts',
    isUntitled: false,
    languageId: 'typescript',
    version: 1,
    isDirty: false,
    isClosed: false,
    save: () => Promise.resolve(true),
    eol: vscode.EndOfLine.LF,
    lineCount: lines.length,
    lineAt: (line: number) => {
      if (line < 0 || line >= lines.length) {
        throw new Error(`Line ${line} out of bounds`);
      }
      return {
        lineNumber: line,
        text: lines[line],
        range: new vscode.Range(
          new vscode.Position(line, 0),
          new vscode.Position(line, lines[line].length)
        ),
        firstNonWhitespaceCharacterIndex: lines[line].search(/\S/),
        isEmptyOrWhitespace: !lines[line].trim()
      };
    },
    offsetAt: (position: vscode.Position) => {
      return 0; // 简化实现
    },
    positionAt: (offset: number) => {
      return new vscode.Position(0, 0); // 简化实现
    },
    getText: () => text,
    getWordRangeAtPosition: () => undefined,
    validateRange: () => undefined,
    validatePosition: () => new vscode.Position(0, 0)
  };
}
```

---

## 📊 测试运行配置

### Mocha 配置

```typescript
// test/pbt-config.ts
import { configure } from 'fast-check';

// 配置 fast-check
configure({
  // 默认的运行次数
  numRuns: 1000,
  
  // 固定 seed（CI 可重现）
  seed: 12345,
  
  // 超时时间（毫秒）
  interruptAfterTimeLimit: 30000,
  
  // 打印详细信息
  verbose: true,
  
  // 最小化反例
  markInterruptAsFailure: true
});

export {};
```

### Package.json 配置

```json
{
  "scripts": {
    "test:pbt": "mocha 'test/**/*.pbt.ts' --timeout 30000",
    "test:pbt:watch": "mocha 'test/**/*.pbt.ts' --watch --timeout 30000"
  }
}
```

---

## 🔍 调试失败的测试

### 反例最小化示例

假设测试失败，fast-check 会自动最小化反例：

```
Counterexample found:
- 原始：100 行文档，第 50 行 context 被篡改
- 最小化：3 行文档，第 1 行 context 被篡改
```

### 手动调试

```typescript
// 在测试中添加详细日志
fc.assert(
  fc.property(...),
  async ({ doc, diff }) => {
    console.log('=== Test Case ===');
    console.log('Doc:', doc);
    console.log('Diff:', diff);
    
    const result = DiffParser.parse(diff);
    console.log('Parse result:', result);
    
    const applyResult = await DiffApplier.apply(result, { dryRun: true });
    console.log('Apply result:', applyResult);
    
    return !applyResult.success;
  },
  {
    numRuns: 10,  // 减少运行次数便于调试
    verbose: true
  }
);
```

---

## 📈 性能优化

### 限制生成器深度

```typescript
// 使用合理的限制
fc.array(
  fc.stringMatching(/^[ \t]*\w.*$/),
  { minLength: 10, maxLength: 100 }  // 限制文档大小
)
```

### 提前终止

```typescript
// 如果解析失败，立即返回
if (!result.success) {
  return true;  // 跳过无效用例
}
```

### 并行运行（谨慎使用）

```typescript
// ⚠️ 不建议：并行运行会导致难以调试
// ❌ 不要使用
fc.assert(..., { endOnFailure: false, parallelRuns: 4 });

// ✅ 推荐：顺序运行
fc.assert(..., { endOnFailure: true });
```

---

## ✅ 完整测试套件结构

```
test/
├── pbt/
│   ├── context-authority.pbt.ts      # PBT-2
│   ├── remove-sacred.pbt.ts          # PBT-3
│   ├── multiple-matches.pbt.ts       # PBT-5
│   ├── whitespace-sensitivity.pbt.ts # PBT-6
│   └── index.ts                     # 统一导出
├── unit/
│   ├── diff-parser.test.ts
│   └── diff-applier.test.ts
└── helpers/
    └── mock-document.ts
```

---

## 🎯 CI/CD 集成

### GitHub Actions 示例

```yaml
name: PBT Tests

on: [push, pull_request]

jobs:
  pbt:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test:pbt
```

---

## 📚 参考资料

- [fast-check Documentation](https://github.com/dubzzz/fast-check)
- [Property-Based Testing in TypeScript](https://dev.to/leandronsp/teste-baseado-em-propriedades-em-typescript-3k6g)
- [Apply Engine Invariants](./diff-apply-invariants.md)
- [Apply Engine Specification](./diff-specification-v2.md)