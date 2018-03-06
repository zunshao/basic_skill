### ajax 最简套路
+ 实例化 XMLHttpRequest
+ xhr.open(method, url, true)
+ xhr.setRequestHeader({});
+ xhr.send() //一直到这里，以上代码是同步的。
+ event onreadystatechange
###### 以上，一直到xhr.send()本地同步操作一个xhr实例化对象。发送出去之后，监控readyState,这个变量记录等待返回过程中所有变化。

### readyState 只读
+ 值：0 ，对应属性xhr.UNSENT，描述：请求已建立未初始化
+ 值：1 ，对应属性xhr.OPENED，描述：请求已建立未发送
+ 值：2， 对应属性xhr.HEADERS_RECEIVED , 请求已发送，已收到响应头
+ 值：3， 对应属性xhr.LOADING , 描述：请求处理中，响应内容不全
+ 值：4   对应属性xhr.DONE 描述：数据接收完毕，响应完整
###### 一个完整的ajax onreadystatechange将被触发四次，每次readyState值改变时都会触发onreadystatechange，另外特定值还会触发特定事件

### readystate变化时其它事件
+ onloadstart
    + 触发条件 readystate ==1 readystate ==2之间
    + 上述解释即为：xhr.open 至 xhr.send //发送并拿到请求头
    + onloadstart 默认传入一个ProgressEvent进度对象
    + 默认传入 ProgressEvent对象

+ ProgressEvent对象有三个重要的Read only属性
    + lengthComputable 表示长度是否可以计算
    + loaded 表示已加载的资源大小
    + total 表示资源总大小
+ onprogress readystate ==3 //请求正在处理中触发 
    + 存在兼容性问题
    + 默认传入ProgressEvent对象
    + 可通过e.loaded/e.total来计算加载资源的进度
    ```
        xhr.onprogress = function(e) {
            console.log('progress', e.loaded/e.total)
        }
    ```
+ onload 触发时机在 readyState ==4
    + 很多人业务逻辑写在onreadystatechange，建议写在onload中
```
    xhr.onload = function(){
        var s = xhr.status;
        if ((s >= 200 && s < 300) || s == 304) {
            var resp = xhr.requestText;
            // do what you want
        } 
    }
```

+ onloadend readyState ==4之后，收到响应，或 readyState==2超时，未收到响应
    + 默认会传入一个ProgressEvent事件
    
+ ontimeout ajax请求超时触发
+ abort方法 
    + 该方法用于取消ajax请求。原理将当前xhr实例的readyState重置为0
+ onerror
    + ajax请求出错执行，如 网络出现问题，chrome 状态码407也是会触发
+ upload 属性 对于文件上传十分重要
    + onloadstart
    + onprogress
    + onabort
    + onerror
    + onload
    + ontimeout
    + onloadend
###### 与xhr实例中事件类同，可参考上述，下文补充一般使用代码
```javascript
    xhr.upload.onprogress = function(e) {
        var percent = 100*e.loaded/e.total
        console.log('upload:' + precent + "%") 
    }
```

+ overrideMimeType 可以重写response header Content-type
```javascript
    xhr.overrideMimetype('text/xml;charset = utf-8')
    xhr.send()
```

### xhr分级
+ XHR一级
    + 仅支持文本数据传输，无法传输二进制数据
    + 传输数据时，没有进度信息提示，只能提示是否完成
    + 受浏览器同源策略限制，只能请求同域资源
    + 没有超时机制，不方便掌控ajax请求节奏
+ XHR二级
    + 支持二进级数据，可以上传文件，可以使用FormData进行表单对象管理
    + 提供进度提示，可通过xhr.upload.onprogress事件回调方法获取传输进度
    + 依然受同源策略限制，但可以通过设置header Access-Control-Allow_Origin设置为*，表示允许任何域名的请求
    + 可以设置timeout 及通过 ontimeout事件进行后续处理。
###### 补充同源策略：首先这是浏览器级别的。服务端可以正常返回，但是浏览器不接受    

### Form使用，主要感受h5 FormData使用
+ h5 FormData
```javascript
    var data = new FormData();
    data.append('name', 'yishao')
    xhr.send(data);
```
+ DOM form
```javascript
    var form = document.querySelector('#form');
    var data = new FormData(form);
    data.append("password", '123456');
    xhr.send(data);
```



