## 一个场景想显示任何东西，需三种类型的组件
+ 相机
+ 光源
+ 物体
+ 补充 three.js中组件大都以构造函数的形式封装

> 一个几何机 + 材质，将生成一个mesh。将mesh添加至 场景实例中即可

> 如下代码将展示一个几何体是如何被添加的？
```javascript
var scene  = new THREE.Scene()
var cubeGeometry = new THREE.CubeGeometry({...})
var cubeMaterial = new THREE.MeshLamberMaterail({...})
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
cube.name = '...'
scene.add(cube)
```
## 添加至场景中的所有组件，都被统一存放至 scene.children 中
+ 可以通过方法： scene.getChildrenByName(name) 得到，如果其有name
+ 如下代码将演示，如何删除 mesh (假定之前已添加多个)
```javascript
this.removeCube = function() {
  var allChildren = scene.children
  var lastCube = allChildren[allChildren.length - 1]
  if (lastCube instanceof TRESS.Mesh) {
      scene.remove(lastCube)
  }
}
```

## scene 其它功能
+ 添加一个些效果，如雾化，整个场景级别
+ 统一规定，场景内几何体材质
    + scene.overrideMaterial = new THREE.MeshLamberMaterial({...})
    
## scene method/property
+ add
+ children 场景中所有添加的对象实例
+ getChildrenByName(name)
+ traverse(function) // 遍历场景中所有对象，类似array.forEach
+ fog
+ overrideMaterial //强制场景中所有物体使用相同的材质

## mesh method/property
+ position
+ rotation
+ scale
+ translate 相对位置
    + mesh 属性修改存在 x y z三个方向，一般可以做如下处理：
        + cube.position.x = 10
        + cube.position.set(10, 2, 3)
        + cube.position = new THREE.Vector(10, 2, 3)
        
    
