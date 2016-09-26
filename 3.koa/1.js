'use strict'

var koa = require('koa')

var app = koa()

app.use(function* () {
  this.body = 'node server use koa'
})

// app.use(async (ctx, next) => {
//   await next()
//   ctx.response.body = 'koa2 with es7'
// })

app.on('error', function(err,ctx){
	console.log(err);
}); 

app.listen('8080', function () {
  console.log('read go localhost:8080')
})