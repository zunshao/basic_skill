### transition 
+ transition-property
+ transition-duration
+ transition-timing-function
    + linear
    + ease
    + ease-in
    + ease-out
    + ease-in-out
+ transition-delay
+ 补充 默认值：all 0 ease 0
+ 补充 应添加于目标元素内

### from 表单伪类
+ :focus
+ :blur
+ :check
+ :disable

### 选择器特殊
+ X + Y // 兄弟选择器(由上往下，只取一个即结束)
+ X > Y // 子选择器
+ X ~ Y // 所有兄弟节点

> 重要说明：hover 通过兄弟选择器可以实现对于非当前元素的子元素的控制。此非常重要！！！

### Z:nth-child(1)
+ 注意： Z为子元素
+ 也就是Z之前必须有一个父元素
+ 与first-child一样，其双重选择，双重选择
+ 两个选择条件，Z 与 1 元素满足两者条件时，才会被选择中
