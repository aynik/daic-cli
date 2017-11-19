process.on('SIGINT', function () {
  console.log('sigint')
  setTimeout(function () {
    process.exit(0)
  }, 1000)
})

setTimeout(function () {}, 10000)
