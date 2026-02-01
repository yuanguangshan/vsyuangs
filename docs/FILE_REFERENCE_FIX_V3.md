# File @Reference Fix - Version 3

## Problem Description

When users @mention files in the chat dialog (e.g., `@package.json`), the AI still cannot read them even though the file content is loaded into the context buffer.

## Root Cause Analysis

The issue was in `src/engine/agent/llmAdapter.ts` in the `think()` method. When streaming is enabled (which happens in UI mode), the context building logic had two problems:

### Problem 1: Wrong Sorting Strategy
```typescript
// BEFORE (wrong)
if (onChunk) {
  contextPrompt = contextBuffer.buildPrompt('', {
    strategy: 'recent',  // ❌ Sorts by timestamp, not importance
    maxTokens: 4000
  });
}
```

- Used `'recent'` strategy which sorts context items by `lastUsed` timestamp
- This meant @referenced files (with high importance: 1.0) could be outranked by more recent but less important items
- The AI might not see the @referenced file content at all if it was pushed beyond the token limit

### Problem 2: Insufficient Token Limit
```typescript
// BEFORE (wrong)
maxTokens: 4000  // ❌ Too low, cuts off important content
```

- Only 4000 tokens (~16,000 characters) allowed in streaming mode
- This is easily exceeded by:
  - System prompts
  - Active editor content
  - Git diff
  - Diagnostics
  - Multiple @referenced files

## The Fix

```typescript
// AFTER (fixed)
if (onChunk) {
  contextPrompt = contextBuffer.buildPrompt('', {
    strategy: 'ranked',  // ✅ Sorts by importance score
    maxTokens: 12000     // ✅ 3x more space for context
  });
}
```

### Change 1: Use 'ranked' Strategy
- Sorts context items by computed importance score
- @referenced files have `importance.confidence = 1.0` (highest)
- These files will always appear at the top of the context
- The AI is guaranteed to see user @referenced files first

### Change 2: Increase Token Limit
- Increased from 4000 to 12000 tokens (48,000 characters)
- Provides 3x more space for context
- Ensures @referenced files are included even with other context items present
- Still balanced to avoid excessive context that slows down AI

## How @References Get High Importance

In `src/vscode/core/contextAdapter.ts`:

```typescript
await this.contextManager.addContextItemAsync({
  type: 'file',
  path: fileUri.fsPath,
  content: content,
  // ... other fields
  importance: {
    id: fileUri.fsPath,
    path: fileUri.fsPath,
    type: 'file',
    useCount: 1,
    successCount: 1,
    failureCount: 0,
    lastUsed: Date.now(),
    confidence: 1.0  // ✅ Highest possible importance
  },
  tags: ['user-referenced', 'explicit']  // ✅ Explicitly tagged
});
```

## Why This Works

### Before Fix
1. User types: `@package.json What dependencies are installed?`
2. File loaded into context buffer with `confidence: 1.0`
3. **BUT**: Context built with `strategy: 'recent'` and `maxTokens: 4000`
4. Recent but less important items (active editor, diagnostics) might be included first
5. **Result**: @package.json might be cut off or buried in context

### After Fix
1. User types: `@package.json What dependencies are installed?`
2. File loaded into context buffer with `confidence: 1.0`
3. Context built with `strategy: 'ranked'` and `maxTokens: 12000`
4. Items sorted by importance: @references (1.0) > active editor (0.9) > selection (1.0) > ...
5. **Result**: @package.json appears at top of context, AI definitely sees it

## Testing

To verify the fix works:

1. Open a file in VS Code
2. Open the Yuangs AI chat panel
3. Type: `@package.json What dependencies are installed?`
4. The AI should be able to read and analyze the package.json file
5. Check the developer console for logs showing the file was loaded:
   ```
   [ContextAdapter] ✅ Added referenced file: /path/to/package.json
   ```

## Performance Impact

- Minimal: The 'ranked' strategy was already used in non-streaming mode
- Slightly increased token usage (4000 → 12000 in streaming)
- Trade-off: Better context accuracy vs. slightly higher API costs
- Considered acceptable given the critical importance of user @references

## Related Files

- `src/engine/agent/llmAdapter.ts` - **Modified**
- `src/vscode/core/contextAdapter.ts` - Loads @references with high importance
- `src/engine/agent/contextBuffer.ts` - Provides `buildPrompt()` with ranking logic
- `src/vscode/core/runtime.ts` - Orchestrates context loading before AI call

## Previous Attempts

- **v1**: Added `resolveUserReferences()` but had async timing issues
- **v2**: Fixed async timing with `flush()` calls, improved duplicate handling
- **v3** (this fix): Addresses context building strategy and token limits

## Conclusion

The fix ensures that user @referenced files are always prioritized in the AI's context by:
1. Using the 'ranked' strategy to sort by importance
2. Providing sufficient token space to include @references
3. Maintaining backward compatibility with existing functionality

This is a targeted fix that addresses the core issue without requiring major refactoring.