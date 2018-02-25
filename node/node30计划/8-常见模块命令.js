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