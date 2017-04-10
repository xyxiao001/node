var querystring = require('querystring')
var fs = require('fs')
var formidable = require('formidable')

function start(response, request) {
  var body = `<html>
    <head>
      <meta charset="utf-8">
    </head>
    <body>
      <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="upload" />
        <input type="submit" value="上传" />
      </form>
    </body>
  </html>`
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.write(body)
  response.end()
}

function upload(response, request) {
  console.log('about upload')
  var form = new formidable.IncomingForm()
  form.parse(request, function (error, fields, files) {
    console.log('parseing done')
    fs.renameSync(files.upload.path, '/tmp/test.png')
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write('received image: <br/>')
    response.write("<img src='/show' />")
    response.end()
  })
}

function show(response, request) {
  console.log('welcome to show page')
  fs.readFile('tmp/test.jpg', 'binary', function (error, file) {
    if (error) {
      response.writeHead(500, {'Content-Type': 'text/pain'})
      response.write(error + '/n')
      response.end()
    } else {
      response.writeHead(200, {'Content-Type': 'image/png'})
      response.write(file, 'binary')
      response.end()
    }
  })
}

exports.start = start
exports.upload = upload
exports.show = show
