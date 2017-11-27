### html-webpack-plugin
+ MPA 项目 
    + 需要在plugins中添加多次
+ 重要属性
    + title
    + template //模版
    + fileName //生成后文件名
        + 写法 'index-[hash].html'
        + 写法 'html/index-[hash].html'
```html
// title 用法
<head>
      <title><%=  htmlWebpackPlugin.options.title %></title>
      //htmlWebpackPlugin webapck.config.js   htmlWebpackPlugin = require('html-webpack-plugin')
</head>
```
    
