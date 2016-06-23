// 读取json 里面的用户名密码
var fs = require('fs')

fs.readFile('1.json', 'utf-8', function (err, data) {
  if (err) {
    console.log(err)
  } else {
    // console.log(data)
    var arr = JSON.parse(data).user
    arr.push({'username': 'test', password: 1234})
    var fin = JSON.stringify({user: arr})
    fs.writeFile('1.json', fin, function (err) {
      if (err) {
        console.log(err)
      }
      console.log('写入成功!')
    })
  }
})
