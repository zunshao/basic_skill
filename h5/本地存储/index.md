### cookie
> http 无状态链接，每次都要重联，需要一个机制追踪对话，由此引入cookie，
可以理解为，cookie是这样一种机制：弥补http协议无状态的不足。
+ 同域（不可跨域） 每次请求，请求信息头中存在，key值：Cookie
+ 有效期 maxAge 来设定
+ 修改 删除 // cookie不存在 修改 删除的概念
    + name domain path 与原来一致，设置新值，则可以覆盖原来cookie
        + 上述三者不同，即为两不同的cookie
    + 删除 maxAge 设置为0
        + 默认 无时间设定 cookie在内存中
        + 存在过期时间设定，未过期，存储在硬盘中 
+ Cookie 域名（domain）
    + 与iframe domain效果一致
+ Cookie的路径 （path）
    + 默认cookie存放路径 C:\Documents and Settings\你的用户名\Cookies
+ Cookie的安全属性
    + secure 属性为 true
    + 浏览器只会在 https 或 其它ssl存在的前提下传送cookie
    
### localStorage
+ 

### storage 与 cookie的区别
+ 存在目的与意义不同
    + cookie http规范的一部分，作为http无状态协议的补充而存在
    + web storage 本地存储而存在。更大的存储容量5M
+ 操作手段不同
    + cookie 需自己设定set get函数，不存在编辑与删除，主要属性：name domain path maxAge
    + webStorage 有 setItem getItem removeItem clear 等原生方法
+ 有效期不同
    + cookie 满足发送条件，将一直在请求头中存在，过期将被删除
        + 有效期内
        + 满足 secure 要求
        + 同域
        + 跨域 domain
        + 不存在窗口的概念，主要以失效期来控制是否发送
    + localStorage
        + 同域 
        + 浏览器关闭也有效，所有同源窗口共享
    + sessionStorage
        + 同域
        + 同个窗口
        
+ 补充说明： storage亦可以通过加timeStamp的方法，达到cookie过期的效果
    + 注意是否时时更新
    + 注意放置的位置