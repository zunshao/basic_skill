const EventEmitter = require('events');

// 如下代码输出什么？
(function() {
    let emitter = new EventEmitter();
    emitter.on('myEvent', () => {
        console.log('hi 1');
    });
    emitter.on('myEvent', () => {
        console.log('hi 2');
    });
    emitter.emit('myEvent');
    // hi 1
    // hi 2
})()

// 如下两种写法，是否会死循环

(function () {
    emitter.on('myEvent', () => {
        console.log('hi');
        emitter.emit('myEvent');
    });
    emitter.emit('myEvent');
    // 要了解观察者模式
    // emitter.emit是触发执行的意思
    // 形成递归一直触发，会死循环
})()

(function () {
    let emitter = new EventEmitter();
    emitter.on('myEvent', function sth () {
        emitter.on('myEvent', sth);
        console.log('hi');
    });
    emitter.emit('myEvent');
    // 要了解观察者模式
    // emitter.on 仅仅是向事件代列数组中push一个callback，不涉及任何一次执行
    // 以上代码不会死循环，只执行一次
    /* 取消以下注销代码，运行什么结果？ */
    /*
    * 两次hi,因为 上次emitter.emit运行后，数组中push一个callback，该次运行同样push
    * */
    // setTimeout(function () {
    //     emitter.emit('myEvent');
    // })
})()


