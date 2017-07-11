var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res) {
	//req.url属性，表示用户的请求URL地址。所有的路由设计，都是通过req.url来实现的
	//url.parse()可以将一个完整的URL地址，分为很多部分：
	//host、port、pathname、path、query
	var urlParse = url.parse(req.url);
	var pathname = urlParse.pathname;
	//url.parse()如果第二个参数是true，那么就可以将所有的查询变为对象
	//就可以直接打点得到这个参数
	var query = urlParse.query;
	//直接打点得到这个参数
	var age = query.age;
	
	console.log("url:" + req.url );//http://localhost:3000/hello?age=1&b=2
	console.log("urlParse", urlParse);
	console.log("pathname:" + pathname);//pathname:/hello
	console.log("query:" , query);//query: { age: '1', b: '2' }
	console.log("age:" + age);//age:1
	console.log(url.search(req.url))
	
	res.end();
})

//输入地址：http://localhost:3000/hello?age=1&b=2
server.listen(3000);
