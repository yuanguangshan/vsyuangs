/**
 * vsyuangs v1.3-v1.4 安全扫描测试文件
 * 
 * 使用说明：
 * 1. 保存此文件（Ctrl+S）触发自动扫描
 * 2. 观察状态栏和弹窗警告
 * 3. 点击问题行的"灯泡"图标查看修复选项
 * 4. 尝试"忽略此次"或"不再提示此类建议"
 */
// ========================================
// 🚨 CRITICAL：高危安全风险（会弹窗警告）
// ========================================

// 1. AWS Access Key 泄露（CRITICAL）
const awsKey = "AKIAIOSFODNN7EXAMPLE"; // ⚠️ 密钥泄露

// 2. GitHub Token 泄露（CRITICAL）
const githubToken = "ghp_1234567890abcdefghijklmnopqrst"; // ⚠️ Token 泄露

// 3. eval() 危险函数（CRITICAL）
const code = "console.log('hello')";
eval(code); // ⚠️ 危险函数

// 4. 私钥内容（CRITICAL）
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAyKZ7Y5X4l8X9Q2W3X9Y2Z1X4Y5Z3X9Y2Z1X4Y5Z3X9Y2Z1X4Y
...
-----END RSA PRIVATE KEY-----`; // ⚠️ 私钥泄露

// ========================================
// 🔴 ERROR：严重错误（红色波浪线）
// ========================================

// 5. SQL 注入风险（ERROR）
const userId = "1 OR 1=1";
const query = `SELECT * FROM users WHERE id = ${userId}`; // ⚠️ SQL 注入

// 6. 路径穿越风险（ERROR）
const userInput = "../../../etc/passwd";
const filePath = `/var/www/${userInput}`; // ⚠️ 路径穿越

// 7. 硬编码绝对路径（ERROR）
const config = {
  databasePath: "/absolute/path/to/database.db" // ⚠️ 硬编码路径
};

// ========================================
// ⚠️ WARNING：警告（黄色波浪线）
// ========================================

// 8. 同步文件操作（WARNING）
const data = fs.readFileSync("config.json", "utf8"); // ⚠️ 阻塞事件循环

// 9. 同步 JSON 解析（WARNING）
const config2 = JSON.parse(fs.readFileSync("config2.json", "utf8")); // ⚠️ 性能问题

// ========================================
// ℹ️ INFO：信息提示（蓝色波浪线）
// ========================================

// 10. TODO 注释（INFO）
// TODO: 实现这个函数
function incompleteFunction() {
  console.log("not implemented yet");
}

// 11. FIXME 注释（INFO）
// FIXME: 修复这个 bug
const buggyCode = "1 + '1'"; // 类型错误

// 12. console.log（INFO）
console.log("调试信息：这里有个 console.log"); // ⚠️ 生产环境应移除

// ========================================
// 📚 测试功能说明
// ========================================

/**
 * 测试步骤：
 * 
 * 1️⃣ 保存文件（Ctrl+S）
 *    → 观察状态栏：显示"扫描中..." → "发现 X 个问题"
 *    → 如果有 CRITICAL 问题，会弹出红色警告框
 * 
 * 2️⃣ 点击问题行的"灯泡"图标
 *    → 看到多个选项：
 *      - 应用修复：查看修复建议
 *      - 查看详情：查看问题详细信息
 *      - 忽略此次：单次忽略
 *      - 不再提示此类建议：加入黑名单
 *      - 撤回黑名单：恢复提示
 * 
 * 3️⃣ 测试黑名单功能
 *    → 找到一个 INFO 级别的问题（如 console.log）
 *    → 点击"不再提示此类建议"
 *    → 以后 console.log 不再提示（AI 记住了）
 * 
 * 4️⃣ 查看统计信息
 *    → 按 Ctrl+Shift+P
 *    → 输入 "vsyuangs: 显示扫描统计"
 *    → 查看扫描次数、耗时、黑名单/白名单
 * 
 * 5️⃣ 测试配置修改
 *    → 打开 VS Code 设置
 *    → 搜索 "vsyuangs.proactiveScan"
 *    → 修改配置（如禁用扫描）
 *    → 立即生效，无需重启 VS Code
 * 
 * 6️⃣ 测试撤回功能
 *    → 点击某个问题的"撤回黑名单"
 *    → 该类问题重新开始提示
 * 
 * 🎯 期望效果：
 * - 保存后 < 0.1 秒完成扫描
 * - 不同严重程度显示不同颜色
 * - 点击"灯泡"可以快速操作
 * - 连续忽略后 AI 学习偏好
 * 测试功能
 */

export default {};