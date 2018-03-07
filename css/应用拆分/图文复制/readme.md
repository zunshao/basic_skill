### 不允许复制
+ user-select: none;
+ 保护图文不被复制? 没有多少意义，增加用户厌恶程序
+ a标签 或 DIV做 BUTTON时，用户多次点击，被选中
    + 主要消除此现象
    
### JS 修改粘贴板中内容
+ document.addEventListener('copy', copy)
+ 选中即触发一次
+ callback e.preventDefault() // 必须添加，否则后续无效
+ 取复制内容 let temStr = window.getSelection().toString()
+ 将新内容写至 粘贴板 event.clipboardData.setData("text", `${newContent}`);