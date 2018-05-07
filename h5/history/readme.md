### history
+ 基本方法
    + history.go() // 跳转到 history中指定的一个点
    + window.history.back() // 向后跳转
        + 相当于 history.go(-1)
    + window.history.forward() // 向前跳转
        + history.go(1)
        
+ history.pushState()
    + history.pushState(stateObj, "titleName", "bar.html");
    + 当前url为 http://mozilla.org/bar.html
    + var stateObj = {foo: 'bar'}, history.pushState(stateObj, "title", 'test.html')
    + 执行上述代码后url 变为： http://mozilla.org/test.html
    + 进入 www.baidu.com
    + 执行 history.go(-1) 结果 http://mozilla.org/test.html
    + 页面会触发 popstate 事件，事件对象state中包含了 stateObj 的一份拷贝 ？？？自己测试一下
    + 执行 history.go(-1) 结果 http://mozilla.org/bar.html
    + window会触发另外一个 popstate 事件，这一次的事件对象state object为null
        + window 事件将会触发在window
+ history.replaceState()
    + 用法与history.pushState()一致，修改当前URL，不增加新的历史记录
    
+ popstate 事件
    + 触发前提
        + history.go()
        + history.back() 
    + popstate 事件内，通过event.state 拿到state副本
    + history.state 直接拿到state