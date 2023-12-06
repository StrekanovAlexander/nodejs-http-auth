const fs = require('fs')
const mimeTypes = require('./mimeTypes')

module.exports = function(res, fileName, ext) {
    fs.readFile('./public' + fileName, (err, data) => {
        if (err) { 
            res.end('File not found')
        }
        else {
            res.setHeader('Content-Type', mimeTypes[ext])
            res.end(data)
        }
    }) 
}