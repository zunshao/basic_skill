### webpack
+ 全局的常量设置
+ 路径的设置
    + static 文件不需要改变，但是要处理图片
+ postCss
    + 前缀
        + 可以设置浏览器兼容及相关版本
    + 自动合并属性
        + 规则不统一
+ webpack 加速打包
    + 基本的exclude/include
    + happypack
    + dll
+ 版本的依赖
    + @
        + 精确限定
    + ^ 限定主版本
        + ^1.2.1 (1.2.1 -- 2.0.0)
        + ^0.2.1 (0.2.1 -- 0.3.0)
        + ^0.0.3 0.0.3
    + ~ 限定次要版本
        + ~1.5.1  (1.5.1 -- 1.6.0)
        + ~0.5.1  (0.6.0)
    + x X * 将下载该分支最新
+ yarn 作用
    + 版本锁定
    + 同源
+ eslint
    + .eslintignore
    + 选择标准 airBnb standard
+ .npmrc 文件
    + 限定某些版本源 node-sass容易报错
    