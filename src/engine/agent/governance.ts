import { ProposedAction, GovernanceDecision } from './state';
import { evaluateProposal, PolicyRule, RiskEntry } from './governance/core';
import { RiskLedger } from './governance/ledger';
import { WasmGovernanceBridge } from './governance/bridge';
import jsyaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

export class GovernanceService {
  private static rules: PolicyRule[] = [];
  private static ledger = new RiskLedger();
  private static initialized = false;

  static async init(basePath?: string) {
    if (this.initialized) return;
    this.loadPolicy(basePath);
    await WasmGovernanceBridge.init(basePath);
    this.initialized = true;
  }

  private static loadPolicy(basePath?: string) {
    try {
      const root = basePath || process.cwd();
      const policyPath = path.join(root, 'policy.yaml');
      if (fs.existsSync(policyPath)) {
        const content = fs.readFileSync(policyPath, 'utf8');
        const config = jsyaml.load(content) as any;
        this.rules = config.rules || [];
      }
    } catch (e) {
      this.rules = [];
    }
  }

  static getRules(): PolicyRule[] {
    return this.rules;
  }

  static getLedgerSnapshot(): RiskEntry[] {
    return this.ledger.getSnapshot();
  }

  static getPolicyManual(): string {
    return this.rules.map(r => `- ${r.id}: ${r.reason} (${r.effect})`).join('\n');
  }

  static async adjudicate(action: ProposedAction): Promise<GovernanceDecision> {
    await this.init();

    // 1. WASM 物理层核验
    const wasmResult = WasmGovernanceBridge.evaluate(action, this.rules, this.ledger.getSnapshot());
    if (wasmResult.effect === 'deny') {
      return { status: 'rejected', by: 'policy', reason: wasmResult.reason || 'WASM Denied', timestamp: Date.now() };
    }

    // 2. 逻辑层核验
    const logicResult = evaluateProposal(action, this.rules, this.ledger.getSnapshot());
    if (logicResult.effect === 'deny') {
      return { status: 'rejected', by: 'policy', reason: logicResult.reason || 'Policy Denied', timestamp: Date.now() };
    }

    // 🌟 3. 集成 Trusted AI Agent Engine (Day 24)
    try {
      // 动态导入，避免编译时强耦合
      const { TrustedGuard, parseUnifiedDiff } = require('trusted-agent-engine');
      const root = process.cwd();
      
      let files: string[] = [];
      let diff = '';
      if (action.type === 'code_diff' && action.payload?.diff) {
        diff = action.payload.diff;
        const analysis = parseUnifiedDiff(diff);
        files = analysis.filesTouched;
      }

      const proposal = {
        id: action.id,
        timestamp: Date.now(),
        author: 'vsyuangs-agent',
        reasoning: action.reasoning,
        files: files,
        diff: diff
      };

      const decision = await TrustedGuard.evaluate(root, proposal);
      if (!decision.allowed) {
        return { 
          status: 'rejected', 
          by: 'policy', 
          reason: `Trusted-Engine Rejected: ${decision.violations.map((v: any) => v.description).join('; ')}`, 
          timestamp: Date.now() 
        };
      }
      console.log(`[Trusted-Engine] Valued at: ${decision.valueScore}`);
    } catch (e) {
      console.warn('[Governance] Trusted-Engine integration failed or not found, skipping deeper audit:', e);
    }

    if (logicResult.effect === 'allow') {
      this.ledger.record(action.type);
      return { status: 'approved', by: 'policy', timestamp: Date.now() };
    }

    // 4. 人工干预兜底 (模拟)
    return { status: 'approved', by: 'human', timestamp: Date.now() };
  }
}
