import typescript2 from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser' // 代码压缩
import cleanupPlugin from 'rollup-plugin-cleanup' // 去掉注释等无效代码
import filesize from 'rollup-plugin-filesize' // 显示打包后文件大小
import resolve from '@rollup/plugin-node-resolve' // 能够识别node_modules的第三方模块
import commonjs from '@rollup/plugin-commonjs' // 将 CommonJS 的模块转换为 ES2015 供 rollup 处理
import gzipPlugin from 'rollup-plugin-gzip'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import alias from '@rollup/plugin-alias'

// const path = require('path')
import path from 'path'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/utils.cjs.js',
            format: 'cjs'
        },
        {
            file: 'dist/utils.esm.js',
            format: 'esm'
        },
        {
            file: 'dist/utils.umd.js',
            name: 'jhUtils',
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
        alias({
            entries: [
                { find: '@', replacement: path.join(__dirname, 'src') }
            ]
        }),
        filesize(),
        terser(),
        cleanupPlugin(),
        gzipPlugin()
    ]
}
