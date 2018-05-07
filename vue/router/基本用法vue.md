### 基本用法
```javascript
const Foo = {template: '<div>Foo</div>'}
const Bar = {template: '<div>Bar</div>'}

const route = [
    {path: '/foo', component: Foo},
    {path: '/bar', component: Bar},
]

const router = new VouRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')
```

### 组件内部如何访问路由
```javascript
// home vue
export default {
    computed: {
        userName() {
            return this.$route.params.username
        }
    },
    methods: {
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }
    }
}
```

### 路由嵌套
+ 注意Error的一般性写法与位置
+ 注意 ‘/’为根目录，child中不加
```javascript
const router = new VueRouter({
    routes: [
        {
            path: '/user/:id',
            component: User,
            children: [
                {
                    // /user/:id/profile 成功，Profile 将被渲染在 User router-view 中
                    path: 'profile',
                    component: Profile
                }
            ]
        },
        {
            path: '*',
            component: Error
        }
    ]
})
```

## 基础用法补充
+ 两种用法声明式 和 编程式
+ 编程式时
    + 使用this.$router
    + this.$router.push(String)
        + 注意‘/’为根目录，含子，应写全
        + 编程式写法如下：
            + this.$router.push('home') // 字符串
            + this.$router.push({path: 'home'}) // object
            + this.$router.push({name: 'user', params: { userId: 123 }}) // 命名路由
            + this.$router.push({path: 'register', query: {plan: 'private'}})
                + 上述与 object 一致
                + 带查询参数，最终变成： /register?plan=private
        + path 与 params 矛盾，特殊情况除外
            + const userId = 123
            + router.push({name: 'user', params: {userId}}) // -> /user/123
            + router.push({path: `/user/${userId}`}) // -> /user/123
            + router.push({path: '/user', params: {userId}}) -> /user
                + path 与 params 矛盾，params无效
                
+ 声明式
    + <router-link :to="..">
    + 采用命名路由： <router-link :to="{name: 'user', params: {userId: 123}}">User</router-link>
    + 上述等价于： router.push({name: 'user', params: {userId: 123}})