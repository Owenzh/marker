const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './client/index.js',
    output: {
        filename: 'bundle.js',
        // filename: 'bundle-[hash:8].js',
        path: path.resolve(__dirname, 'client', 'dist')
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {test: /\.css$/,use: [{loader: "style-loader"},{loader: "css-loader"}]},
            {test: /.(jpg|png|gif|svg)$/, use: ['url-loader?limit=8192&name=./imgs/[name].[ext]']},/*解析图片*/
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'client', 'index.tpl.html') //new 一个这个插件的实例，并传入相关的参数
        })
    ],
    optimization: {
        minimize: true /*压缩代码*/
    },
    // devServer: {
    //     contentBase: "./client", //本地服务器所加载的页面所在的目录
    //     port: 8080,
    //     historyApiFallback: true, //不跳转
    //     inline: true //实时刷新
    // }
};

module.exports = config;