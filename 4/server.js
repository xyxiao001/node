'use strict'
var http = require('http')
var url = require('url')

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname
    var postData = ''
    if (pathname !== '/favicon.ico') {
      console.log('request for ' + pathname)
      request.setEncoding('utf-8')
      request.on('data', function (postDataChuck) {
        postData += postDataChuck
        console.log('post data chuck ' + postDataChuck)
      })
      request.on('end', function () {
        route(handle, pathname, response, postData)
      })
    }
  }

  var server = http.createServer(onRequest)

  server.listen('8080')

  console.log('server is run on localhost:8080')
}

exports.start = start
