### array.reduce([callback, initialValue]) 返回回调函数值
+ callback 回调，含四个参数
    + previousValue 上一次调用返回值，或初始值，回调函数里return值，即为上一次值
    + currentValue 当前值
    + currentIndex 当前index
    + array 调用reduce方法的数组
+ initialValue 初始参数，第一次调用previousValue

### array.from() 返回数组，参数为类数组元素 
+ 参数
    + param1 array-like or iterable object
    + param2 mapFn
    + thisArg value to use as this when executing mapFn
+ example
    + console.log(Array.from('foo')) //['f', 'o', 'o']
    + console.log(Array.from([1, 2, 3], x => x + x)) //[2, 4, 6]
### array.isArray() 返回布尔值，参数为需判断对象或值
> polyfill
```javascript
if (!Array.isArray) {
    Array.isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]'
    }
}
```
### array.of() 返回数组
+ 弥补new Array()的用法
+ new Array(2) // [undefined, undefined]
+ Array.of(2) //[2]
### array.concat() 返回数组
+ 数组拼接
+ var a = b.concat(c, d)
### array.entries() 返回数组跌代器，可以通过for-of来拿到index
> example
```javascript
var a = ['a', 'b', 'c'];
var iterator = a.entries();
for (let e of iterator) {
    console.log(e)
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
// 使用for-of 跌代数组，又需要用到index的时候，很有必要
```
### array.every() 返回boolean值
+ return boolean判断值，如果出现false将立即退出，如果第项为true最终结果为true
+ array.every(function(element, index, array), thisArg)
+ polyfill 有关于callback的用法，已放相关md文件中
### array.fill() 改变原数组
+ array.fill(value, start, end) 依次改变数组元素
### array.find() 返回值，回调return 判断条件 返回第一个满足条件的
+ callback 必传
### array.findIndex() 返回索引值
+ callback 必传
### array.filter() 返回数组 回调return 判断条件 返回所有满足条件的值
### array.indexOf() 返回第一个元素索引
### array.includes() 返回布尔值，可添加起始位置，可用于类数组
### array.splice(start, deleteCount, item1, item2, ...)
+ start 指定修改的开始的位置（从0开始计数）
+ deleteCount 删除个数，插入即为0， 替换即为1
+ item1, item2, ...从start处，插入的元素。 