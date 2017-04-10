function route(handle, pathname, response, postData) {
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, postData)
  } else {
    console.log('no request found this ' + pathname)
    response.write('404 not Found')
    response.end()
  }
}

exports.route = route
