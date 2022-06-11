module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ]
}
