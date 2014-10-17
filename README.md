simple-write-stream
===================

A simple Readable stream that you can write to at will.

# Usage
```
var WriteStream = require('simple-write-stream')

s.on('data', function (chunk) {
  console.log(chunk.toString())
})

s.write('Space, the final frontier...')
s.write('These are the voyages of the starship Enterprise')
```
