### typeof 类型判断
+ 值类型
    + undefined number string boolean
+ 引用型
    + function object
    
### 接上为什么typeof 引用型要区分function object？？
+ 所有对象都是由函数生成的
    + var obj = {a: 10, b:20}; // 此为语法糖，完整写法如下
    + var obj = new Object(),obj.a = 10, obj.b = 20;
+ 输出 console.log(typeof Object) console.log(typeof Array) // function

### 对象与函数间通过prototype联系
> 所有函数都是对象，对象又都由函数创建而来。
+ 举例 var obj = new Object() obj,Object分别代表构造函数
+ obj(对象)存在 __proto__ 属性， 其指向 Object（构造函数）prototype属性，
+ Object.prototype 对象含一个不可枚举的属性 constructor 
+ Object.prototype.constructor 指向的是构造函数本身
+ 实例.__proto__ 指向 构造函数.prototype 说法不准确，应该是他们俩都指向同一个对象
+ 存在 obj.__proto__ === Object.prototype // true
+ 补充：每个函数（每个可以new的函数，箭头函数没有）都会有一个prototype
+ 接上：Object这个特殊的构造函数，其prototype.__proto__指向 null
+ !!!! 之前这个地方理解有大问题。Object.prototype 本身是一个非常复杂，含有很基础属性与方法的对象
+ Object.prototype.__proto__ 这个对象是最顶级的对象，其没有其它构造函数创建
+ 虽然typeof null === object是一个大bug，但是 从上面来理解也能自圆其说

### __proto__ prototype区别与联系
+ 两者指向同一个对象，前文有表述
+ __proto__ 挂在对象实例上， prototype挂在构造函数上
+ __proto__ 为实例对象的隐式属性， prototype 则为显式属性
    + console.log(obj.hasOwnProperty('__proto__')) // false
    + console.log(Object.hasOwnProperty('prototype')) // true
+ var function = new Function() // function.__proto__ === Function.prototype : true
+ Function 是函数，其必然由Function创建
    + 存在 Function.__proto__ === Function.prototype创建 // 这个地方是最特殊的
    + ！！！重点：Function.prototype.__proto__ === Object.prototype
    + !!!!重点： Object.prototype.__proto__ === null
+ Object亦有一层函数属性 
    + 存在 Object.__proto__ === Function.prototype
    
### instanceof
+ 基本用法： console.log(a instanceof A)
    + 如果a 由 A实例化而来，则结果为true
    + 同样的 console.log(a intanceof B)
        + 如果B是A的父级及以上，A类由B或B的某子类 派生而来
        + 结果同样为true
    + 上述机制是何？
        + a.__proto__ 指向 A.prototype
        + A.prototype 存在 constructor
        + 按此套路，循环一直到Object.prototype.__proto__
        + 每次存在 X.prototype.cunstructor === Z
        + 接上： console.log(a instanceof Z) // true
        
### 原型链
+ 先理解使用
    + console.log(a.a) // 是否为undefined 按原型链查找
    + console.log(a instanceof A) // 是否为true 按原型链查找
+ 原型链详情
    + a
    + a.__proto__  指向 A.prototype
    + A.prototype.__proto__ 指向 X.prototype
    + ...
    + X.prototype.__proto__ 指向 Function.prototype
    + Function.prototype.__proto__ 指向 Object.prototype
    + Object.prototype.__proto__ 指向 null
+ 接上最终生成的链是：a > A.prototype > X.prototype > ... > Object.prototype >  null
+ for in 与 obj.hasOwnProperty('str') 的区别
    + for in将会打印原型链上所有可枚举的属性
    + obj.hasOwnProperty('str') 用来判断该属性是否为本身所有
    + 可枚举？ 为何用些属性不能被打印出来？
    + 通过defineProperty()
    + Object.defineProperty(object, propertyName, {
        value:  // 设置 object[propertyName]
        configurable: // 是否可通过delete删除
        enumerable: // 是否可以能过for in打印
        writable: // 是否可改修属性值
        set: function() {},
        get: function() {}
    })
 
 
### 执行上下文环境
> 参考本段结尾代码
```javascript
var a = 10, 
    fn, 
    bar = function(x) {
        var b = 5
        fn(x + b)
    };

fn = function(y) {
  var c = 5;
  console.log(y + c)
}

bar(10)
```
+ 提升hoisting
    + 全局提升
    + 局部提升
+ 依次执行，初始化事件
    + 执行代码大体上分为三种
        + 赋值
        + 函数
        + 事件
    + 执行到最末一个执行函数
        + 将函数bar(10)的上下文环境，压入执行上下文栈，并设置为活动状态
        + bar(10) 局部作用域递归执行一次全局作用域初始操作 // 注意理解用词
        + fn(x + b)处，又将fn（10 + b）上下文环境压入上下文栈，并设置为活动状态
    + 先进先去
    + 某个活动状态的自带执行上下文的函数作用域运行结束，将执行下一个
    + 。。。
+ 补充说明：每个函数作用域是独立的(每次执行都会开僻一个新的函数作用域)。除箭头函数外，函数间作用域，不存在定义时的子父关系

```javascript
var obj = {
    fn: function() {
      console.log(this)
    }
}
var a = obj.fn
a() // window

var x = 10;
function a(){
    console.log(x)
}
function b() {
  var x = 0;
  a()
}
b() // 10

var obj = {
    fn: function() {
      function f() {
        console.log(this)
      }
      f()
    }
}
obj.fn() // window
// 传参当为obj.fn
```

### 闭包
+ 首先JS存在函数作用域
+ JS 函数执行时，存在一执行上下文
+ 上文提到的作用域，是静态作用域
+ 值与执行环境有关，作用域是静态的，与函数定义时有关
+ 函数在其所在的执行上下文+作用域执行
+ 存在变量，当前作用域下不存在
+ 作用域将结合执行上下文，沿着作用域链查找
+ 函数使用了非当前作用域下的变量，将会一直在当前执行上下文下操持着对该值的引用，形成闭包
+ 一般两种情况： 局部作用域下对全局变量的引用，另一种即是 全局作用域对局部变量的引用//此时注意内存是否存在问题
+ ？？总结不好，以后再整理。
+ 参考 http://www.cnblogs.com/wangfupeng1988/p/3977924.html
+ zepto 未整理：https://github.com/yeyuqiudeng/reading-zepto/blob/master/src/%E8%AF%BBZepto%E6%BA%90%E7%A0%81%E4%B9%8B%E4%BB%A3%E7%A0%81%E7%BB%93%E6%9E%84.md