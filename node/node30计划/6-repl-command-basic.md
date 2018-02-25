### basic power-shell command

* cd // change direction
  * 某些路径存在空格，系统不识识别，可以用引号包含
* mkdir zhang // 创建文件夹
* rm zhang // 删除文件夹
* ls(dir) // list 显示当前目录下文件
* clear(cls) // 清屏
* echo 'helloworld' >> tem.txt //将字符写入 tem.txt,不存在创建
* cat tem.txt // 查看文件内容

### repl 基本命令

* repl // read eval print loop
* node // 回车进入 node repl 环境
  * node --use-strict // 进入 node 严格模式
* .exit //退出 node repl 模式
* node -e 'jsString' // execute js code
* \_ // 通过符号\_可以得到 node repl 环境下上次执行的结果，无则是 undefined
