import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';
import { PreferenceMemory } from '../src/vscode/guard/preferences';
import { CommitGroup } from '../src/vscode/guard/types';

describe('PreferenceMemory', () => {
  let memory: PreferenceMemory;

  beforeEach(() => {
    memory = new PreferenceMemory();
  });

  describe('recordDisagreement', () => {
    it('should record disagreements properly', () => {
      const record = {
        file: 'test.tsx',
        predicted: 'ui' as CommitGroup,
        confidence: 0.8,
        userChoice: 'logic' as CommitGroup,
        timestamp: Date.now()
      };

      memory.recordDisagreement(record);

      const recentDisagreements = memory.getRecentDisagreements(10);
      expect(recentDisagreements).to.have.length(1);
      expect(recentDisagreements[0]).to.deep.equal(record);
    });

    it('should adjust weights based on disagreements', () => {
      const record = {
        file: 'test.tsx',
        predicted: 'ui' as CommitGroup,
        confidence: 0.9, // High confidence wrong prediction should have bigger penalty
        userChoice: 'logic' as CommitGroup,
        timestamp: Date.now()
      };

      memory.recordDisagreement(record);

      // Check that the weight multiplier is reduced
      const multiplier = memory.getWeightMultiplier('disagreement-correction', 'ui');
      expect(multiplier).to.be.lessThan(1);
    });
  });

  describe('getWeightMultiplier', () => {
    it('should return default multiplier when no adjustments exist', () => {
      const multiplier = memory.getWeightMultiplier('unknown-source', 'ui');
      expect(multiplier).to.equal(1); // Default value
    });

    it('should return adjusted multiplier after disagreements', () => {
      const record = {
        file: 'test.tsx',
        predicted: 'ui' as CommitGroup,
        confidence: 0.7,
        userChoice: 'logic' as CommitGroup,
        timestamp: Date.now()
      };

      memory.recordDisagreement(record);

      const multiplier = memory.getWeightMultiplier('disagreement-correction', 'ui');
      expect(multiplier).to.be.lessThan(1);
      expect(multiplier).to.be.greaterThanOrEqual(0.5); // Within bounds
    });
  });

  describe('getRecentDisagreements', () => {
    it('should return recent disagreements in descending order', () => {
      const now = Date.now();
      const records = [
        { file: 'test1.tsx', predicted: 'ui' as CommitGroup, confidence: 0.8, userChoice: 'logic' as CommitGroup, timestamp: now - 1000 },
        { file: 'test2.tsx', predicted: 'logic' as CommitGroup, confidence: 0.6, userChoice: 'ui' as CommitGroup, timestamp: now },
        { file: 'test3.tsx', predicted: 'docs' as CommitGroup, confidence: 0.9, userChoice: 'chore' as CommitGroup, timestamp: now - 2000 }
      ];

      records.forEach(record => memory.recordDisagreement(record));

      const recent = memory.getRecentDisagreements(5);
      expect(recent).to.have.length(3);
      expect(recent[0].file).to.equal('test2.tsx'); // Most recent
      expect(recent[2].file).to.equal('test3.tsx'); // Oldest
    });

    it('should limit results to specified count', () => {
      const now = Date.now();
      for (let i = 0; i < 10; i++) {
        memory.recordDisagreement({
          file: `test${i}.tsx`,
          predicted: 'ui' as CommitGroup,
          confidence: 0.5,
          userChoice: 'logic' as CommitGroup,
          timestamp: now - i * 1000
        });
      }

      const recent = memory.getRecentDisagreements(5);
      expect(recent).to.have.length(5);
    });
  });

  describe('clearOldRecords', () => {
    it('should remove records older than 7 days', () => {
      const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000 - 1000; // Just over 7 days ago
      const recentTime = Date.now() - 1000; // Recent

      memory.recordDisagreement({
        file: 'old.tsx',
        predicted: 'ui' as CommitGroup,
        confidence: 0.8,
        userChoice: 'logic' as CommitGroup,
        timestamp: sevenDaysAgo
      });

      memory.recordDisagreement({
        file: 'recent.tsx',
        predicted: 'logic' as CommitGroup,
        confidence: 0.6,
        userChoice: 'ui' as CommitGroup,
        timestamp: recentTime
      });

      memory.clearOldRecords();

      const recent = memory.getRecentDisagreements(10);
      expect(recent).to.have.length(1);
      expect(recent[0].file).to.equal('recent.tsx');
    });
  });
});