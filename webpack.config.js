const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const path = require('path');

const config = {
    FRONT_STATIC_RESOURCES : path.resolve(__dirname, './src/public'),
};

module.exports = {
    entry: './src/main.js',
    resolve: {
        extensions: ['*', '.js', '.vue', '.json', '.css']
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.(css|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader']},
        ]
    },
    devServer: {
        open: true,
        hot: true,
        contentBase: `${config.FRONT_STATIC_RESOURCES}/`
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};