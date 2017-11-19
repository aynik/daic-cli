var path = require('path')
var util = require('util')
var events = require('events')
var child_process = require('child_process')

var EventEmitter = events.EventEmitter

var keyloggerPath = path.resolve(__dirname, './keylogger')

var KeystrokeLogger = function () {
  EventEmitter.call(this)
  this.keystrokes = 0
  this.keylogger = child_process.spawn(keyloggerPath)
  this.keylogger.stdout.on('data', function (data) {
    this.keystrokes++ 
  }.bind(this))
  this.keylogger.on('error', function (err) {
    throw err 
  })
}

util.inherits(KeystrokeLogger, EventEmitter)

KeystrokeLogger.prototype.close = function () {
  this.keylogger.kill('SIGKILL')
}

module.exports = {
  KeystrokeLogger: KeystrokeLogger
}
