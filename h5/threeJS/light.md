## 光源基础
+ 基本光源
    + AmbientLight 环境光，不可以光唯一光源，通过光源颜色调整场景，全局控制，无位置可言
    + PointLight 点光源 照明弹 星星是不错的例子
        + color
        + intensity
        + distance 光照射距离
        + position
        + visible
    + SpotLight 锥光源（聚光源） 聚光灯
        + castShadow 是否生成阴影
        + target 光照方向
        + angle 可以理解为 锥角，与最终光影响直径有关
        + 众多调整阴影属性不表
    + DirectionalLight 方向光或平行光 如太阳， 各处光强一致
        + 各属性与 锥光源一致
+ 高级光源
    + HemiSphereLight 半球光源
    + AreaLight 平面光源
    + LeansFlareLight 镜头眩光