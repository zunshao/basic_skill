### vue组件中取DOM元素
###### 一般不会用到
```vue
<template>
    <div class="tets" ref="mybox"></div>
</template>
<script>
export default {
    mounted() {
        this.init()
    },
    methods: {
        init() {
            this.$refs.mybox.style.color = 'red';
        }
    }
}
</script>
```

### vue JS代码分割
###### 注意此处分割 只分割component 下代码意义不是特别明点，若能将公共部分抽离出来，再将JS代码按组件分割，效果不错。
+ 处理路由中的JS文件即可，具体如下：
```javascript
{
    path: '/second',
    component: resolve => require([@/components/testVue], resolve)
}
```

### mixins
###### 全局混合一个对象，子对象有其方法，该对象数据结构与 vue单文件数结据类似
+ 支持created，其它组件生命周期未测试。
+ 方法应写在methods内

### extend 
###### Vue.extend(组件, options), 生成一个子组件的构造器，可以能过$mount(#id)的形式使用
+ let vm = Vue.extend(component, options) //create
+ vm.$mound($el) // use

### 全局注册
+ 很多方式，个人喜欢 Vue.component(vuePayKeyboard.name, vuePayKeyboard)
+ 如果引入多过组件，采用如下方式：
```javascript
var cn = [
    a, b, c, d
]
Object.keys(cn).forEach(function(value) {
  Vue.component(value, cn[value])
})
// 如果每个component都有name，直接for-of数组亦可。
```