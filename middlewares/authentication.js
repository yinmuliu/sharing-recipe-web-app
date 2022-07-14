require('dotenv').config()

const isAuthenticated = (req, res, next) => {
    if(req.session.currentUser) {
        return next()
    } else {
        res.redirect('/user/login')
    }
}

module.exports = isAuthenticated