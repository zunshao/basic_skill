### 一般方法
+ 下载安装至finish
+ 配置操作系统环境变量
+ 新建文件 data config log
    + data 存放数据库 database collection
    + config mongodb 配置文件
    + log 数据库日志文件
+ 上述 config 如下
    + dbpath 数据库路径 必须
    + logpath  日志输出文件路径 必须
```
    # 数据库路径
    dbpath=e:\mongodb\data
    # 日志输出文件路径
    logpath=e:\mongodb\logs\mongodb.log
    # 错误日志进行追加
    logappend = true
    # 启用日志文件
    journal = true
    # 过滤日志信息
    quiet = true
    #端口号
    port = 27017
    #http 配置
    httpinterface = true
```
> 上述完成后，启动过程如下：
+ mongod --config e:\mongodb\etc\mongo.conf
    + 指向 mongodb 配置路径
+ mongo
    + 可以在当前命令界面进行相关数据库操作