//目标： 爬取斗鱼tv首页的所有直播间地址 和 人数  然后爬到直播间最新一条弹幕

var express = require('express')
var superagent = require('superagent')
var cheerio = require('cheerio')
var url = require('url')
var eventproxy = require('eventproxy')

//启动服务器
var app = express()

//目标网址
var quan = 'http://www.douyu.com/'
var all =  'http://www.douyu.com/directory/all'

app.get('/', function (req, res) {
  superagent.get(all)
    .end(function (err, sres) {
      if (err) {
        console.log(err)
      }
      var allUrls = []
      var $ = cheerio.load(sres.text)
      $('#live-new-show-content-box li a').each(function (index, el) {
        var $el = $(el)
        var href = url.resolve(quan, $el.attr('href'))
        allUrls.push(href)
      })
      $('#live-list-contentbox li a').each(function (index, el) {
        var $el = $(el)
        var href = url.resolve(quan, $el.attr('href'))
        allUrls.push(href)
      })
      console.log(allUrls)
      var ep = new eventproxy()
      ep.after('all_html', allUrls.length, function (topics) {
        topics = topics.map(function (topicPair) {
          var topicUrl = topicPair[0]
          var topicHtml = topicPair[1]
          var $ = cheerio.load(topicHtml)
          return ({
            '直播间名称': $('h1').text().trim(),
            '主播名称': $('.zb-name').text().trim(),
            '体重': $('.weight-box').text().trim(),
            '网址': topicUrl,
            "人气": $('.num-box .num-v').text().trim()
          })
        })
        res.send(topics)
      })

      allUrls.forEach(function (allUrl) {
        superagent.get(allUrl)
          .end(function (err, res) {
            if (err) {
              console.log(err)
            }
            console.log(allUrl + ' 成功爬取')
            ep.emit('all_html', [allUrl, res.text])
          })
      })
    })
})

app.listen(3000, function () {
  console.log('3000 is reading')
})
