### set & map 文字介绍
###### set是不包含重复值的列表，一般不会像访问数组那样访问set中的某个项，相反更常见的是，只在set中检测某个值是否存在。
###### map 则是键与值的集合。map中每个项都存储了两块数据，通过指定所需读取的键即可检索对应的值。map通常做数据缓存，以便后续快速检索与读取。

### set一般方法与概念
+ 创建
    + let set = new Set()
    + set 不重复 用 Object.is()判断
    + 存在例外情况，即 set中 +0 -0认为是相等的
    + Object.is() 参考对象相关
+ 用途
    + 某些变量作为属性名，存在隐式转换的问题
    + 数字 与 相同的字符串数字 覆盖问题
    + 所有对象做为属性名 覆盖问题
```javascript
let set = new Set();
set.add(5);
set.add('5');
console.log(set.size) //2
let set = new Set([1,1,1,5]);
console.log(set.size) //2
set.delete(5);
console.log(set.has(5)) // false
console.log(set.size) //1
set.clear()
console.log(set.size) //0
``` 

### set 中的 foreach
+ 允许传入一个回调
+ 该回调 三个参数para1:set值，para2:set值，para3:set本身
+ 按正常套路para2:index值 set没有，又为了与数组 map保持一致，如此设定
```javascript
let set = new Set([1,2])
let processor = {
    output(value) {
        console.log(value)
    },
    process(dataSet) {
        dataSet.forEach(function(value) {
          this.output(value)
        }, this)//注意this的传入
    }
}

//对于es6而言，上述写法不能忍
let processor = {
    output(value) {
        console.log(value)
    },
    process(dataSet) {
        dataSet.forEach((value) => this.output(value))
    }
}
```

### set 与 数组
+ set可以以数组的形式创建
    + let set = new Set([1,2,3])
+ 数组亦可由set 创建
    + array = [...set]
+ es6 最简去重方法诞生了
```javascript
eliminateDuplicates = (items) => [...new Set(items)]
```

### weak Set
###### 产生原因，对象存储在Set的一个实例中时，实际上相当于把对象存储在变量中，只要对于set实例的引用仍然存在，所存储的对象就无法被垃圾回收机制回收，从而无法释放内存
```javascript
let set = new Set()
let key = {}
set.add(key)
key = null // 无法将key在内存中释放
console.log(set.size) // 1
```

### 对于weak set产生原因补充说明
+ 数据被set保持引用
+ 与 变量栈层面没有什么关系
+ 数组类同
+ 在外部修改 变量的属性值 set array中将做同等变化
+ 接上 如果改变值指向，则set array中值不变，进一步说明是保持着对某个值的引用

### weak set 与 set间关键差异
+ add() 方法加入了非对象参数，就会抛出错误
+ has() delete() 则会在传入非对象参数时 返回false
+ weak set 没有forEach() 方法，没有 for of方法，没有暴露任何迭代接口
+ weak set 没有size属性
+ 主要追踪对象引用

### map
###### map大部分与set类同，细节上存在差异
+ map 方法：has(key) delete(key) clear() map.get(key) = value 存在size属性
+ 初始化 通过数组，element为length = 2 的数组
    + let map = new Map([[1,2], [2,3]])
    + 如果数组的某项length > 2 后续将被忽略
+ map forEach方法 与set类同，区别在于回调函数第二个参数为index

### weak map
+ 与weak set类似，解决强引用内存无法被销毁的问题
+ weakmap 键必须是对象，处理的亦是键对象的内存问题，值的问题不做处理
+ weakmap 的主要用途就是将数据与DOM元素关联
+ 另一可推广应用就是 处理函数私有变量
+ weakmap 没有 forEach() size clear()
```javascript
let map = new WeakMap(),
    element = document.querySelector('.element')
map.set(element, 'testDom')
console.log(map.has(element)) // true
console.log(map.get(element)) // testDom
map.delete(element);
console.log(map.has(element)) // false
console.log(map.get(element)) // undefined
```

### weakMap 处理私有变量
```javascript
var Person = (function() {
  var privateData = {};
  var privateId = 0;
  function Person(name) {
    Object.defineProperties(this,  '_id', { value: privateId++ })
    privateData[this._id] = {
        name: name
    }
  }
  Person.prototype.getName = function() {
    return privateData[this._id].name
  }
  return Person
}())

// 该代码最大问题在于：私有变量中值无法被销毁
```
###### 优化后代码如下：
```javascript
let Person = (function() {
  let privateData = new WeakMap();
  function Person(name) {
    privateData.set(this, {name: name})
  }
  Person.prototype.getName = function() {
    return privateData.get(this).name
  }
  return Person
}());
// this为实例，其销毁则 容器weakmap 中以this为命名的键则被销毁
```