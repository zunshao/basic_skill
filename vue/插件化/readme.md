### change vue's component to plugin
+ 文件 vue单文件组件，项目入口index.js
+ 自动化工具，简易版vue-cli即可， vue init webpack-simple projectName
+ package.json 修改
    + private: false //公开，默认true
    + license: "MIT"
    + main: "dist/index.js" // 使用时，import入口
    + repository: {type: 'git', url: 'https://github.com/zhangyishao/projectname'} // url 项目git路径
    + 相关发布npm 不做说明
    + 相关webpack.config.js 修改不做说明
+ vue 单文件组件为正常项目中使用组件
+ index.js模版如下：
```javascript
import vuePayKeyboard from '单文件组件路径' // 导入组件
const paykeyboard = {
    install(Vue, options) {
        Vue.component(component.name, component) // vuePayKeyboard.name 组件的name属性
        // 类似通过 this.$xxx 方式调用插件的 其实只是挂载到原型上而已
        // Vue.prototype.$xxx  // 最终可以在任何地方通过 this.$xxx 调用
        // 虽然没有明确规定用$开头  但是大家都默认遵守这个规定
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(paykeyboard);
}
export default paykeyboard // 导出
// 由以上 可以通过Vue.use(component) 的形式来使用
```