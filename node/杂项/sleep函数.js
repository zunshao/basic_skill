// node自己写一个sleep函数

function sleep(fs) {
    var start = Date.now;
    var expire = start + fs;
    while (Date.now() < expire);
    return;
}