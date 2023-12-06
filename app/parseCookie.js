module.exports = function(req) {
    if (!req.headers.cookie) {
        return false
    }
    return req.headers.cookie.split(';').reduce((acc, el) => {
        const [key, value] = el.trim().split('=')
        acc[key] = decodeURIComponent(value)
        return acc
    }, {})
}