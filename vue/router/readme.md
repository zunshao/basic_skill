### 动态路由
> 一般关系

| 模式                          | 匹配路径             | $route.params                    |
| ----------------------------- |:-------------------:|:--------------------------------:|
| /user/:userName               | /user/evan          | {userName: evan}                 |
| /user/:userName/post/:post_id | /user/evan/post/123 | {userName: 'evan', post_id: 123} |

###### 动态路由参数变化
> 路由 由 /user/foo 到 /user/bar,原来的组件实例会被复用。比重新渲染来的效率更高，
但是，组件的生命周期不用再被调用。需要测试，个人认为/user部分不会重新渲染，即便是
来回切换，/foo /bar部分将渲染。如果需要一些其它处理，采用watch 或 beforeRouteUpdate,如下：

```javascript
const User = {
    template: '...',
    watch: {
        '$route' (to, from) {
            // do somthing
        }
    },
    beforeRouteUpdate(to, from, next) {
        // do somthing
    }
}
```

###### 匹配优先级
+ 若路由匹配多个，原则，谁先定义，谁的优先级就最好。