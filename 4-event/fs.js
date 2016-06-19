var fs = require('fs')

fs.readFile('1.json', 'utf-8', function (err, data) {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

// 更加底层 , 不建议使用
console.log('start fs.open')
//fs.open(路径, 操作， 权限， 回调函数)
fs.open('1.json', 'r', function (err, fd) {
  if (err) {
    console.log(err)
    return
  }

  var buf = new Buffer(8)
  fs.read(fd, buf, 0, 8, null, function (err, bytesRead, buffer) {
    if (err) {
      console.log(err)
      return
    }
    console.log('bytesRead' + bytesRead)
    console.log(buffer)
  })
})
