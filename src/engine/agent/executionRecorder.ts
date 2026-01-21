import { ExecutionTurn } from './state';
import { ContextDiff } from './contextDiff';

export class ExecutionRecorder {
  private turns: ExecutionTurn[] = [];
  private turnCounter = 0;

  recordTurn(turn: Omit<ExecutionTurn, 'turnId'>): ExecutionTurn {
    const executionTurn: ExecutionTurn = {
      ...turn,
      turnId: ++this.turnCounter
    };

    this.turns.push(executionTurn);
    return executionTurn;
  }

  getTurns(): ExecutionTurn[] {
    return [...this.turns];
  }

  clear(): void {
    this.turns = [];
    this.turnCounter = 0;
  }

  getSummary(): {
    totalTurns: number;
    totalAddedContext: number;
    totalRemovedContext: number;
    totalChangedContext: number;
  } {
    return {
      totalTurns: this.turns.length,
      totalAddedContext: this.turns.reduce((sum, turn) => 
        sum + (turn.contextDiff?.added.length || 0), 0),
      totalRemovedContext: this.turns.reduce((sum, turn) => 
        sum + (turn.contextDiff?.removed.length || 0), 0),
      totalChangedContext: this.turns.reduce((sum, turn) => 
        sum + (turn.contextDiff?.changed.length || 0), 0)
    };
  }
}