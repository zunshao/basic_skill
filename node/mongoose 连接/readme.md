### 一般步骤
+ 创建连接
    + 连接前，需更改promise mongoose.Promise = global.Promise
+ 实例化 Schema
+ 将Schema 实例与 mongo数据库 collection关联，生成本地数据构造模型Model
+ 实例化本地数据模型
+ 修改本地数据模型实例化后的数据
+ 进行具体务操作（）
    + save 本地数据模型实例化后的数据
    + find 本地数据构造模型Model 进行相关操作