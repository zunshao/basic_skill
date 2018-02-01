## 函数间带参数 callback
```javascript
function aa(num, callback) {
  return  callback(num)
}
aa(1, function(b) {
  console.log(b)
})
```