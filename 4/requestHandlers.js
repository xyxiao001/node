function start() {
  console.log('request start')
  return 'Hello start'
}

function upload() {
  console.log('request upload')
  return 'Hello upload'
}

exports.start = start
exports.upload = upload
