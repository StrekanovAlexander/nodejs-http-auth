const findUser = require('./findUser')
const staticFile = require('./staticFile')
const users = require('../data/users')

module.exports = function(req, res) {
    let chunks = '';
    req.on('data', (chunk) => {
        chunks += chunk.toString()
    }).on('end', () => {
        const params = new URLSearchParams(chunks)
        const uid = findUser(params.get('email'), params.get('password'))
        if (uid) {
            res.setHeader('Set-Cookie', [`uid=${uid}`,`email=${users[uid].email}`])
            staticFile(res, '/html/admin.html', '.html')
        } else {
            staticFile(res, '/html/login.html', '.html')
        }
    })
}