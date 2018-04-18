module.exports = {
    entry: [
        './src/index.js'
    ],
    externals: {
        "classnames": {
            commonjs: 'classnames',
            commonjs2: 'classnames',
            amd: 'classnames',
            root: 'classnames',
        },
        "prop-types": {
            commonjs: 'prop-types',
            commonjs2: 'prop-types',
            amd: 'prop-types',
            root: 'PropTypes',
        },
        "react": {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React',
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js',
        library: '7c-react-loader',
        libraryTarget: 'umd'
    },
    devServer: {
        contentBase: './dist'
    }
};