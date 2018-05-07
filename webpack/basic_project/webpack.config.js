const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HappyPack = require('happypack')
const happyThreadPool = HappyPack.ThreadPool({size: 5})
module.exports = {
    entry: path.resolve(__dirname, './src/js/app.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name]-[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "postcss-loader"]
                }),
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: 'happypack/loader?id=style'
                }),
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: "happypack/loader?id=js",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HappyPack({
            id: 'js',
            threadPool: happyThreadPool,
            loaders: ['babel-loader']
        }),
        new HappyPack({
            id: 'style',
            threadPool: happyThreadPool,
            loaders: ["css-loader", "postcss-loader", "less-loader"]
        }),
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].[hash:8].css'
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(
            ['dist'],
            {
                root: __dirname,
                verbose: true,
                dry: false
            }
        ),
    ],
}