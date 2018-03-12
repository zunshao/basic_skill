### 类的主要特点（与构造函数有什么不同？）
+ 类声明不会被提升（与let类似）
+ 类内所有代码将在严格模式下运行，且无法退出严格模式
+ 类的所有方法都是不可枚举的，构造函数如果想达到这个效果得使用：Object.defineProperty()
+ 类的所有方法内部没存在[[Construct]],因此使用new 调用它们将会报错
+ 调用类的构造器不用new将会报错
+ 类的方法内无法重写类名

> 以下代码定义最简单的类，然后用es5重写，使之与es6一致

```javascript
// es6
class PersonClass {
    constructor(name) {
        this.name = name
    }
    sayName() {
        console.log(this.name)
    }
}

// es5 等价于PersonClass
let PersonType = (function() {
  "use strict"
  const PersonClass = function(name) {
    if (typeof new.target === "undefined") {
        throw new Error("Constructor must be called with new.")
    }
    this.name = name
  }
  
  Object.defineProperty(PersonClass.prototype, "sayName", {
      value: function() {
        if (typeof new.target !== 'undefined') {
            throw new Error('method cannot be called with new.')
        }
        console.log(this.name)
      },
      enumerable: false,
      writable: true,
      configurable: true
  })
  return PersonClass;
})();

// (1)let 限制其提升
//（2）const 限制内部重写方法名
//（3）第一个new.target要求 class使用时必须用new 
// (4) 第二个new.target 要求，方法不得使用new 

```
### 静态方法
+ 方法前添加 static 关键字段
+ 使用 只能是 className.staticMethod()
+ 静态方法在派生（继承）后，子类亦可用

### 类继承
```javascript
// es5
function Shape() {
  this.x = 0;
  this.y = 0;
}
Shape.prototype.move = function(x, y) {
  this.x +=x;
  this.y +=y;
  console.log('shape moved!')
}
// how to inherit
function Rectangle() {
  Shape.call(this)
}
// 此部最有疑点，不用过于考虑子本身的prototype,而是表明：子的prototype亦是继承自 父prototype即可
Rectangle.prototype = Object.create(Shape.prototype)
// 将子prototype的constructor指向子本身
Rectangle.prototype.constructor = Rectangle
/*
* Rectangle.prototype = Object.create(Shape.prototype, {
*   constructor: {
*       value: Rectangle,
*       enumerable: true,
*       writable: true,
*       configurable: true
*   }
* })
* */
```

### 屏蔽类的方法
```javascript
// method1
class Sqare extends Rectangle{
    constructor(length) {
        super(length, length)
    }
    //rewrite 并屏蔽Rectangle.prototype.getArea()
    getArea() {
        return this.length * this.length
    }
}

// method2
class Square extends Rectangle{
    constructor(length) {
        super(length, length)
    }
    getArea() {
        return super.getArea();
    }
}
```

### 继承补充
+ 一个函数含有[[Constructor]]属性，即可以被继承
+ JS内置对象，可以被继承
    + Symbol.species属性
    + 任意能返回内置对象实例的方法，在其派生类上也会自动返回派生类的实例。
+ new.target 使用new 关键字时，其它指向类名或构造函数