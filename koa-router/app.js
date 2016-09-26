'use strict'

const Koa = require('koa')

const bodyParser = require('koa-bodyparser')

const router = require('koa-router')()

const app = new Koa()

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
  await next()
})

router.get('/hello/:name', async (ctx, next) => {
  var name = ctx.params.name
  ctx.response.body = `<h1>Hello, ${name}!</h1>`
})

router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>登陆</h1>
        <form action="/signin" method="post">
            <p>用户名: <input name="name" value="koa"></p>
            <p>密码: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`
})

router.post('/signin', async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || ''
    console.log(`登陆名称: ${name}, 密码: ${password}`)
    if (name === 'koa' && password === '1234') {
        ctx.response.body = `<h1>登陆成功, ${name}!</h1>`
    } else {
        ctx.response.body = `<h1>登录失败!</h1>
        <p><a href="/">再试一次</a></p>`
    }
})

app.use(bodyParser())

app.use(router.routes())

app.listen(3000)

console.log('app start in localhost:3000 by koa2')
