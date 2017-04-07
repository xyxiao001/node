'use strict'
var http = require('http')
var url = require('url')

function start(route, handle) {
  function onRequest(req, res) {
    var pathname = url.parse(req.url).pathname
    res.writeHead(200, {'Content-Type': 'text/pain'})
    res.write(pathname)
    route(handle, pathname)
  }

  var server = http.createServer(onRequest)

  server.listen('8080')

  console.log('server is run on localhost:8080')
}

exports.start = start
