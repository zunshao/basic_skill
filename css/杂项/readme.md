### offsetWidth
+ 只读
+ DOM.style.width(contentWidth + padding + border)
+ 没有单位

### clientWidth
+ == content width

## div span:nth-child(1)
+ 数字 最小为1
+ 数字非按span计算，而是所有子元素
+ 接上，如果div 子元素为 span div span
+ 接上，若想取到第二个span 应该为 div span:nth-child(3)
+ 实际操作过程中为防止孙级元素影响，上述写法 div > span:nth-child(3)更为合理

