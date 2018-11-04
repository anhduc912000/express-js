// cách đọc file html bằng Node.js
// có 2 cách dùng hàm readfile và dưới đây

var http = require('http');
var fs = require('fs');

// hàm create server 
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html; chartset=utf-8"});
    fs.ReadStream("./readFile.html").pipe(res);
}).listen(3000);

