import { Vote, CommitGroup, GroupExplanation } from './types';

export class VotingFileClassifier {
  classify(filePath: string, diff: string): GroupExplanation {
    const votes: Vote[] = [];

    this.collectPathVotes(filePath, votes);
    this.collectDiffVotes(diff, votes);
    this.collectKeywordVotes(diff, votes);

    return this.aggregate(votes);
  }

  private aggregate(votes: Vote[]): GroupExplanation {
    const scores = new Map<CommitGroup, number>();

    for (const v of votes) {
      scores.set(v.category, (scores.get(v.category) ?? 0) + v.weight);
    }

    if (scores.size === 0) {
      return {
        category: 'other',
        confidence: 0,
        reasons: ['No classification signals detected'],
        votes
      };
    }

    const sorted = [...scores.entries()].sort((a, b) => b[1] - a[1]);
    const [top, second] = sorted;

    const total = [...scores.values()].reduce((a, b) => a + b, 0) || 1;
    const confidence =
      second ? (top[1] - second[1]) / total : top[1] / total;

    if (confidence < 0.3) {
      return {
        category: 'other',
        confidence,
        reasons: ['Low confidence, human confirmation required'],
        votes
      };
    }

    return {
      category: top[0],
      confidence,
      reasons: votes
        .filter(v => v.category === top[0])
        .map(v => v.reason),
      votes
    };
  }

  private collectPathVotes(path: string, votes: Vote[]) {
    if (path.includes('/ui/') || path.endsWith('.css') || path.endsWith('.scss') || path.endsWith('.jsx') || path.endsWith('.tsx')) {
      votes.push({
        category: 'ui',
        weight: 0.4,
        reason: 'UI-related file path',
        source: 'path'
      });
    }

    if (path.includes('/test/') || path.includes('__tests__/') || path.endsWith('.spec.ts') || path.endsWith('.test.ts') || path.endsWith('.spec.js') || path.endsWith('.test.js')) {
      votes.push({
        category: 'test',
        weight: 0.5,
        reason: 'Test file path',
        source: 'path'
      });
    }

    if (path.endsWith('.md') || path.endsWith('.txt') || path.includes('/docs/')) {
      votes.push({
        category: 'docs',
        weight: 0.6,
        reason: 'Documentation file',
        source: 'path'
      });
    }

    if (path.includes('/config/') || path.includes('.config.') || path.endsWith('.json') || path.endsWith('.yaml') || path.endsWith('.yml')) {
      votes.push({
        category: 'chore',
        weight: 0.2,
        reason: 'Configuration file',
        source: 'path'
      });
    }
  }

  private collectDiffVotes(diff: string, votes: Vote[]) {
    if (diff.match(/<[^>]+>/) || diff.includes('className=') || diff.includes('style=')) {
      votes.push({
        category: 'ui',
        weight: 0.3,
        reason: 'JSX / HTML diff detected',
        source: 'diff'
      });
    }

    if (diff.includes('describe(') || diff.includes('it(') || diff.includes('test(') || diff.includes('expect(')) {
      votes.push({
        category: 'test',
        weight: 0.4,
        reason: 'Test framework syntax detected',
        source: 'diff'
      });
    }

    if (diff.includes('console.log') || diff.includes('debugger') || diff.includes('// TODO') || diff.includes('// FIXME')) {
      votes.push({
        category: 'chore',
        weight: 0.1,
        reason: 'Debugging code detected',
        source: 'diff'
      });
    }
  }

  private collectKeywordVotes(diff: string, votes: Vote[]) {
    if (diff.toLowerCase().includes('readme') || diff.toLowerCase().includes('documentation') || diff.toLowerCase().includes('doc:')) {
      votes.push({
        category: 'docs',
        weight: 0.3,
        reason: 'Documentation keywords detected',
        source: 'keyword'
      });
    }

    if (diff.toLowerCase().includes('refactor') || diff.toLowerCase().includes('cleanup') || diff.toLowerCase().includes('perf:')) {
      votes.push({
        category: 'chore',
        weight: 0.2,
        reason: 'Chore-related keywords detected',
        source: 'keyword'
      });
    }

    if (diff.toLowerCase().includes('fix:') || diff.toLowerCase().includes('bug') || diff.toLowerCase().includes('error')) {
      votes.push({
        category: 'logic',
        weight: 0.3,
        reason: 'Bug fix keywords detected',
        source: 'keyword'
      });
    }
  }
}