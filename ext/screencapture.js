var fs = require('fs')
var child_process = require('child_process')

exports.capture = function (fmt, next) {
  var path = '/tmp/tmp-capture' + fmt
  child_process.execSync('screencapture -t ' + fmt + ' -m ' + path)
  child_process.execSync('jpegoptim -m80 -o -p ' + path)
  var image = fs.readFileSync(path)
  fs.unlinkSync(path) 
  return image
}
