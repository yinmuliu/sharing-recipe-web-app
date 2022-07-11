// require bcrypt for hashing password
const bcrypt = require('bcrypt')
const express = require('express')

// require user schema
const UserModel = require('../models/userModel')

// set session router
const sessionRouter = express.Router()

// ============ LOGIN GET /user/login (render: login.ejs) ============ //
sessionRouter.get('/login', (req, res) => {
    console.log(req.session);
    res.render('sessionViews/login.ejs', {
        currentUser: req.session.currentUser,
        baseUrl: req.baseUrl,
        tabTitle: 'Login'
    })
})

// ============ LOGOUT DELETE (redirect: /easypeasy) ============ //

// export session router
module.exports = sessionRouter