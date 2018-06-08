### git 初始设置
+ 设置用户名和邮箱
    + git config --global user.name "firstName lastName"
    + git config --global user.email "your_email@example.com"
+ 提高输出可读性
    + git config --global color.ui auto
    
### github 一般功能
+ fork 创建某项目的个人远程仓
+ fork 后，通过本地修改提交，然后通过 new pull request 请求与原项目远程合并
+ new pull request可以添加 issue
+ issue 相关问题
+ watch 对某个项目的关注
+ follow 对某个作者的关注
+ star 项目收藏，便于后续查找
+ wiki 某项目 文档，对所有人读写公开？？

### git 基本操作
+ git init 初始化仓库
+ git status 查看状态
+ git add 向暂存区中添加文件
    + git add . // all modified except delete
    + git add u // except new add files
    + git add -A
    + touch fileName // 创建文件名
+ git commit 保存仓库的历史记录
    + git commit -m 'message'
+ git log 查看提交日志
    + git log --pretty=short //只显示提交信息的第一行
    + git log fileName/path //显示指定目录,文件
    + git log -p // 显示文件改动
        + git log -p readme.md
    + git log --graph //以图表的形式查看分支
+ git diff 查看工作树和暂存区的差别

### git 分支操作
+ git branch //查看分支
+ git checkout -b feature-A // 切换到分支feature-A,若没有将创建
    + git branch feature-A
    + git checkout feature-A
+ git checkout - // 返回上一个分支
+ 将feature-A 合并至 master
    + git checkout master
    + git merge --no-ff feature-A
    
### 更改提交操作
+ git reset
    + git reset --hard '时间节点' // 恢复至某个时间节点
+ 冲突
```html
<<<<<<< Head
  - some codes
=======
  - some codes
// head = 号上即为 工作树中的内容，=号之下为将要提交的内容
```
+ git commit -amend 
    + 修改之前 commit 信息，一般发生在解决冲突之后
+ git rebase -i head-1 //将某几次提交压缩成一次提交
    + pick '时间节点' Add feature // ????
    
### 提交至远程
+ git remote add origin '远程地址'
+ git push -u origin master
    + -u 将远程的分支 默认push pull操作分支
+ 如何推送至 feature-A分支？
    + git checkout -b feature-A
    + git push -u origin feature-A
+ 获取远程 feature-D分支
    + git checkout -b feature-D origin/feature-D 
+ 新创建的分支提交失败，有可能是初使化失败
    + git init
+ 接上 本地新建分支，需远程创建然后再提交
    + git push --upstream origin branchname
+ 合并
    + git merge --squash branchName
   
        