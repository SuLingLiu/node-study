// fs模块
var fs = require('fs');
/*
 * fs.open(path, flags, [mode], callback)
 *   path : 要打开的文件的路径
 *   flags : 打开文件的方式 读/写 
 *   mode : 设置文件的模式 读/写/执行  4/2/1，在windows下面设置是没什么效果的
 *   callback : 回调
 *       err : 文件打开失败的错误保存在err里面，如果成功err为null
 *       fd : 被打开文件的标识，和定时器很像，返回定时器的编号，同样的我们可以通过这个编号来进行操作
 * */

fs.open('1.txt', 'r', function (err, fd) {
    //如果打开一个不存在的值err是一个json对象，返回一些错误信息，fd是undefined,如果打开成功，err为null,fd是3
    console.log(err);
    console.log(fd);

    if (err) {
        console.log('文件打开失败');
    } else {
        console.log('文件打开成功');
        console.log(fd); //3
    }

});


fs.open('1.txt', 'r', function (err, fd) {
    console.log(fd); //4
});