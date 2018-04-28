### index.html 原理
> 对于一个块状容器，高度固定，未设置overflow属性未设置，内容超出高度后仍然会展示

+ 中间加了一 inner 层。滚动主要由他实现overflow-y:scroll;overflow-x:hidden;
+ 最外层宽高，与内容展示区一致，最外层overflow:hidden;
+ 内容区虽有与最外层一致的宽高，超限内容仍会展示，由此撑起中间层 overflow-y: scroll;
+ 为何内容区域与最外层高度一致？ 
    + 只有高度一致才能保证 内容层撑起的中间层scroll 与 最外层本应用的scroll一致。
    + 上述不好理解，进一步说明：用户操作的其实是 内容区的scroll, 而用户期望的操作感觉是：最外层由内容产生的Scroll
    

### 如何检测不同浏览器 scroll宽度？
> 上述index.html 有一个缺陷，要求外层必须宽度固定，如果不固定？最简单的办法便是 margin right 负值
> 原理 先创建一个dom 放在浏览器里渲染， 通过其offsetWidth 与 clientWidth差值
```javascript
function getScrollBarWidth() {
  var temDom = document.createElement('div')
  var style = {
      width: '100px',
      height: '100px',
      overflowY: 'scroll'
  };
  Object.keys(style).forEach(function(val) {
    temDom.style[val] = style[val]
  })
  document.body.appendChild(temDom);
  let re = temDom.offsetWidth - temDom.clientWidth;
  temDom.remove()
  return re;
}
```