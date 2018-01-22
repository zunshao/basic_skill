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
    + Math.max.call(null, array) 借用方法？？？？
> 总上 call apply 都可以使用数组，call使用数组扩展符的形式