'use strict'
var http = require('http')

var server = http.createServer(function (req, res) {
  console.log(req.method + ':' + res.url)
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write('<h1>hello</h1>')
})

server.listen('8080')

console.log('server is run on localhost:8080')