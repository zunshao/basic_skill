### 像素操作
+ 复制后得到两个矩形
    + 一个通过 getImageData
    + 一个通过 createImageData 创建
    + 最后通过 putImageData 添加至画布
+ 处理imageData
    + 类型 Uint8ClampedArray（8位无符号整型固定数组）
        + js中所有数字64位浮点数
        + js字符串由零个或多个16位unicode字符组件字符序列
        + 上述两条提到位，即一个二进制
        + 1 byte = 8bit
        + bit 即位 一个二进制
    + 对于矩形Data长度
        + 长 * 宽 * 4（4，有可能是当前设备devicePixelRatio）
        + 四个像素表示一个物理像素