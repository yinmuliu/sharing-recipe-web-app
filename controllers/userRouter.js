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

// ============ STORE NEW USER IN DB: POST (redirect: /easypeasy) ============ //
userRouter.post('/', (req, res) => {
    // hash user password before putting info in db
    req.body.password = bcrypt.hashSync(
        req.body.password,
        bcrypt.genSaltSync(10)
    )
    // create new user documents in current database
    UserModel.create(req.body)
        .then((newUser) => {
            // console.log('created user is: ', newUser);
            res.redirect('/easypeasy')
        })
})

module.exports = userRouter
