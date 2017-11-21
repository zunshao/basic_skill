### git最粗暴四步 虽可用 强烈不建议
+ git pull origin <"branchname">
+ git add --all
+ git commit -am <"message">
+ git push origin <"branchname">

### 用远程分支将本地仓覆盖
+ git fetch --all
+ git reset --hard origin/<"branchname">

### 创建新项目与提交
+ git init //初始代本地
+ git clone <url> //远程复制
+ git branch //查看分支
+ 切换分支
    + git branch <"branchname"> //创建分支
    + git checkout <"branchname"> // 切换分支
    + git checkout -b <"branchname"> // 创建并切换分支
+ 当前分支提交
    + git pull origin <"branchname">
    + git add --all//后续修改
    + git commit -am "message"
    + git push origin <"branchname">
+ 向其它分支合并
    + git pull origin <"mergingBranchname">
    + git add -all //后续修改
    + git commit -am 'message'
    + git merge <"mergingBranchname">

###### 补充说明 origin为远程仓标识符 