### vuex install
```node
    npm i vuex --save
```

### main.js 引用
```
import Vuex from 'vuex'
Vue.use(Vuex)
```

### vuex 实例化
```apple js
var obj = {}
var obj1 = {}
const store = new vuex(obj)
// 实例化vue时将 store添加
new Vue({
    el: '#app',
    rotuer,
    store,
    template: '<App/>',
    components: { App }
})

//对于obj 一般格式为
obj = {
    state: {
        text: 'hello vuex',
        author: {
            name: 'zhangyishao'
        }
    },
    mutations: {
        mTest(state) { //this 不可用
            console.log(state.text, '1')
        },
        mTest1(state) {
            console.log(state.text, '2')
        },
        mTest2(state) {
            console.log(state.text, '3')
        }
    },
    actions: {
        aTest (context) {// no this
            //注意书写格式
            context.commit('mTest1')
            context.commit('mTest2')
        }
    },
    getters: {
        changeName(state) {
            return state.author.name = 'haiou'
        }
    },
    modules: {
        anotherObj: obj1//可以为与obj结构相同的对象
    }
}
```

### 组件使用
#### 在组件中可以通过this.$store 访问vuex实例化时的参数
+ state 保存静态主量，组件中this.$store.state来访问
+ mutations 同步（推荐）方法，全局触发，全局响应,类似于组件的methods， 触发方式this.$store.commit('mTest')
+ actions 由于this被隔离，要执行多个mutations，则采用actions来实现
    + actions更多被官方推荐用来执行异步操作
    + 触发方式 this.$store.dispath('aTest')
+ getters 类似于组件的computed，考虑到其全局，代替多个局部的computed
    + 触发方式 this.$store.getters.changeName
    + var a = this.$store.getters.changeName; a = ?没有意义，与computed类似，由其定义可知，其随this.$store.state.name变化
    
### 使用state mutations actions getters默认方式太长
#### 四个方法代码如下，state三种可能，其余为组数直接映射或对象别名映射
```
import { mapState, mapMutations, mapActions, mapGetters} from 'vuex'
export default {
    ...
    computed: {
        ...mapState(['text'])//数组直接
        ...mapState({textAlias: 'text'})//对象别名
        ...mapState({
            newText: state => state.author.name//多级情况
        })
        
        ...mapGetters(['changeName'])
        ...mapGetters({
            changeNameAlias: 'changeName'
        })
    },
    methods: {
        ...mapActions(['aTest'])
        ...mapActions({
            aTestAlias: 'aTest'
        })
        
        ...mapMutations(['mTest'])
        ...mapMutations({
            mTestAlias: 'mTest'
        })
    }
    ...
}
```
### 将vuex实例化参数分离
##### 由上我们了解vuex实例化的基本结构，运用Es6 commonJS规范很容易将其拆分
+ 创建 store文件夹 入口index.js 具体 state.js, mutations.js, actions.js, getters.js, module文件夹（后续说明）
+ index.js 将 具体四个JS及module引入，抛至main.js 被 Vue引用
+ module作用 很多时候我们项目可以被几个大功能或是由几个人共同开发，各自维护一套比较合理
+ 如何访问module中的state? this.$store.map.state map为module的别名，详见下文代码
+ ？？疑问：mutation-types .js 有什么用？全局避免重复？actions 没有？
```js
//state.js
const stateData = {
    key: value,
    ...
}
export default stateData

//其余与 stateData 类同

//index.js
import vue from 'vue'
import vuex from 'vuex'
import stateData from './stateData'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import module from './module'

export default new vuex.Store({
    stateData,
    mutations,
    actions,
    getters,
    modules: {
        map: module
    }
})

//入口文件main.js
import store from '@/store'
new Vue({
    ...
    store
    ...
})
```
### plugins 待补充
### 个人认为不要为了使用vuex而使用。从实际使用过程中来看，正常子父 父子间通信可满足一半以上的需求
        