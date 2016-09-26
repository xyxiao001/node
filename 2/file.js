'use strict'
var  fs = require('fs'),
     url = require('url'),
     path = require('path'),
     http = require('http')

var root = path.resolve(process.argv[2] || '.')

console.log('目录' + root)

var server = http.createServer(function (req, res) {
  var pathName = url.parse(req.url).pathname
  var filePath = path.join(root, pathName)
  fs.stat(filePath, function (err, stats) {
    if (!err && stats.isFile()) {
      console.log('200' + req.url)
      res.writeHead(200)
      fs.createReadStream(filePath).pipe(res)
    } else {
      console.log('404', + req.url)
      res.writeHead(404)
      res.end('404 Not Found')  
    }
  })
})

server.listen(8080)

console.log('server is run on localhost:8080 fs')