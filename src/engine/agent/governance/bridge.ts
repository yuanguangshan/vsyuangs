import fs from 'fs';
import path from 'path';

export class WasmGovernanceBridge {
    private static instance: any = null;

    static async init(basePath?: string): Promise<boolean> {
        try {
            const loader = require('@assemblyscript/loader');
            const wasmPath = path.join(basePath || process.cwd(), 'build', 'release.wasm');

            if (!fs.existsSync(wasmPath)) {
                console.error(`WASM not found at: ${wasmPath}`);
                return false;
            }

            const wasmModule = await loader.instantiate(fs.readFileSync(wasmPath));
            this.instance = wasmModule.exports;
            return true;
        } catch (e) {
            console.error(`WASM init error: ${e}`);
            return false;
        }
    }

    static evaluate(proposal: any, rules: any, ledger: any): any {
        if (!this.instance) return { effect: 'error', reason: 'WASM not initialized' };

        const { __newString, __getString, evaluate } = this.instance;

        const pPtr = __newString(JSON.stringify(proposal));
        const rPtr = __newString(JSON.stringify(rules));
        const lPtr = __newString(JSON.stringify(ledger));

        const resultPtr = evaluate(pPtr, rPtr, lPtr);
        return JSON.parse(__getString(resultPtr));
    }
}
