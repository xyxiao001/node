var fs = require('fs');

var num = Math.random()*100;

fs.writeFile('1.txt', num, function (err) {
  if (err) {
    consoel.log('err')
  } else {
    console.log('成功写入!!')
  }
});

fs.readFile('1.txt', 'utf-8', function (data, err) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
