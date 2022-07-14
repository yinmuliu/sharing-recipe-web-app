// require bcrypt for hashing password
const bcrypt = require('bcrypt')
const express = require('express')

// require user schema
const UserModel = require('../models/userModel')

// set session router
const sessionRouter = express.Router()

// ============ LOGIN GET /user/login (render: login.ejs) ============ //
sessionRouter.get('/login', (req, res) => {
    res.render('sessionViews/login.ejs', {
        currentUser: req.session.currentUser,
        baseUrl: req.baseUrl,
        tabTitle: 'Login'
    })
})
// ============ LOGIN POST (redirect: /user/login or /easypeasy) ============ //
sessionRouter.post('/login', (req, res) => {
    UserModel.findOne({ username: req.body.username })
        .exec()
        .then((user) => {
            console.log(user)
            // condition 1: user not found, please sign up first
            if(!user) {
                req.flash('error', `You're not one of us yet. How about signing up? :)`)
                return res.redirect(req.baseUrl + '/login')
            } 
            // condition 2: found user, password correct/incorrect
            // if password correct
            if(bcrypt.compareSync(req.body.password, user.password)) {
                req.session.currentUser = user
                res.redirect('/user/' + user.id)
            } else {
                // if password incorrect
                req.flash('error', 'Oops! Username or password is incorrect. Try again?')
                res.redirect(req.baseUrl + '/login')
            }
        })
})

// ============ LOGOUT DELETE (redirect: /easypeasy) ============ //
sessionRouter.delete('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/easypeasy')
    })
})

// export session router
module.exports = sessionRouter
