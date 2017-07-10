/*
//slice
var bf = new Buffer('hello');
console.log(bf); //<Buffer 68 65 6c 6c 6f>

var bf2 = bf.slice();
console.log(bf2); //<Buffer 68 65 6c 6c 6f>

var bf3 = bf.slice(2, 4);
console.log(bf3); //<Buffer 6c 6c>
bf3[0] = 4; //修改后bf收到影响
console.log(bf); //<Buffer 68 65 04 6c 6f>
*/

//copy
var bf4 = new Buffer("hello");
var bf5 = new Buffer(10);
console.log(bf4); //<Buffer 68 65 6c 6c 6f>
bf4.copy(bf5); //将bf4拷贝到bf5
console.log(bf5); //<Buffer 68 65 6c 6c 6f 00 00 00 00 00>
bf5[0] = 2;
console.log(bf5); //<Buffer 02 65 6c 6c 6f 00 00 00 00 00>, 改变后bf4不受影响