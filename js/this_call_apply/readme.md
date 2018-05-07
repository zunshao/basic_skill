## 临时说明 call apply
+ 两个用途改变this 指向
    + call 第一个参数为this,其余各 依次为函数参数
        + es6 可以用...array 代替参数的依次写入
    + apply 第一个参数为 this, 第二个为arguments(引处纯数组)对象
+ 借用方法，感觉这个说法不准确，改变参数的传递形式，便合理一些
    + this位置不写，null时，传入当前执行对象
    + a.b.call(a, ...array) // 此时，b方法有可能内部存在this 而默认this指向的是a, 所以传a比较保险
+ 举例
    + Array.prototype.slice.apply(arguments,null) 这是改变this指向
    + Math.max.call(null, array) 改变写参数的形式
    + 接上 Math.max(...array)也可以，同样是改变写参数的形式
> 总上 call apply 都可以使用数组，call使用数组扩展符的形式

### this
> this与当前的执行的环境有关，下文只说明一般情况。
+ 构造函数
    + 如果被new过，即指向 实例
    + 构造函数 被当做普通函数使用，this指向window
+ 构造函数.prototype中this
    + 实例，当前构造函数的这例
    + 整个原型链中this均是指向实例
+ 函数是对象的一个属性值
    + 正常调用，按就近原则
    + 很大情况下是非正常调用的
+ call apply 改变this
+ 全局调用（或者说是在全局执行环境下）
    + this 指向 window
+ 箭头函数
    + 考虑到JS引入了块作用域
    + 箭头函数中this永远保持着函数外层this指向