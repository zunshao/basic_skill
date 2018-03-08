### 3列布局
+ 主内容优先原则
+ 如何与父级高度一致： margin-bottom: -9999em;padding-bottom: 9999em;
+ margin-left: -100%; 负级大于本身宽度，压缩浮动后元素本身尺寸，呈现于同一行中
+ 上为三列布最重要实现原理。
+ 个人认为 position比较好理解

### 遮照部分
+ position fixed 比较重要
+ 采用transform: translate(-50%, -50%)比较合理
+ 上述居中方式，不受父元素display的影响
+ left top bottom right 均为0值后，margin: auto,亦是比较靠谱的方法
+ margin: auto 此auto 上下左右均由浏览器自动处理