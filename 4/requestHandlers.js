// var exec = require('child_process').exec
var querystring = require('querystring')
function start(response, postData) {
  // function sleep(milliSeconds) {
  //   var startTime= new Date().getTime()
  //   while (new Date().getTime() < startTime + milliSeconds) {}
  // }
  // sleep(3000)
  // return 'Hello start'

  // 非阻塞的请求
  // exec('ls -lah', function (error, stdout, stderr) {
  //   response.writeHead(200, {'Content-Type': 'text/pain; charset=utf-8'})
  //   response.write(stdout)
  //   console.log(stdout)
  //   response.end()
  // })
  var body = `<html>
    <head>
      <meta charset="utf-8">
    </head>
    <body>
      <form action="/upload" method="post">
        <textarea name="des"></textarea>
        <input type="submit" value="提交" />
      </form>
    </body>
  </html>`
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.write(body)
  response.end()
}

function upload(response, postData) {
  response.writeHead(200, {'Content-Type': 'text/pain'})
  var data = querystring.parse(postData).des
  response.write('Hello upload des is ' + data)
  response.end()
}

exports.start = start
exports.upload = upload
