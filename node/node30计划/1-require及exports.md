### npm 阅读
+ 来源 https://github.com/dcousens/is-sorted
+ features: check array is sorted or not
+ origin codes as follows:
```javascript
function defaultComparator(a, b) {
    return a - b;
}

module.export = function checkSort(array, comparator = defaultComparator) {
  for (var i = 1, length = array.length; i < length; ++i) {
      if (comparator(array[i - 1], array[i]) > 0) return false
  }
  
  return true
}
```
> parameter comparator means, we can transfer callback to adapt your customize rule

### module
+ exports 为变量，不可以简写，其默认以被定义为{}，默认module.exports =  {}
+ exports = {age: 1} 被引用后，得到的结果为{}， exports 在原文件只是一个普通变量
+ 接上， module.exports = exports, 被引用后可以拿到{age:1}
+ module.exports,可以当普通对象对待，即可以被重新指向，module.exports.name = 'zhang'; module.exports = {age:1}
+ 接上，拿到的对象即为 {age:1}
+ 注意：必须同步执行行，module.exports.name = 'zhang';setTimeout(function(){ module.exports = {age:1}})
+ 接上拿到的即为 {name: 'zhang'}
+ require method origin codes are shown as follows:
```javascript
function require(...params) {
  const module = { exports: {} }
  ((module, exports) => {
      function someFun() {
        
      }
      exports = someFun
      module.exports = exports
  })(module, module.exports)
  return module.exports
}
```