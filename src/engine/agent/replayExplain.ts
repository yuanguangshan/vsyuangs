import { ExecutionTurn } from './state';
import { ExecutionRecorder } from './executionRecorder';
import { generateSkillHintsFromContext, formatSkillHints, ContextSkillHint } from './contextSkillBridge';
import { ContextManager } from './contextManager';

export function explainExecution(recorder: ExecutionRecorder, contextManager?: ContextManager): string {
  const turns = recorder.getTurns();
  const summary = recorder.getSummary();

  const lines: string[] = [];

  lines.push('# Execution Explanation Report');
  lines.push('');
  lines.push('## Summary');
  lines.push(`- Total Turns: ${summary.totalTurns}`);
  lines.push(`- Added Context Items: ${summary.totalAddedContext}`);
  lines.push(`- Removed Context Items: ${summary.totalRemovedContext}`);
  lines.push(`- Changed Context Items: ${summary.totalChangedContext}`);
  lines.push('');

  // 如果提供了ContextManager，生成Skill Hints
  if (contextManager) {
    const contextItems = contextManager.getContextBuffer().export();
    const skillHints = generateSkillHintsFromContext(contextItems);

    if (skillHints.length > 0) {
      lines.push('## Skill Suggestions from Context');
      lines.push(formatSkillHints(skillHints));
      lines.push('');
    }
  }

  lines.push('## Detailed Turn-by-Turn Analysis');
  lines.push('');

  for (const turn of turns) {
    lines.push(`### Turn ${turn.turnId}`);
    lines.push('');

    if (turn.startTime) {
      lines.push(`- Start Time: ${new Date(turn.startTime).toISOString()}`);
    }

    if (turn.endTime) {
      lines.push(`- End Time: ${new Date(turn.endTime).toISOString()}`);
    }

    if (turn.contextDiff) {
      lines.push('');
      lines.push('#### Context Changes:');

      if (turn.contextDiff.added.length > 0) {
        lines.push('- Added:');
        for (const item of turn.contextDiff.added) {
          lines.push(`  - ${item}`);
        }
      }

      if (turn.contextDiff.removed.length > 0) {
        lines.push('- Removed:');
        for (const item of turn.contextDiff.removed) {
          lines.push(`  - ${item}`);
        }
      }

      if (turn.contextDiff.changed.length > 0) {
        lines.push('- Changed:');
        for (const item of turn.contextDiff.changed) {
          lines.push(`  - ${item}`);
        }
      }
    }

    if (turn.proposedAction) {
      lines.push('');
      lines.push(`#### Action Type: ${turn.proposedAction.type}`);
      lines.push(`- Reasoning: ${turn.proposedAction.reasoning}`);
    }

    if (turn.governance) {
      lines.push('');
      lines.push(`#### Governance Decision: ${turn.governance.status}`);
      if (turn.governance.reason) {
        lines.push(`- Reason: ${turn.governance.reason}`);
      }
      lines.push(`- Decided by: ${turn.governance.by}`);
    }

    if (turn.executionResult) {
      lines.push('');
      lines.push(`#### Execution Result: ${turn.executionResult.success ? 'SUCCESS' : 'FAILURE'}`);
      if (turn.executionResult.error) {
        lines.push(`- Error: ${turn.executionResult.error}`);
      }
    }

    lines.push('');
  }

  return lines.join('\n');
}

export function replayExecution(recorder: ExecutionRecorder, options: { showContextDiff?: boolean } = {}): string {
  const { showContextDiff = true } = options;
  const turns = recorder.getTurns();
  const lines: string[] = [];

  lines.push('# Execution Replay');
  lines.push('');

  for (const turn of turns) {
    lines.push(`## Turn ${turn.turnId}`);
    
    if (showContextDiff && turn.contextDiff) {
      lines.push('');
      lines.push('### Context Diff:');
      
      if (turn.contextDiff.added.length > 0) {
        lines.push('Added:');
        for (const item of turn.contextDiff.added) {
          lines.push(`  + ${item}`);
        }
      }
      
      if (turn.contextDiff.removed.length > 0) {
        lines.push('Removed:');
        for (const item of turn.contextDiff.removed) {
          lines.push(`  - ${item}`);
        }
      }
      
      if (turn.contextDiff.changed.length > 0) {
        lines.push('Changed:');
        for (const item of turn.contextDiff.changed) {
          lines.push(`  ~ ${item}`);
        }
      }
      
      if (!turn.contextDiff.added.length && 
          !turn.contextDiff.removed.length && 
          !turn.contextDiff.changed.length) {
        lines.push('(No context changes)');
      }
    }
    
    if (turn.proposedAction) {
      lines.push('');
      lines.push(`Action: ${turn.proposedAction.type}`);
      lines.push(`Reasoning: ${turn.proposedAction.reasoning}`);
    }
    
    if (turn.executionResult) {
      lines.push('');
      lines.push(`Result: ${turn.executionResult.success ? 'SUCCESS' : 'FAILURE'}`);
    }
    
    lines.push('');
  }

  return lines.join('\n');
}