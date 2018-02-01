## 函数间带参数 callback
```javascript
function aa(num, callback) {
  //callback(num) 理论上都可以
  return  callback(num)
}
aa(1, function(b) {
  console.log(b)
})
```
## 补充说明（待验证）
+ 例如：公共组件弹框，点击确定
    + 正常来说，子组件传递值，然后父组件执行
    + 但是，多父组件共用，子传什么值？那个父组件函数执行？
    + 加类似于字典的config 极不合理
    + 建议函数与参数分别传入，在子组件内部执行？？待确认