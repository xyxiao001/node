'use strict'
var hi = require('./1')

//引入fs
var fs = require('fs')

hi('xiaoming')

//程序退出才会执行
process.on('exit', function () {
  console.log('exit')
})

// 下一次事件循环才会执行
process.nextTick(function () {
  console.log('next')
})

console.log('pre')

//异步读取文本文件
fs.readFile('1.txt', 'utf-8', function (err, data) {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

//读取图片文件
fs.readFile('1.jpg', function (err, data) {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
    console.log(data.length + 'bytes')
  }
})

// 同步读取文件
try {
  var data = fs.readFileSync('1.txt', 'utf-8')
  console.log(data)
} catch (err) {
  console.log(err)
}

// 异步写入
fs.writeFile('1.txt', '我是写入的， 哈哈哈', function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('写入成功, 写入时间:' + new Date().toLocaleString())
  }
})

//文件输入输出流 steam
var wsl = fs.createWriteStream('2.txt', 'utf-8')
wsl.write('使用stream写入的数据..')
wsl.write('继续写..')
wsl.end()

var rsl = fs.createReadStream('2.txt', 'utf-8')
rsl.on('data', function (chuck) {
  console.log('DATA:' + chuck)
})

rsl.on('end', function () {
  console.log('读取2.txt结束..')
})

rsl.on('error', function (error) {
  console.log(error)
})