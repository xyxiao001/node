function route(handle, pathname) {
  console.log('address is ' + pathname)
  if (typeof handle[pathname] === 'function') {
    return handle[pathname]()
  } else {
    console.log('no request found this ' + pathname)
    return '404 not Found'
  }
}

exports.route = route
