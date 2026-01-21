import fs from 'fs';
import path from 'path';
import os from 'os';

export type KGNodeType = 'context' | 'execution' | 'skill';

export type KGEdgeType =
  | 'used_in'        // Context -> Execution
  | 'validated_by'   // Execution -> Skill
  | 'promoted_to'    // Context -> Skill
  | 'derived_from';  // Skill -> Context (optional)

export interface KnowledgeGraphEdge {
  from: string;
  to: string;
  type: KGEdgeType;
  timestamp: number;
  meta?: Record<string, any>;
}

const KG_DIR = path.join(os.homedir(), '.yuangs', 'knowledge');
const KG_FILE = path.join(KG_DIR, 'graph.jsonl');

function ensureDir() {
  if (!fs.existsSync(KG_DIR)) {
    fs.mkdirSync(KG_DIR, { recursive: true });
  }
}

/**
 * 记录一条不可变的知识图谱边 (Append-only Fact)
 */
export function recordEdge(edge: KnowledgeGraphEdge) {
  try {
    ensureDir();
    // 简单的 JSONL 格式：一行一个 JSON 对象
    const line = JSON.stringify({
        ...edge,
        // 确保 timestamp 存在
        timestamp: edge.timestamp || Date.now()
    });
    
    fs.appendFileSync(KG_FILE, line + '\n', 'utf8');
  } catch (error) {
    // 容错：KG 记录失败不应阻断主流程
    console.warn('[KnowledgeGraph] Failed to record edge:', error);
  }
  // NOTE: sync write is acceptable at current scale (<100 edges / run)
}