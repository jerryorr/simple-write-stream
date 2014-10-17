var stream = require('stream')

var OutStream = module.exports = function() {
  stream.Transform.call(this,{objectMode: false})
}

OutStream.prototype = Object.create(
  stream.Transform.prototype, {constructor: {value: OutStream}} )

OutStream.prototype._transform = function(chunk, encoding, callback) {
  this.push(chunk, encoding)
  callback && callback()
}

OutStream.prototype.write = function () {
  this._transform.apply(this, arguments)
}

OutStream.prototype.end = function () {
  this._transform.apply(this, arguments)
  this.emit('end')
}
