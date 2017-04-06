'use strict'
var http = require('http')

function onRequest(req, res) {
  res.writeHead(200, {'Content-Type': 'text/pain'})
  res.write('hello world')
}

var server = http.createServer(onRequest)

server.listen('8080')

console.log('server is run on localhost:8080')
