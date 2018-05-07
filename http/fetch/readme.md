> web异步通信的未来，IE中使用，需添加es2015 promise fetch本身的 polyfill,运行结果返回promise
```javascript
// demo
let word = 'str';
let url = `https://wie**.cfe.com?wd=${word}&p=1`;
fetch(url, {
    mode: 'no-cors'
})
.then(function(reponse) {
  return reponse;
})
.then(function(data) {
  console.log(data)
})
.catch(function(e) {
  console.log('erro', e)
})
```

+ reponse.type
    + basic // 同域
    + cors // 跨域 且服务端返回 CORS 头
        + Cache-Control Content-Language Content-Type, Expores, Last-Modified Progma
        + 其余不可见
    + opaque // 跨域 且服务端返回无 CORS 头
        + 几乎无有价值信息
    + 以上fetch请求均到达服务端
    
    
### fetch mode 第二个参数中设定
+ same-origin // 同域可请求成功，反之则拒绝，并抛出错误
+ cors // 表示同域和带有Cros头的跨域可请求成功，其它拒绝
+ cors-with-forced-preflight // 发送请求前进行 preflight 检查
+ no-cors // 发出请求不带cors响应头，对应reponse-type 为 opaque


### header
+ fetch获取httpheader
```javascript
fetch(url).then(function(response) {
  console.log(response.headers.get('Content-Type'))
})
```
+ 设置 http请求头
```javascript
var headers = new Headers();
headers.append('Content-Type', 'text/html');
fetch(url, {
    headers: header
})
```
+ header内容检索
```javascript
var header = new Headers({
    "Content-Type" : "text/plain"
});
console.log(header.has("Content-Type"))
```
+ Headers 是浏览器一个内置对象


### post 默认为get
```javascript
var headers = new Headers();
headers.append("Contend-Type", "application/json;charset=UTF-8")
fetch(url, {
    method: 'post',
    headers: headers,
    body: JSON.stringify({
        date: '2016-10-08',
        time: '15:17:00'
    })
})
```

### credentials
```javascript
fetch(url, {
    credentials: 'omit'
})
```
> credentials取值以下三种
+ omit // 缺省值，默认为该值
+ include // 跨域请求带有cookie时，保证联接统一
+ same-origin // 同域请求发送cookie

### catch 
> 无论服务端返回什么状态码，不会进入错误捕获里（chrome407除外），即 XMLHttpRequest 不会触发onerror事件或reject fetch事件。
通常情况下：网络出现问题或ERR_CONNECTION_RESET时，将会进入相应的错误捕获里。如果fetch请求的header里包含 If-Modified-Since, If-None-Match, If-Unmodified-Since, If-Match, 或者 If-Range 之一, 且cache的值为 default , 那么fetch将自动把 cache的值设置为 "no-store"

### cache
+ default // 请求之前检查下http
+ no-store // 忽略http缓存，拿到响应后也不将更新
+ no-catch // 发送一个查询request 发送一个正常request，拿到后更新cache
+ reload // 请求时忽略cache，但拿到后将更新
+ force-cache // 完全依赖缓存，即便是过期，如果没有将发送新的请求
+ only-if-cached // 完全依赖缓存，即便是过期，如果没有将抛出网络异常


### body参数
+ ArrayBuffer // fetch中对应方法 arrayBuffer()
+ ArrayBufferView // fetch中对应方法 arrayBuffer()
+ Blob/File // fetch中对应方法 blob()
+ string // fetch中对应方法 json()
+ URLSearchParams // fetch中对应方法 text()
+ FormData // fetch中对应方法 formData()


### fetch 不足
+ 原生没有jsonp的概念 // npm install fetch-jsonp --save-dev
+ 没有abort 概念 //  Promise.race()
+ 没有timeout 概念 //  Promise.race()
+ 没有progress 概念 //  Fetch中的Response.body 中实现了getReader()
