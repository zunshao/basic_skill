## 原理
+ 存储单元
    + database
    + collection
    + document (formData: json) 可以是任意格式
        + 由于其字段可以任意添加，可扩展性相当强
        + 同一个collection内，不要求document(json)格式一致
        
        
## 一般性方案
+ 查多个collection ，查多次
+ MapReduce方案，并行编程，海量数据统计、分析
+ 日志
+ 复制
+ 分片，实现分布式存储，与复制结合起来，读写分离

## 相关进程
+ mongod
    + 最核心
    + 数据库创建、删除
+ mongo
    + javascript shell process
    + 监控接口，连接等
    + mongodump 实例上创建BSON dump文件
    + mongorestore 用dump文件 监听接口
    