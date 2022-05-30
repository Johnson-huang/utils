import typescript2 from 'rollup-plugin-typescript2'
import {terser} from "rollup-plugin-terser"; // 代码压缩
import cleanupPlugin from "rollup-plugin-cleanup"; // 去掉注释等无效代码
import filesize from 'rollup-plugin-filesize' // 显示打包后文件大小
import resolve from '@rollup/plugin-node-resolve' // 能够识别node_modules的第三方模块
import commonjs from '@rollup/plugin-commonjs' // 将 CommonJS 的模块转换为 ES2015 供 rollup 处理
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'

// @ts-ignore
import pkg from './package.json'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: `lib/${pkg.name}.cjs.js`,
            format: 'cjs'
        },
        {
            file: `lib/${pkg.name}.esm.js`,
            format: 'esm'
        },
        {
            file: `lib/${pkg.name}.umd.js`,
            name: pkg.name,
            format: 'umd'
        }
    ],
    plugins: [
        typescript2({
            exclude: 'node_modules/**',
            typescript: require('typescript')
        }),
        json(),
        resolve(),
        commonjs(),
        babel({ babelHelpers: 'bundled', exclude: ['node_modules/**'] }),
        filesize(),
        terser(),
        cleanupPlugin()
    ]
}
