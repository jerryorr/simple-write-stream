var WriteStream = require('../')
  , assert = require('chai').assert

describe('simple-write-stream', function () {
  it ('emits data events when stuff is written', function (done) {
    var s = new WriteStream()

    var text = 'Space, the final frontier...'

    s.on('data', function (chunk) {
      assert.equal(chunk.toString(), text)
      done()
    })

    s.write(text)
  })

  it ('emits end event when done', function (done) {
    var s = new WriteStream()

    s.on('end', function (chunk) {
      done()
    })

    s.write('These are the voyages of the starship Enterprise')
    s.end()
  })
})