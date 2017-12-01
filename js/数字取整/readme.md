### 数字算法
+ Math.floor
    + floor地板 小于当前数的离其最近整数
        + console.log(Math.floor(1.9)) //1
        + console.log(Math.floor(-1.9)) //-2
+ Math.ceil
    + ceil 天花板之意 大于当前数离其最近整数
        + console.log(Math.ceil(1.9)) //2
        + console.log(Math.ceil(-1.9)) //-1
        
+ ~~ 两层含义 其它类型变为数字及浮点类型保留整数部分
    + 其它类型转为数字
        + ~~true //1
        + ~~false //0
        + ~~"" // 非数字类字符串为0
        + ~~'233.345' // 233 数字类型字符串，先转数字，再保留整数
        + ~~undefined //0  
        + ~~!undefined //1
        + ~~null //0
        + ~~[] //非基本类型 都为0
    + 对于浮点类型数字，保留整数
        + ~~ 1.9 //1
        + ~~ -1.9 //-1
        