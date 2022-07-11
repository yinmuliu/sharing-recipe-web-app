// ========== DEPENDENCIES ========= //
require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const methodOverride = require('method-override')
const session = require('express-session')

const app = express()
const PORT = process.env.PORT
const dbURL = process.env.MONGODB_URL
const recipeRouter = require('./controllers/recipeRouter')
const userRouter = require('./controllers/userRouter')

// ========== MIDDLEWARE ========= //
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(session({
    secret: 'mochi the kitty',
    cookie: { maxAge: 300000 },
    resave: false,
    saveUninitialized: false
}))

// ========== ROUTER ============ //
app.use('/user', userRouter)
app.use('/easypeasy', recipeRouter) 

// ========== INITIALISATION ========= //
mongoose.connect(dbURL, () => {
    console.log('Connected to recipe db')
})

app.listen(PORT, () => {
    console.log('Server started at PORT:', PORT)
})
