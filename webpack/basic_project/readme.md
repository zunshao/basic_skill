### 文字补充
+ css-loader style-loader
    + style-loader 
        + css 仍在JS中,html运行时通过JS生成<style>插入HTML中，具体可通运行页面 element查看
        + css 路径引用错误，webpack提示error 不合理，后续解决？？
+ less
    + 按装less后，仍提示 can not find module of less
        + cnpm i less --save-dev
+ output路径hash位数
    + filename: 'js/bundle-[chunkhash:8].js' //通过此方式直接修改
+ clean-webpack-plugin
    + 注意参数格式，需指定清除路径
+ extract-text-webpack-plugin
    + fallback: "style-loader"
    + html-webpack-plugin 将对任何css输出自动通过<link>注入到html中
    + 对于loader中使用多次，最终plugin中存在一次的话，将自动合并为一个文件
+ loader
    + 注意写法灵活多变
    + rules 处只有 loader
    + 部分插件 loaders: []; loader: 'string'
+ HappyPack
    + 添加id
    + 需配合使用 threadPool
    + ???越优化打包时间多长？有可能是测试项目本身比较少
+ UglifyJSPlugin
    + sourcmap暂时不可用，不知为何        
