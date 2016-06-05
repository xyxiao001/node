var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>http server</h1>')
  res.end('<p>123</p>')
}).listen(3000)
console.log('基于http 启动的服务 port is 3000')
