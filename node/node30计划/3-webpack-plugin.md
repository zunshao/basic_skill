## webpack-merge

* 合并的意思
* 官方提供默认用法基本已满足需求，返回结果
  * let re = require('webpack-merge')(obj1, obj2)
  * let re = require('webpack-merge')([obj1 obj2])
  * 最终原则，对象属性深度合并，后者可修改前者
  - 其它用法参考官方文档

## webpack-node-externals

* webpack 使用处理文件时，exclude include
* 接上，尤其处理 node-modules 文件夹时
* 如果要在 exclude include 增加白名单（whitelite）可以用到上述
