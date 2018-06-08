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
        + git status // 查看至上次提交后，修改的内容
        + git diff // 查看具体修改的内容
        + git diff src //查看指定的路径下具体的修改内容
    + git commit -am "message"
    + git push origin <"branchname">
+ 向其它分支合并
    + git pull origin <"mergingBranchname">
    + git add -all //后续修改
    + git commit -am 'message'
    + git merge <"mergingBranchname">
    
### git 提交细节
+ 查看本地与远程仓比修改的文件
    + git status // 本地修改文件
    + git diff // 修改文件的具体内容
    + git checkout <'具体文件路径/不建议用'> //某文件不提交,具体操作细节是用远程将本地覆盖？
+ git add 添加要提交的文件
    + git add . // include modified new, but except delete
    + git add u // u means update, for all tracked files, except new file
    + git add -A 
    + 前后两种确定是否要添加的文件不建议，要加就手动加上，本身本地修改，而不修改远程也不合理
+ 撤销add后的文件。
    + git reset HEAD <'src'> //(1)将其恢复至未添加状态
    + git checkout <'src'> //(2) 远程重至？
    

###### 补充说明 origin为远程仓标识符 未完全测试