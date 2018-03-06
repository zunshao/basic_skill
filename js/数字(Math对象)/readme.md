### 数字算法（Math对象）
+ Math.abs() // 绝对值
+ Math.round() // 四舍五入（不是那么的特别准确）
+ Math.floor // floor地板 寓意小于
    + floor地板 小于当前数的离其最近整数
        + console.log(Math.floor(1.9)) //1
        + console.log(Math.floor(-1.9)) //-2
+ Math.ceil // ceil 天花板的意思，寓意大于
    + ceil 天花板之意 大于当前数离其最近整数
        + console.log(Math.ceil(1.9)) //2
        + console.log(Math.ceil(-1.9)) //-1
+ 算法补充
    + len = O.length >>> 0
        + len = O.length || 0; 区别很大，此为尝试取一个默认值
        + len = O.length >>> 0 尝试进行一次位操作，无法操作 取0
    + parseInt(num) 得到的类型是 Number
    + num.toFixed(num) 得到的是 String
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
        
        
### Math 属性
+ Math.PI // 圆周率
+ Math.E // 欧拉常数 e
+ ...