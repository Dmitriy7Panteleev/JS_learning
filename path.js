const path = require('node:path')

console.log('filename: ', path.basename(__filename))

console.log('filedirname: ', path.dirname(__filename))

console.log('filextname: ', path.extname(__filename))

const parse = path.parse(__filename)

console.log('parse: ', parse)

console.log(path.join(__dirname, 'server', 'index.html'))
