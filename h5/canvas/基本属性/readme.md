### lineCap 设置或返回线条末端线帽样式
+ butt 线条添加平直边缘
+ round 末端添加圆形边缘
+ square 末端添加正方形线帽

### lineJoin边角类型
+ bevel 斜角 夹角中线 法向
+ round 圆角
+ miter 默认尖角
    + miterLimit, lineJoin设置为miter有效，默认值10 即（linewidth * 10）
    
### 确定起点moveTo
> moveTo(x, y)
+ x 点x值    
+ y 点y值
+ 绘制直线可以做为绘制起点

### 绘制直线 lineTo
> lineTo(x, y)
+ x 点x值
+ y 点y值

### 填充与绘制设置
+ 填充
    + fillStyle
    + fill
+ 绘制
    + strokeStyle
    + stroke
+ 注意：选择设置状态，然后进行绘制
### 绘制弧线
> context.arc(centerX, centerY, radius, startingAngle, endingAngle, anticlockwise=false)
+ centerX 中心X值
+ centerY 中心Y值
+ radius 半径
+ startingAngle 起点 x轴正方向（一四象限交界）0，以顺时针递加（度数 弧度*Math.PI）
+ endingAngle
+ anticlockwise 默认false 即为顺时针