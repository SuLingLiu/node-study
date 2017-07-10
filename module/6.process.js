/*
 * process : 他是一个全局对象，
 * */

//console.log( process );
//console.log( global.process );

//console.log( process.argv );

//console.log( process.env );

/*console.log(process.pid); //可以在任务管理器的详细信息里看进程
console.log(process.title, 111); //当前进程显示的名词


setInterval(function () {

}, 5000);*/


/*
setTimeout(function() {
    process.exit();
}, 5000);*/

/*
//console.log的实现过程
function Log(data) {
    process.stdout.write(data);
}
//process.stdout.write('hello');
//Log('你好');
*/

/*
//默认情况下，输入流是关闭的，要监听处理输入流数据，首先要开启输入流
process.stdin.resume();

//用于监听用户的输入数据，光标等待用户输入，输入完会调用回调函数
process.stdin.on('data', function (chunk) {
    console.log('用户输入了：' + chunk);
});
*/

//命令行交互
process.stdin.resume();
var a;
var b;
process.stdout.write('请输入a的值：');

process.stdin.on('data', function (chunk) {

    if (!a) {
        a = Number(chunk);
        process.stdout.write('请输入b的值：');
    } else {
        b = Number(chunk);

        process.stdout.write('结果是：' + (a + b));
    }

});