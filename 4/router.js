function route(handle, pathname) {
  console.log('address is ' + pathname)
  if (typeof handle[pathname] === 'function') {
    handle[pathname]()
  } else {
    console.log('no request found this ' + pathname)
  }
}

exports.route = route
