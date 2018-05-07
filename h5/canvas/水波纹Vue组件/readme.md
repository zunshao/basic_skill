### 涉及点
+ 抗锯齿一般方法
+ vue mounted周期为渲染过程，此时取Dom，进行相关的DOM操作需用：this.$nextTrick()
+ vue组件中取DOM元素
+ canvas 渐变使用
+ window.requestFrameAnimation 兼容

### 抗锯齿详解
+ devicePixelRatio 的存在
+ 会导致canvas style width的缩放
+ canvas.style 与画布物理尺寸一致（不用缩放，浏览器会缩放）
+ canvas 画布物理尺寸需缩放
    + width height * window.devicePixelRatio
    + 上述将物理尺寸缩放后，将与放大的画布尺寸显示一致
+ 如果是静态的，上述已经结束，但是如果动画，为保证后续
    + 使用canvas.getContext('2d').scale(window.devicePixelRatio, window.devicePixelRatio);