var path = require("path");

module.exports = {
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "build.js"
    },
    module: {
        loaders: [
            {
                test: /.css$/,
                loaders: ['style-loader', 'css-loader'],
                exclude: '/node-modules/'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.png', '.html', '.jsx']//可以省略文件后缀名
    }
};
