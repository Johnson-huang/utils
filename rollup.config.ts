import typescript2 from 'rollup-plugin-typescript2'
import {terser} from "rollup-plugin-terser"; // 代码压缩
import cleanupPlugin from "rollup-plugin-cleanup"; // 去掉注释等无效代码
import filesize from 'rollup-plugin-filesize' // 显示打包后文件大小
import resolve from '@rollup/plugin-node-resolve' // 能够识别node_modules的第三方模块
import commonjs from '@rollup/plugin-commonjs' // 将 CommonJS 的模块转换为 ES2015 供 rollup 处理

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'lib/bundle.cjs.js',
            format: 'cjs'
        },
        {
            file: 'lib/bundle.esm.js',
            format: 'esm'
        },
        {
            file: 'lib/bundle.umd.js',
            name: 'utils',
            format: 'umd'
        }
    ],
    plugins: [
        typescript2({
            exclude: 'node_modules/**',
            typescript: require('typescript')
        }),
        resolve(),
        commonjs(),
        filesize(),
        terser(),
        cleanupPlugin()
    ]
}
