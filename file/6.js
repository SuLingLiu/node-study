var fs = require('fs');
var filename = '3.txt';
/*
//读文件
fs.readFile(filename, function (err, data) {
    if (err) {
        console.log('文件读取失败');
    } else {
        //读取的文件是buffer对象，所以需要先转字符串
        console.log(data.toString());
    }

});
*/

/*
//删除文件
fs.unlink(filename, function (err) {
    if (err) {
        console.log('删除失败');
    } else {
        console.log('删除成功');
    }
})
*/

/*
//修改文件名
fs.rename(filename, '3.new.txt', function () {
    console.log(arguments);
})
*/


//相当于右键文件的属性里的信心
fs.stat('3.new.txt', function () {
    console.log(arguments);
})