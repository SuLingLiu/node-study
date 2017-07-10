var bf = new Buffer('hello');
console.log(bf.toString()); //hello
console.log(bf.toString('utf-8', 1, 3)); //el，不包含结束位

var bf2 = new Buffer('你好');
console.log(bf2);
console.log(bf2.toString('utf-8', 1)); //打印出来会是乱码，截取的位置不对
console.log(bf2.toString('utf-8', 3));

console.log(bf.toJSON()); //把buffer变成一种json格式，{ type: 'Buffer', data: [ 104, 101, 108, 108, 111 ] }