var fs = require('fs');

var filename = '2.txt';

//这个方法不是很稳定，用时查看api查看一下
fs.watch(filename, function (ev, fn) {
    console.log(ev);

    if (fn) {
        console.log(fn + ' 发生了改变');
    } else {
        console.log('....');
    }

});