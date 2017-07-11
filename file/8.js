var fs = require('fs');
/*
 * fs.mkdir(path, [mode], callback)
 * */

/*
fs.mkdir('./1', function () {

    console.log(arguments);
});
*/
/*
fs.rmdir('./1', function () {
    console.log(arguments);
})
*/

fs.readdir('../file', function (err, fileList) {

    console.log(fileList); //当前文件夹下的所有文件

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

})