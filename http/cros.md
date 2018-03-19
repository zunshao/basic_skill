> cros 是一个W3C标准，全称是跨域资源共享（cross-origin resource share）,用来克服ajax同源限制
> 实现cros通信的关键是服务器，只要服务器实现cors接口，就可以跨源通信

### CROS两种请求
+ 简单请求
    + 同时满足以下两条件即为简单请求
        + 请求为以下三种方示之一
            + head
            + get
            + post
        + http的头信息不超出以下几种字段
            + Accept
            + Accept-Language
            + Content-Language
            + Last-Event-Id
            + Content-Type // 限如下值
                + application/x-www-form-urlencoded
                + multipart/form-data
                + text/plain
    + 简单请求，使用补充
        + 请求头添加 Origin: ''
        + 如果指定源不在许可范围内
            + 返回无 Access-Control-Allow-Origin 字段
            + 浏览器将抛出错误，此错误不可通过状态码捕获到
        + 指定源在许可范围内，返回将多出如下属性
            + Access-Control-Allow-Origin
                + 必段，值 要么为 * 要么为 请求Origin
            + Access-Control-Allow-Credentials
                + 服务端是否接收cookie,接收为true，不接收删掉
            + Access-Control-Expose-Headers
                + 正常XHR，getResponseHeader(),只能拿到6个基本字段
                    + Cache-Control
                    + Content-Language
                    + Content-Type
                    + Expires
                    + Last-Modified
                    + Pragma
                + 如果想拿到其它字段，需要在该字段内设定
    + 关于cookie进一步补充
        + 需明确cookie生成分两大部分，服务器接收，浏览器发送
            + 服务端接收 
                + Access-Control-Allow-Credentials：true
                + Access-Control-Allow-Origin 应与 Origin一致
            + 浏览器发送
                + 设置XHR withCredentials // var xhr = new XMLHttpRequest();xhr.withCredentials = true;
                   
+ 复杂请求（非简单请求）
    + 触发条件
        + 请求方法为非简单请求提及的三种，如 put delete等
        + Content-Type为application/json
    + 请求过程
        + 预检请求返回（preflight）
            + 如下代码，方法PUT 添加自定义属性X-Custom-Header
            + 若不允许将会报错，无法通过http状态码拿到
        + 正常请求返回
```javascript
// JS 代码
var url = 'http://api.alice.com/cors';
var xhr = new XMLHttpRequest();
xhr.open('PUT', url, true);
xhr.setRequestHeader('X-Custom-Header', 'value');
xhr.send();

// 预检返回头preflight
OPTIONS /cors HTTP/1.1
Origin: http://api.bob.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: X-Custom-Header
Host: api.alice.com
Accept-Language: en-US
Connection: keep-alive
User-Agent: Mozilla/5.0...
```

> 参考：http://www.ruanyifeng.com/blog/2016/04/cors.html