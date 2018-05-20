import express from 'express'

//启动服务器
const app = express()

// public 文件 通过static访问
app.use('/static', express.static('public'))

// 允许跨域
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, accessToken')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.get('/', (req, res) => {
  let options = {
    root: __dirname + '/public/'
  }
  res.sendFile('index.html', options)
})


app.get('/lang', (req, res) => {
  res.send(`lang = ${req.query.lang}`)  
})

// 404报错
app.use((req, res, next) => {
  res.status(404).send('Sorry cant find that!')
})

app.listen(3000, () => {
  console.log('3000 is reading')
})
