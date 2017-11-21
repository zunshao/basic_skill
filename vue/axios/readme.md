### axios 基础（基于文档整理）
### FEATURES
+ 浏览器发起基于XMLHttpRequest请求
+ node发起 http请求
+ 支持promise
+ intercept request and response
+ transform request and response data
+ 自动处理JSON 格式字符串
+ 客户端 XSRF/CSRF（跨站请求伪造） 防御
    + XSS 跨站脚本攻击 与XSRF的区别 可以从汉字上区分
    + XSRF/CSRF 客户访问网站A，A站恶意代码 从A站拿到信息，forgery request 网站B
    + 为什么AXIos 有防御 XSRF/CSRF功能？个人认为它将网站间请求隔离。

### axios请求两种基本形式
+ axios.request(config)
    ```
        //以 get方法举例
        axios({
            method: 'get',
            url: '/user?ID=1234',
            
        }).then(function(response){})
        axios({
            method: 'get',
            url: '/user',
            params: {ID: 1234}// 注意这种情况参数将被运行encodeURIComponent()方法
            
        }).then(function(response){})
    ```
+ axios[method](url[,data,[config]])
    + 此方法下 method url data 没有必要在config中指定
    + 具体别名如下：
        + axios.request(config)
        + axios.get(url[,config])
        + axios.post(url[,data[,config]])
        + axios.delete(url[,data[,config]]) //删除请求URI所标识的资源
        + axios.options(url[,data[,config]]) // 返回 特定资源 所支持的HTTP方法
        + axios.put(url[,data[,config]]) // 向指定位置上传资源/整体更新
        + axios.head(url[,data[,config]]) //返回请求头
        + axios.patch(url[,data[,config]]) //与put类似，部分更新
        
### axios Concurrency并发
+ axios.all(iterable)
+ axios.spead(callback)
```
    //使用参考
    let urls = ['/url?id=1','/url?id=2','/url?id=3','/url?id=4'];
    let requests = url.map(makeRequest);
    function makeRequest(url){
        return axios.get(url)
    }
    
    axios.all(requests)
        .then(axios.spread(function(...args){
            ...do something
        }))
```

### axios config
+ 需明确 axios产生实例的一般方法 var instance = axios.create({config})
+ 所以config存在这么几种形式
    + var instance = axios.create(config) //此config为实例的通用配制
    + axios存在默认配制（axios程序内部）
    + 基于axios的全局配制 如：axios.default.baseURL = ''
    + 基于实例的部分配置 instance.default.baseURL
+ config权重问题
    + axios default < axios.default < axios.create(config) < instance.default
    
### axios config各属性详解
```
    {
        url: '/user',//建议相对路径，结合baseURL理解
        method: 'post',
        baseURL: 'http://domain.com/api/', //最终用户请求的地址： baseURL + url
        transformRequest:［function(input){
            ...
            //仅支持 put post patch
            //最后一个数组返回值 必须为：Buffer ArrayBuffer FormData or Stream
            //有可能要修改请求头以对应相关值格式
            return data
        }],
        transformResponse: [function(data) {
            ...
            //catch/then触发之前修改返回值
            //
            return data
        }],
        headers: {
            'X-Request-Width': 'XMLHttpRequest',
            //设置用户的请求头
            ...
        },
        //'params' are the URL parameters to be sent with request
        // must be a plain objetc or a URLSearchParams object
        // a plain object: {} or new Object创建的对象
        // a URLSearchParams object: 参考MDN https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
        params: {
            ID: 12345,
        },
        //序列化 params 具体用法需测试
        paramsSerializer: function(params) {
            return Qs.stringify(params, {arrayFormat: 'brackets'})
        },
        // for the method: post put patch
        //对于数据的格式有限定，具体参考官网
        data: {
            firstName: 'zhang
        },
        // 请求超时，请求将被取消
        timeout: 1000,
        // indicate whethor or not cross-site Access-Control request
        // 确定是否跨域
        widthCedentials: false,
        adapter: function(config) {
            //something for easy test
        },
        // add this to header's property Authorization
        auth:{
            name: 'zhangyishao',
            password: 'wrwrrrr'
        },
        // 支持 arraybuffer blob document json text stream
        // 不支持JSONP...
        responseType: 'json',
        // 设置cookie的名称
        xsrfCookieName: 'XSRF-Token',
        // xsrf token value
        xsrfHeaderName: 'X-XSRF-TOKEN',
        // upload 
        onUploadProgress: function(progressEvent) {
            ...
        }
        // download
        onDownloadProgress: function(progressEvent) {
            ...
        }
        maxContentLength: 2000, //返回体最大字节数
        // 注意 return 为 true null undefined 为resolved 否则为reject
        validateStatus: function(status) {
            return status >= 200 && status < 300; //default
        },
        // for node 
        maxRedirect: 5,
        httpAgent: new http.Agent({keepAlive: true}),
        httpsAgent: new https.Agent({keepAlive: true}),
        proxy: {
            host: '127.0.0.1',
            port: 9000,
            auth: {
                username: 'zhangyishao',
                password: '2313'
            }
        },
        cancleToken: new CancelToken(function(cancel) {
            //取消请求
        })
    }
```
### axios reponse 数据结构
```
    {
        data: {},
        status: 200,
        statusText: 'ok',
        headers: {}，
        config: {} //axios config
    }
    //可以通过以下方式打开查看
    axios.get('/users/12345')
    .then(function(response){
        console.log(response.data)
        console.log(response.status)
        console.log(response.statusText)
        console.log(response.header)
        console.log(response.config)
    })
```

### axios interceptors拦截器
### axios cancellation 取消
