var fs = require('fs');

var filename = '3.txt';

/*
 * 向一个指定的文件中写入数据，如果该文件不存在，则新建，如果存在则新的内容会覆盖原有的文件内容
 * */

/*
//写
fs.writeFile(filename, 'hello', function () {
    console.log(arguments);
})
*/

/*
//追加
fs.appendFile(filename, ' 学习node', function () {
    console.log(arguments);
})
*/

/*
//异步版本 检查文件是否存在，存在我true,否则为false
fs.exists(filename, function (isExists) {
    //console.log(isExists);

    if (!isExists) {
        fs.writeFile(filename, 'hello', function (err) {
            if (err) {
                console.log('出错了');
            } else {
                console.log('创建新文件成功');
            }
        })
    } else {
        fs.appendFile(filename, ' 学习node', function (err) {
            if (err) {
                console.log('新的内容追加失败');
            } else {
                console.log('新内容追加成功');
            }
        })
    }
});
*/

//同步版本
if (!fs.existsSync(filename)) {
    fs.writeFileSync(filename, 'hello');
    console.log('新文件创建成功');
} else {
    fs.appendFileSync(filename, ' 学习node')
    console.log('新内容追加成功')
}