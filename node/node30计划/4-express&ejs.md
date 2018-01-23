## express部分
+ app.use(express.static(path.join(__dirname, 'public')))
    + app.js 内这行代码，将静态资源已定位，如同views
    + views内，或其它文件若加载静态资源，路径写入与 public的相对路径即可
+ 404捕捉及错误处理
    + 404 非错误
    + 404捕捉及错误处理，express写法固定，具体写法如下：
```javascript
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
```
+ 引入ejs,且将.html解释为 .ejs文件,注意顺序
```javascript
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
```
+ 传参，路由传参及模版include传参
    + 路由传参如 a.b,相当a对象已经在当前执行环境，需要a.b变量时，直接使用b即可
    + 模版间传参 与 vue 类似
    
## ejs 基本语法
+ <%  %> 内写js
    + 上述，代码内不可以出现html模板，如果出现，则需用<%%>将js代码分割
+ <%= %> 变量解析，将String按HTML解析
+ <%- %> 变量解析，完全将内容显示，类似vue v-text v-html的区别
+ 语法详解：https://github.com/mde/ejs/blob/master/docs/syntax.md