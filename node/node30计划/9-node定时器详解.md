```javascript
// test.js
setTimeout(() => {console.log(1)})
setImmediate(() => {console.log(2)})
process.nextTick(() => {console.log(3)})
Promise.resolve().then(() => {console.log(4)})
(() => {console.log(5)})()
//execute result: 5 3 4 1 2
```

### 异步任务分类
+ 本轮循环
    + process.nextTick()
        + nextTickQueue 中，执行顺序领先micro-task
    + Promise 回调函数
        + micro-task 任务
+ 次论循环
    + timer 阶段 //早于check
        + setInterval
        + setTimeout
    + check 阶段
        + setImmediate
        
        
### 事件循环的六个阶段
+ timer
    + 主线程会检查一下当前时间，是否满足计时器条件。如有满足的执行，否则退出该阶段
+ I/O callbacks
    + 除 timer阶段的异步函数及关闭请求的函数，socket.on('close', callbackFn), 其异步回调均在此处执行
+ idle, prepare
    + libuv 内部调用
+ poll
    + 等待未I/O事件（回调），如果没有其它事件，将一直停留在这个阶段。
    + 目前的理解是：等一段时间（轮循一段时间），看看有没I/O异步完成，完成则执行callback
    + 通用的白话说法是：线程池通知主线程。
+ check
    + 该阶段执行 setImmediate()
+ close callbacks
    + 执行关闭请求，如：socket.on('close', ...)
    
> 查看如几个例子
```javascript
setImmediate(function(){
    console.log(1);
    process.nextTick(function(){
        console.log(2);
    });
});
process.nextTick(function(){
    console.log(3);
    setImmediate(function(){
        console.log(4);
    })
});
// 结果： 3142
// 执行过程，（1）事件初始化，添加异步setImmediate，执行process.nextTick(），输出3，添加setImmediate异步
//          （2）开始循环：执行异步setImmediate（先添先执行）输出1，遇到process.nextTick(），将其放至本轮nextTickQueue中，执行setImmediate输出4，执行本轮nextTickQueue输出2


setTimeout(() => {
    console.log(1)
    setTimeout(() => {console.log(2)}, 300)
}, 20)
setTimeout(() => {console.log(5)}, 500)
setTimeout(() => {console.log(3)}, 300)
const timeoutScheduled = Date.now();
while (Date.now() - timeoutScheduled < 600) {}
console.log(4)
// 结果： 41352
// （1） 2最后
// （2） 明白 先3后五，也就是进入一下一轮时，除执行先后，还会跟据时间进一次排序。

setTimeout(() => {
    console.log(0)
}, 0)
setImmediate(() => {
    console.log(1)
}, 0)

// 结论：凭经验是0 1
// 实际上不是的： setTimeout最少值是1ms,那怕是设置为0
// 在实际运行过种中，初始化过程，耗时超过1ms，则下轮运行结果0 1
// 反之，如果初始化过程小于1ms,第一轮循环setTimeout则无法通过时间验正，在第二轮循环才会被执行，结果为 1 0
```