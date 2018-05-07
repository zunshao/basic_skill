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
+ 结果 typeof 仍然为 function

### JS 值引用问题
+ 基本类型 按值
+ 对象指用（reference）
    + 这里有问题
    + 如果只是改对象属性，引用没有问题，一个值多个指向
    + 但是如果切换指向，则不产生影响，引用不恰当，有称为对象值共享
    + 接上，在堆层面，改值，没有问题，各个指向均会发生改变
    + 接上，在栈层面，你变量发生改变，则切断与其它变量的关联关系
    + 代码如下：
```javascript
var a = 1, b = {a: 1}, c= {a: 1};
function test(aa, bb, cc) {
  aa = 2
  bb.a = 2
  cc = {a: 2}
}
test(a, b, c)
console.log(a, b, c) // 结果明显：1，{a: 2}, {a: 1} 注意改变只指改变本身，与其它关联不做相互影响
```

### js Object为公共对象，存在公共方法
* decodeURI() 
* decodeURIComponent()
* encodeURI()
* encodeURIComponent()
* parseInt()
* ...

### array.push() 实现的套路
```
var array = [];
for(var i = 0; i < 10,>) {
  //array.push(i)
  array[array.length] = i
}
```

### 连击两次实现（是不是与防抖有关再说）
+ 全局变量 = false
+ 第一次 改为 true
+ 第二次判断 true就好
+ 两次之间加setTimeout, 超出有效时间重置为false