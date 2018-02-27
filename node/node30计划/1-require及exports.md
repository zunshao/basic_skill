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
> require 完整写法
```javascript
function $require(id) {
  const fs = require('fs');
  const path = require('path');
  const filename = path.join(__dirname, id);
  $require.cache = $require.cache || {};
  
  // if cache
  if ($require.cache[filename]) {
      return $require.cache[filename].exports;
  }
  
  // no cache
  const dirname = path.dirname(filename);
  let code = fs.readFileSync(filename, 'utf8');
  let module = {id: filename, exports: {}}
  let exports = module.exports
  code = `
  (function($require, module, exports, __dirname, __filename) {
    ${code}
  })($require, module, exports, dirname, __filename)
  `
  eval(code)
  
  // cache module
  $require.cache[filename] = module
  return module.exports;
}
```
> 上述如何使用？
```javascript
setInterval(() => {
  
  // 清除缓存，很重要
  // Object.keys(require.cache).forEach((key)=>{
  //   delete require.cache[key];
  // });
  
  var date = $require('./module/date.js');
  console.log(date.getTime());
}, 1000);
```

### require文件查找的一般规则
+ 以./ ../ 或 /开头（./ ../ 相对路径， /绝对路径）
    + 文件夹（权限大于带后缀文件名）
        + 默认index.js
        + package.json{main: 'str'} main路径存在，则main路径下的文件 权限大于 index.js 
    + 无后缀 （权限小于同名文件夹） 
        + .js > .json > .node
+ 无/
    + 系统自带
    + node_modules