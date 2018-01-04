### add(2)(3) 返回相乘数值
> js function进行值的输出及打印会默认调到toString 或 valueOf方法
```javascript
function add(x) {
  var re = x
  var tmp = function(y) {
    re *= y
    return tmp
  }
  tmp.toString = function() {
    return re
  }
  return tmp
}
```
+ 闭包
+ 自身返回，重复调用
+ 重写默认toString()方法