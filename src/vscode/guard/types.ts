export type CommitGroup =
  | 'ui'
  | 'logic'
  | 'docs'
  | 'test'
  | 'chore'
  | 'other';

export interface Vote {
  category: CommitGroup;
  weight: number; // 0.1 ~ 1.0
  reason: string;
  source: 'path' | 'diff' | 'keyword' | 'ast' | 'history';
}

export interface GroupExplanation {
  category: CommitGroup;
  confidence: number; // 0.0 ~ 1.0
  reasons: string[];
  votes: Vote[];
}