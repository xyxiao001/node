function route(handle, pathname, response, request) {
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, request)
  } else {
    console.log('no request found this ' + pathname)
    response.write('404 not Found')
    response.end()
  }
}

exports.route = route
