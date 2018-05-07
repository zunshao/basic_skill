## 函数间带参数 callback
```javascript
function aa(num, callback) {
  //callback(num) 理论上都可以
  return  callback(num)
}
aa(1, function(b) {
  console.log(b)
})
```
## 补充说明（待验证）
+ 例如：公共组件弹框，点击确定
    + 正常来说，子组件传递值，然后父组件执行
    + 但是，多父组件共用，子传什么值？那个父组件函数执行？
    + 加类似于字典的config 极不合理
    + 建议函数与参数分别传入，在子组件内部执行？？待确认
    
> 这里存在另外一种情况，对于事件，使用同一个函数表达式，但参数不一致
+ 分如下几种情况：
    + 参数没有，表达中使用为、全局变量，某些特定情况下，修改全局变量即可
    + 使用一层匿名函数，函数表达式为functionName(para)的形式。建议这种方法
    + 如果存在remove的情况？建议将上述匿名改为有名，再包一层。
    
    
> Array.every polyfill, 主要学习callback的写法
```javascript
if (!Array.prototype.every) {
    Array.prototype.every = function(callbackfn, thisArg) {
      'use strict';
      var T, k;
      if (this == null) {
          throw new TypeError('this is null or not defined!')
      }
      
      var O = Object(this);
      var len = O.length >>> 0;
      // 位操作与 len = O.length || 0; 区别很大，此为尝试取一个默认值
      // >>> 尝试进行一次位操作，无法操作 取0， 
      if (typeof callbackfn !== 'function') {
          throw new TypeError();
      }
      
      if (arguments.length > 1) {
          T = thisArg;
      }
      
      k = 0;
      
      while (k < len) {
          var kValue;
          if (k in O) {
              kValue = O[k];
              var testResult = callbackfn.call(T, kValue, k, O);
              if (!testResult) {
                  return false;
              }
          }
          k++;
      }
      return true;
    }
}
```

> callback常见插件及异步回调中的有法
```javascript
function isOddOrEvenAsync(number, callback) {
  if (number && typeof number === 'number') {
      if (number % 2) {
          callback(null, '奇数')
      } else {
          callback(null, '偶数')
      }
  } else {
      callback(new Error('you send wrong parameters!'))
  }
}

isOddOrEvenAsync(19, function(error, msg) {
  if (error) {
      console.log(error);
      return false;
  }
  console.log(msg)
})
```
### 由上述代码总结
+ 对于回调函数
    + 参数末位依次写callback
    + 其它参数是 抽象的
    + 具体的表达式，更多体现在如何以不同的参数（格式一致）调用callback，callback对于主函数而言是抽象的
    + callback 参数是具体的
+ 实际运行函数
    + callback函数表达式是具体的，参数是抽象的
    + 其它参数是具体的
    + 对于callback参数，错误优先原则，即第一个参数一般为error
    + 错误优先的原因：异步函数过程中，发生错误throw出来的error,主程无法直接拿到，可以抛给回调，然后在事件循环中执行异步回调，拿到。