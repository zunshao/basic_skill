/* 
  process.argv 属性返回一个数组，这个数组包含了启动Node.js进程时的命令行参数。第一个元素为process.execPath(即process.argv0)。第二个元素为当前执行的JavaScript文件路径。剩余的元素为其他命令行参数。
*/
/* 先命令，真正模版后续补充 */
var argvs = process.argv.slice(2);
switch (argvs[0]) {
  case 'init':
    console.log('start init')
    break;
  case 'install':
    console.log(`start install ${argvs[1]}`)
    break;
  default:
    break;
}

/* fs.readdirSync(path.join(__dirname, './frames'))
得到的结果为：文件路径字符串组的数组
文件路径：相对路径（path.join(__dirname, './frames')）
*/


/* 
fs.readFileSync(`./frames/${i}.txt`, 'utf8')
结果为：utf8编码格式的文件内容
*/

/* 
process.on('SIGINT', () => {
  // ctrl + c将触发
})
*/

/* 
process.exit() 退出repl环境
*/

/*
* process.stdout.write('string' + '/n')
* process.stdin.on('data', function(data) {
* })
* process.stdout.write repl控制台打印字符
* process.stdin.on('data', function(data) {
*   const data = data.toString().trim()
* }) // 用来监听 repl输入
* 注意两个问题：（1）类型为对象，字节流； （2）内容包括一个回车符,toString()转成字符，trim()去掉两端的空符
* */

/*
* module对象
* module.id 模块标识符
* module.filename // 模块文件的绝对路径
* module.loaded // 表示模块是否已经加载完成
* module.parent // 表示调用该模块的模块
* module.children // 返回一个数组， 该模块用到其它模块
* */

// module.exports 与 exports

var module = {}
module.exports = {}
var exports = module.exports
// 上述代码在module内部已经定义好， 两者指向相同
// 可以在外部重新修改
module.exports = exports = {}

/*
* fs
* 涉及到文件路径，肯定是相对路径（物理跟径）
* */


/*
* path
* path.normalize() // 得到规范路径
* path.join(path1, path2, path3) // 将路径合并
* path.resolve(__dirname, path1, path2) // 获取绝对路径，__dirname可以不写
* path.dirname(__dirname, '111')
* path.basename(path, [ext]) // 获取路径中的文件名，后缀可选，使用'.ext', 不带后缀
* path.extname(path) // 获取后缀
* */
