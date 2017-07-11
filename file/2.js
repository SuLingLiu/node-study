var fs = require('fs');
/*
//异步
fs.open('1.txt', 'r', function (err, fd) {
    console.log(fd);
});

console.log(fd);//此处会被首先输出，报错
*/

var fd = fs.openSync('1.txt', 'r');

console.log(fd); //3