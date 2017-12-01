### 题目
![](./图片1.png)

###### 用任意编程语言（javascript为佳）写一个程序，解决下面问题
Given a digit string, return all possible letter combinations that the number could represent.A mapping of digit to letters (just like on the telephone buttons) is given below.

+ Input:Digit string "23"
+ Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

```javascript
var inputData = '2345678'
var arrayTest = ['', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'yuv' ,'wxyz','']
function getOutPut(str, array) {
    let inputArray = str.split('')
    let reLength = 1
    let re = []
    for (let i of inputArray) {
        reLength = reLength * array[i].length
    }
    for (let j = 0; j < reLength; j++){
        let temStr = ''
        for(let k = 0, lenK=inputArray.length; k < lenK; k++){
            temStr += array[inputArray[k]][j % (array[inputArray[k]].length)]
        }
        re.push(temStr)
    }
    return re
}
console.log(getOutPut(inputData,arrayTest))
```

### 总结
+ 最有印象的非业务编程题
+ 自已没经过系统算法学习，刚开始用递归，特别绕。
+ 从业至2017-11-30最有成就感的一段代码
+ 这个思路可以用来解决类似如下问题：
    + 图书馆的书按一定的规则摆放了10亿本书，第523422亿本在那里？
        + 注意不要限入各种查找算法的误区，而是一个具体的数字523422，我们可以能过‘一定的规则’直接定位，直接定位！
        + 在地图瓦片下载的项目中，遇到类似的问题
        + NODE中，尽管有bagpipe 可以控制并发，如上10亿量级，整个任务队列还是要在内存中维持的
        + bagpipe 上限大约 500万，async/await单异步，100万左右就挂掉了
        + 具体解决思路NODE bigpipe 表述

