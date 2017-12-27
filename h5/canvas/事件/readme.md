### beginPath
+ canvas状态决定，多次绘制时，如果要改变状态，需要用到
+ 否则 当前状态将重置 之前状态

### moveTo()
+ 绘制起点
+ 默认上一次绘制终点

### 图片 drawImage()
+ 图片加载是浏览器行为
+ mousemove事件，全画布清空时，加载不得重复
+ 接上，加载过程会有闪烁
+ 通过drawImage() 将已加载图片绘制于 canvas画布，一般不存在闪烁问题

### dom.getBoundingClientRect()
+ 获取DOM元素 与窗口 位置关系，返回对象
+ 对象含：left top right bottom width height x y属性

### context.canvas 
+ 通过 context 反向取到canvas