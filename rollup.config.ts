import typescript from 'rollup-plugin-typescript2'

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
        }
    ],
    plugins: [
        typescript({
            exclude: 'node_modules/**',
            typescript: require('typescript')
        })
    ]
}
