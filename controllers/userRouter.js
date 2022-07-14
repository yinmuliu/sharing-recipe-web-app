const express = require('express')
const bcrypt = require('bcrypt')

const UserModel = require('../models/userModel')
const RecipeModel = require('../models/recipeModel')
const isAuthenticated = require('../middlewares/authentication')

const userRouter = express.Router()


// ========== NEW USER: GET /user/signup (render: signup.ejs) ============ //
userRouter.get('/signup', (req, res) => {
    res.render('userViews/signup.ejs', {
        currentUser: req.session.currentUser,
        baseUrl: req.baseUrl,
        tabTitle: 'Sign Up'
    })
})

// ============ CREATE NEW USER IN DB: POST (redirect: /easypeasy) ============ //
userRouter.post('/', (req, res) => {
    // check if confirm-pw === pw
    // hash user password before putting info in db
    req.body.password = bcrypt.hashSync(
        req.body.password,
        bcrypt.genSaltSync(10)
    )
    // create new user documents in current database
    UserModel.create(req.body)
        .then((newUser) => {
            res.redirect('/user/login')
        })
        .catch((err) => {
            req.flash('info', `You're already with us! Please login or sign up with another username.`)
            res.redirect(req.baseUrl + '/signup')
        })
})

// ========== USER PAGE: GET /user/:id (render: userpage.ejs) ============ //
// Display "My Recipe" with delete and edit button
userRouter.get('/:id', isAuthenticated, (req, res) => {
    const theUser = UserModel.findById(req.params.id)
        .exec()
        .then((theUser) => {
            RecipeModel.find({ author: theUser.id })
                .exec()
                .then((userRecipes) => {
                    res.render('userViews/userpage.ejs', {
                        myRecipes: userRecipes,
                        user: theUser,
                        currentUser: req.session.currentUser,
                        baseUrl: req.baseUrl,
                        tabTitle: `${theUser.username}'s Homepage`
                    })
                })
        })
})

module.exports = userRouter
