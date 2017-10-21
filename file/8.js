var fs = require('fs');
/*
 * fs.mkdir(path, [mode], callback)
 * */

//创建一个空文件夹
/*fs.mkdir('./1', function () {

    console.log(arguments);
});*/

//删除一个空文件夹
/*fs.rmdir('./1', function () {
    console.log(arguments);
})*/

//获取文件或文件夹的绝对路径 D:\liusuling\node\node-study\file\7.js
fs.realpath('./7.js', function (err, data) {
    console.log(data);
})

/*fs.readdir('../file', function (err, fileList) {

    console.log(fileList); //../file文件夹下的所有文件名

    fileList.forEach(function (f) {

        fs.stat(f, function (err, info) {

            switch (info.mode) {
                case 16822:
                    console.log('[文件夹] ' + f);
                    break;

                case 33206:
                    console.log('[文件] ' + f);
                    break;

                default:
                    console.log('[其他类型] ' + f);
                    break;
            }

        });

    });

})*/