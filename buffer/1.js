/*
 * Buffer类
 *   用于操作二进制数据流
 * 创建Buffer对象
 *  1.new Buffer(size)
 *  2.new Buffer(array)
 *  3.new Buffer(str,[encoding])
 * */
/**
 * 1.new Buffer(size);
 * size [Number] 创建一个Buffer对象，并为这个对象分配一个大小
 * 当我们为一个Buffer对象分配空间大小以后，其长度是固定，不能更改
 */

/*
var bf = new Buffer(5);
console.log(bf); //<Buffer 40 2c 45 00 00> 5个字节长度，显示出来的是16进制
bf[6] = 2;
console.log(bf); //超过的长度是不会变的
bf[1] = 2;
console.log(bf);
*/

/*
//2.new Buffer(array);
var bf = new Buffer([1, 2, 3]);
console.log(bf);
bf[10] = 10;
console.log(bf); //长度是固定死的
*/

/*
//3.new Buffer(string, [encoding]);,默认是utf8
var bf = new Buffer('hello', 'utf8');
console.log(bf); //显示的是16进制
//看看buffer存的是不是上面几个字符
for (var i = 0; i < bf.length; i++) {
    //console.log(bf[i]); //显示出来的是二进制
    //console.log(bf[i].toString(16));//转成16进制
    console.log(String.fromCharCode(bf[i]));
}
*/

/**/
//字节长度跟字符串长度是不一样的，buffer的是字节长度
var str1 = 'hello';
var bf1 = new Buffer(str1);
console.log(str1.length); //5
console.log(bf1.length); //5

var str2 = '你好';
var bf2 = new Buffer(str2);
console.log(str2.length); //2
console.log(bf2.length); //6