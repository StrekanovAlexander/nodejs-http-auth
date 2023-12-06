const users = require('../data/users')
const parseCookie = require('./parseCookie')

module.exports = function(req) {
    const cookie = parseCookie(req)
    return cookie && (cookie.uid in users)
}
