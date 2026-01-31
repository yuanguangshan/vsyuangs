import { CommitGroup } from './types';

export interface DisagreementRecord {
  file: string;
  predicted: CommitGroup;
  confidence: number;
  userChoice: CommitGroup;
  timestamp: number;
}

export interface WeightAdjustment {
  source: string;
  category: CommitGroup;
  adjustment: number;
  timestamp: number;
}

export class PreferenceMemory {
  private disagreementLog: DisagreementRecord[] = [];
  private weightAdjustments: WeightAdjustment[] = [];
  
  recordDisagreement(record: DisagreementRecord): void {
    this.disagreementLog.push(record);
    
    // Adjust weights based on disagreement
    const confidenceFactor = Math.abs(record.confidence - 0.5) * 2; // Higher penalty for confident wrong predictions
    const adjustment = -0.1 * confidenceFactor;
    
    this.weightAdjustments.push({
      source: 'disagreement-correction',
      category: record.predicted,
      adjustment,
      timestamp: record.timestamp
    });
  }
  
  getWeightMultiplier(source: string, category: CommitGroup): number {
    // Get recent adjustments for this source-category combination
    const recentAdjustments = this.weightAdjustments
      .filter(adj => adj.source === source && adj.category === category)
      .filter(adj => Date.now() - adj.timestamp < 7 * 24 * 60 * 60 * 1000); // Last 7 days
      
    const totalAdjustment = recentAdjustments.reduce((sum, adj) => sum + adj.adjustment, 0);
    
    // Ensure multiplier stays within reasonable bounds
    return Math.max(0.5, Math.min(1.5, 1 + totalAdjustment));
  }
  
  getRecentDisagreements(limit: number = 10): DisagreementRecord[] {
    return this.disagreementLog
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, limit);
  }
  
  clearOldRecords(): void {
    const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    
    this.disagreementLog = this.disagreementLog.filter(record => record.timestamp > weekAgo);
    this.weightAdjustments = this.weightAdjustments.filter(adj => adj.timestamp > weekAgo);
  }
}