### webpack运行方式：
- webpack CLI(默认)，运行webpack.config.js
- webpack-dev-server(有利于开发环境)，需node安装，如package.json中配置
    ```javascript
        //package.json
        {
            "scripts": "webpack-dev-server --hot --inline"
        }
        //--inline 一种刷新方式，生成数据cli端重新请求，配置复杂一些；与之对应的是--iframe模式，嵌入页面刷新更新，配制简单。--hot:更新方式，替换更新的部分，而非重载页面

### webpack entry
#### entry支持三种格式（可混合）
- 字符串（spa）
- 数组（数组内文件，打包至一个output）
- 对象（key-value,value部分可以为字符串，数组，对象不建议）

### webpack output
+ 路径配制
    + path（本地引用路径，绝对，相对与context有关，即package.json）
    + pulick (生产环境路径，build之后css、js路径引用)
+ 文件名称
    + "[name][hash].bundle.js"(hash每次打包产生的hash值，hash值位数，默认20)
    + "[name][chunkhash].bundle.js"（chunkhash文件内容hash值，两次打包内文不变产生的hash值不变）
    ```javascript
    var path = require('path')
    module.exports = {
        "entry": '',
        "output": {
            path: '',//local path + filename
            publicPath: '',//product: publickPath + filename
            filename: ''
        }
    }
    
### loader及相关配制参数
```javascript
    module: {
        loaders: [
            {
                test:/\.json$/,
                loader: "json"
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    persets: ['vue', 'es2015']
                }
            },
            {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, "app/src"),
                    path.resolve(__dirname, "app/test")
                ]
                loader: 'css?!postcss!less',
            
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            }
        ]
    }
```
+ test(使用通配符/正则,由入口全局匹配文件)
+ exclude(此路径下过滤掉)
+ include（指定Test,匹配路戏）
+ css_loade(注意写法，从右向左执行，即先将less转成css,经postcss处理后，丢给CSS)
+ 注意图片写法，limit单位字节，一般小于limit url-loader Base64,大于url-loader
+ 对于Js query对于某些项目，可能比较大，分离放进.babelrc文件中
```javavsrcipt
    { // .babelrc 
        presets: ['vue', 'es2015']
    }
```

### webpack 常用插件（plugins: []//与module并列）
+ uglifyJSPlugin //混淆压缩JS
+ extract-text-webpack-plugin //将css-loader style-loader css分离生成总的 style.css文件
+ 。。。

### webpack 文件扩展名
    在引用文件，我们可以省略项目中文件的扩展名，使用这个功能的前提，我们进行了相关的配置
    key: resolve // 与module并列
```javascript
    {
        resolve: {
            extensions: ['', '.js', 'jsx']
        }
    }
```
    
### webpack配置常见属性总结
- entry
- output
- module: {loaders:[{},{}]} //loader container
- plugins: [] //loader 相关插件
- resolve: {extensions:[]} //扩展