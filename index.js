const http = require('http')

http.createServer(function(req, res) {
    res.end('It works')
}).listen(3500)