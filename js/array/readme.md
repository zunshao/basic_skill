### array.reduce([callback, initialValue]) 返回回调函数值
+ callback 回调，含四个参数
    + previousValue 上一次调用返回值，或初始值，回调函数里return值，即为上一次值
    + currentValue 当前值
    + currentIndex 当前index
    + array 调用reduce方法的数组
+ initialValue 初始参数，第一次调用previousValue

### array.from() 返回数组，参数为类数组元素 
### array.isArray() 返回布尔值，参数为需判断对象或值
### array.of() 返回数组
+ 弥补new Array()的用法
+ new Array(2) // [undefined, undefined]
+ Array.of(2) //[2]
### array.concat() 返回数组
+ 数组拼接
+ var a = b.concat(c, d)
### array.entries() 返回数组跌代器，可以通过for-of来拿到index
### array.every() 返回boolean值
+ return boolean判断值，如果出现false将立即退出，如果第项为true最终结果为true
+ array.every(function(element, index, array))
### array.fill() 改变原数组
+ array.fill(value, start, end) 依次改变数组元素
### array.find() 返回值，回调return 判断条件 返回第一个满足篥件的
### array.findIndex() 返回索引值， 对于array.find()补充
### array.filter() 返回数组 回调return 判断条件 返回所有满足条件的值
### array.indexOf() 返回第一个元素索引
### array.includes() 返回布尔值，可添加起始位置，可用于类数组