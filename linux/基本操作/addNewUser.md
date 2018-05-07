### 新增用户一般步骤
+ 切换至root用户
    + sudo su
+ 添加用户
    + useradd userName
    + passwd userPassword
+ 为该用户指定命令解释程序
    + usermod -s /bin/bash userName
+ 为该用户指定主目录
    + usermod -d /home/userName userName
    
+ 切换用户
    + su userName