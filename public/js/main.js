if (document.cookie) {
    const cookie = document.cookie.split(';').reduce((acc, el) => {
        const [key, value] = el.trim().split('=')
        acc[key] = decodeURIComponent(value)
        return acc
    }, {})

    const btnLogin = document.querySelector('.button-login')
    btnLogin.href = '/logout'
    btnLogin.innerHTML = 'Logout'

    const adminTitle = document.querySelector('.admin-title')
    if (adminTitle) {
        adminTitle.innerHTML = cookie.email
    }
}