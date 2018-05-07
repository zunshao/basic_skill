### 对象解构一般用法
```javascript
let node = {
    type: 'js',
    name: 'zhang'
}
let {type, name} = node;
console.log(type) // js
console.log(name) // zhang

//接上，如果 type name已被定义,需被重写
let type = 'php',
    name = 'xu';
({type, name} = node);
//注意用括号执行。 包括箭头函数return 对象出来

//如何=左边 出现对象不存在属性如何处理？
let {type, name, value} = node
console.log(value) // undefined

let {type, name, value = 1} = node;
console.log(value) // 1

let {type: localType, name: localName = 'bar'} = node;
console.log(localType, localName, type) // js,zhang,undefined

let {type, name} = null/undefined; //报错，js中任何尝试读取null undefined的属性都将报错
```

### 数组解构
###### 大部分情况与对象类似
```javascript
let colors = ['a', 'b', 'c'];
let [firstColor, secondColor] = colors;
console.log(firstColor, secondColor) // a b
let [ , , thirdColor] = colors;
console.log(thirdColor) // c
//数组解构，可以不借助第三个变量实现两个数值交换，具体如下：
let a = 1, b = 2;
[a, b] = [b, a] //对于右边 相当于保存了一份a b数值的对象
let[a, ...b] = colors;
console.log(b) // ['b', 'c']

// 数组复制
let copy1 = colors.concat() // es5浅
let copy2 = colors.slice() // es5浅

//get一个es6 深方法，关键是深
let[...copy] = colors;
```
### 解构参数
###### 大部分函数中都有提及，补充一点
+ 参数未传，而函数中使用。未传被未解构为undefined，明显是会报错
```javascript
function aa(a,b,{c,d,e}) {
  console.log(e.name)
}
aa(a,b,{c,d})
```
+ 整个解构参数不传，整个参数对象将被解析为undefined,报错
```javascript
function aa(a,b,{c,d,e}) {
  console.log(a)
}
aa(a,b)
```
