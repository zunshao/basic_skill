### viewport
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum=1.0, user-scale=no" />
```
+ width: 视口宽度为一个整数，或device-width(设备宽度)
+ initial-scale : 默认缩放比例
+ minimum-scale : 允许用户最小缩放比例
+ maximum-scale : 允许用户最大缩放比例
+ user-scalable : 是否允许手动缩放

### 如保处理1px 被渲染成2px问题
+ 原因：devicePixelRatio
    + 局部处理
        + meta initial-scale=1
        + rem 按照标准， transform scale(0.5)
    + 全局处理
        + meta viewport initial-scale = 0.5
        + rem 按输出稿标准即可
