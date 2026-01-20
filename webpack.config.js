const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    target: 'node', // 针对 Node.js 环境
    mode: 'production', // 生产模式触发内置优化
    entry: {
        extension: './src/vscode/extension.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist/vscode'),
        filename: '[name].js', // 输出为 extension.js
        libraryTarget: 'commonjs'
    },
    externals: {
        vscode: 'commonjs vscode' // vscode 是内置模块，不打包
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.json'
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    mangle: true, // 开启变量名混淆 (极难阅读)
                    compress: {
                        drop_console: false,
                        drop_debugger: true,
                        pure_funcs: ['console.debug'] // 可以选择删掉 debug log
                    },
                    format: {
                        comments: false // 删除所有注释
                    }
                },
                extractComments: false
            })
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};
