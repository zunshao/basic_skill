var path = require("path");
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "js/[name]-[chunkhash].js"
    },
    module: {
        loaders: [
            /*{
                test: /.css$/,
                loaders: ['style-loader', 'css-loader'],
                exclude: '/node-modules/'
            }*/
        ]
    },
    plugins: [
        /*new htmlWebpackPlugin({
            filename: 'a.html',
            template: 'index.html',
            inject: false,
            title: 'learn webpack'
        }),*/
    ],
    resolve: {
        extensions: ['.js', '.css', '.png', '.html', '.jsx']//可以省略文件后缀名
    }
};
