## git基础 ##
+ 本地仓库
    + 本地目录通过 git init
+ 远程仓库
    + github gitlab 码云上项目
+ 暂存区（重要！！！）
    + 本地仓与远程仓纽带
    + 如下代码
        + git pull
        + git add -A // 将当前工作区所有改动文件添加至 暂存区
        + git commit -am "[docs]: demonstrate temporary storaged direction!" // 将本次工作区修改文件添加commit信息
        + git push origin dev // 将暂存区文件推送至远程仓