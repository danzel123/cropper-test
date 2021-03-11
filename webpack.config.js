const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: ['./src/index.js', './scss/styles.scss'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'styles.css',
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader?-url',
                    },
                    {
                        loader: 'postcss-loader'
                    },
                ],
            }
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "source", to: "" },
            ],
        }),
    ],
    watch: true
};
