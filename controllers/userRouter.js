const express = require('express')
const bcrypt = require('bcrypt')

const UserModel = require('../models/userModel')

const userRouter = express.Router()


// ========== NEW USER: GET /user/signup (render: signup.ejs) ============ //
userRouter.get('/signup', (req, res) => {
    res.render('userViews/signup.ejs', {
        baseUrl: req.baseUrl,
        tabTitle: 'Sign Up'
    })
})

// ============ STORE NEW USER IN DB: POST (redirect: /easypeasy/recipe) ============ //
// userRouter.post('/', (req, res) => {

// })

module.exports = userRouter
