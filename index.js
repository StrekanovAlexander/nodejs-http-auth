const http = require('http')
const path = require('path')
const staticFile = require('./app/staticFile')
const attemptLogin = require('./app/attemptLogin')
const isCookieExists = require('./app/isCookieExists')

http.createServer(function(req, res) {
    const url = req.url.split('?')[0]
    const isCookie = isCookieExists(req)
    switch (url) {
        case '/':
            staticFile(res, '/html/index.html', '.html')
            break
        case '/admin':
            if (isCookie) {
                staticFile(res, '/html/admin.html', '.html')
            } else {
                staticFile(res, '/html/login.html', '.html')
            }
            break
        case '/login':
            if (req.method === 'GET') {
                staticFile(res, '/html/login.html', '.html')
            } else {
                attemptLogin(req, res)
            }
            break
            case '/logout':
                res.setHeader('Set-Cookie', [ 'uid=;max-age=0', 'email=;max-age=0' ])
                staticFile(res, '/html/login.html', '.html')
                break    
        default: 
            const ext = path.extname(url)
            if (ext) {
                staticFile(res, url, ext)
            } else {
                res.end('File Not Found')     
            }
    } 
}).listen(3500)