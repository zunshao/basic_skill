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
### array.every() 返回回调值
### array.fill() 改变原数组