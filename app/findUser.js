const users = require('../data/users')

module.exports = function(email, password) {
    for (const uid in users) {
        if (users[uid].email === email && users[uid].password === password) {
            return uid
        }
    }
    return false 
}