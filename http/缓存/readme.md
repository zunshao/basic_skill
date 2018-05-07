### 缓存
+ 缓存机制
    + 如何缓存及是否使用缓存 cache-control控制
        + cache-control 常见值
            + public/private 前端没有什么区别
            + no-store // 不建议存储，也不会触发 对比缓存
            + no-cache // 会缓存，不会直接使用，通过对比缓存来触发使用
            + max-age=xxx // 绝对时间，相当于设置 cache-control: public/private expires: lastRequest+max-age
                + 权限大于 expires
    + 缓存过期条件
        + expired
            + 一旦超过过期时间，无论何种设置，便不存在读本地缓存的可能了
            + 将再发一次请求，到服务器去确认（启动缓存对比策略）
                + 注意根据确认的结果，有可能再会使用缓存，并刷新expires
            + 重要补充：如果不设置expired，浏览器将取当前请求时间(date)与last-modified 10%
+ 对比缓存
    + last-modified(第一次请求时，服务器返回中，头存在这个属性)
        + if-Modified-Since: 启动对比策略时，请求属性
        + 对比失改 服务器返回 200 并重发数据，刷新本地缓存
        + 对比成功 服务返回 304 客户端收到 304 读取返回数据
    + Etag (服务端返回字段)
        + if-none-Match (优先级高于Last-Modified/if-Modified-Since) 客户端启动对比缓存是发送的字段
        + Etag不变 则 304
        + 反之则 200
        
        
### 重新
> 上述理解有问题
+ 最重的设置cache-control
    + public/private 没有什么意义
    + no-store // 每次从服务器中取资源
    + no-cache // 每次都触发对比缓存
    + max-age // 条件请求，代替1.0 expires，绝对时间，优先级高于expires
+ expires 条件请求产物。什么是条件请求？满足条件即使用缓存

+ 对比缓存策略
    + last-modified/if-Modified-Since
        + 对比 未改动 304
        + 对比 改动 200
    + Etag/if-none-Match
        + 对比 未改动 304
        + 对比 改动 200
+ 对比策略 权重应高于 条件请求
+ 条件策略不满足 启动对比策略

### 缺点
+ last-modified 缺点
    + 秒内修改无法统计
    + 修改，但内容不改变
+ Etag 缺点
    + 加重CPU运算，减慢响应，用的很少
    
### 各刷新之间的区别
+ 浏览器中写地址
    + 完全启用缓存
    + F5 正常启用缓存，如上所述
    + ctrl + f5 完全不启用缓存
    
    