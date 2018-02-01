## 接口跨域
+ 前端部分
    + header 设置 'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
    + 设置形式多样，推荐拦截器，可以在 './vue/axios' 查看相关
    + 注意post 参数格式 可以在 './vue/axios' 查看相关
    
+ 后端部分
    + 请求中间件
    + 注意位置，应该在路由之前
```javascript
res.set({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/html'
    })
```