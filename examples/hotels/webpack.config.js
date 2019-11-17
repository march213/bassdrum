const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.scss?$/,
                loader: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            importLoaders: 1,
                            localIdentName: '[local]___[hash:base64:5]',
                            modules: true,
                            camelCase: true,
                            banner:
                                '// This file is automatically generated from your CSS. Any edits will be overwritten.',
                            namedExport: true,
                            silent: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: [__dirname + '/src'],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
        alias: {
            bassdrum: path.resolve(__dirname, '../../build'),
        },
    },
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './public',
    },
};
