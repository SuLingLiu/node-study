/*
 * 类方法，静态方法
 * */
/*
//判断是否支持，支持返回true，否则返回false
console.log(Buffer.isEncoding('utf-8')); //true
console.log(Buffer.isEncoding('gbk')); //false
console.log(Buffer.isEncoding('hex')); //true
*/

/*
//测试是否是buffer,是返回true,否则返回false
var arr = [1, 2, 3];
var bf = new Buffer(10);

console.log(Buffer.isBuffer(arr)); //false
console.log(Buffer.isBuffer(bf)); //true
*/

/*
//返回字节长度
var str1 = 'hello';
console.log(str1.length); //5
console.log(Buffer.byteLength(str1)); //5

var str2 = '你好';
console.log(str2.length); //2
console.log(Buffer.byteLength(str2, 'utf-8'));//6,不同编码对应的字节长度也是不一样的
*/

/*
//拼接buffer数组
var str1 = 'hello';
var str2 = '你好';

var list = [new Buffer(str1), new Buffer(str2)];
console.log(list); //[ <Buffer 68 65 6c 6c 6f>, <Buffer e4 bd a0 e5 a5 bd> ]

var bf = Buffer.concat(list, 11);//为了提高性能可以写一下字节数，也可以用程序去算11
console.log(bf); //<Buffer 68 65 6c 6c 6f e4 bd a0 e5 a5 bd>
*/

//
process.stdout.write('请输入内容：');

process.stdin.resume();

process.stdin.on('data', function (chunk) {
    console.log(chunk); //<Buffer 61 0d 0a>,0a是换换行
    console.log(chunk.toString()); //a
    //如果用字符串拼接了，程序会自动转换，不需要自己再转换
    console.log('输入的内容是：' + chunk);

});