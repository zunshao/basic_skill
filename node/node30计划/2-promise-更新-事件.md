## 模块更新
+ 配置文件，可以改成JSON字符串 进数据库
+ 运行文件，是不是也要与前端类似添加，一个版本号？
+ 接上，v8引擎存在cache，谨慎删除cache后更新
+ node服务器 每次更新后面要重启，即运行文件是添加至内存中的，所以要特别注意某些内存

## promise
+ 遵守macro micro 概念
+ 传参没有问题，下一级接收上一级return 值为参数。或resolve(params) 中参数
+ 子级如何控制resolve reject?
    + 注意传值的概念
    + 控制后续处理流与传值类似，不过return 的是 Promise.resolve()

## node events模块
+ 大体引入构造函数
+ 创建实类
+ emit on
+ 理解上，on实际的操作是向观察者模式中push事件，注意与原生事件on完全不是一个概念
+ 注意原码 
+ 注意对于某些临时（如某对象属性监测），可能存在闭包，释放对象时，释放events实例

