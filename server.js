// ========== DEPENDENCIES ========= //
require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const methodOverride = require('method-override')
const session = require('express-session')
const flash = require('express-flash')

const app = express()
const PORT = process.env.PORT
const dbURL = process.env.MONGODB_URL
const recipeRouter = require('./controllers/recipeRouter')
const userRouter = require('./controllers/userRouter')
const sessionRouter = require('./controllers/sessionRouter')

// ========== MIDDLEWARE ========= //
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(session({
    secret: 'mochi the kitty',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000
      }
}))
app.use(flash())

// ========== ROUTER ============ //
app.use('/user', sessionRouter)
app.use('/user', userRouter)
app.use('/easypeasy', recipeRouter) 

// ========== INITIALISATION ========= //
mongoose.connect(dbURL, () => {
    console.log('Connected to recipe db')
})

app.listen(PORT, () => {
    console.log('Server started at PORT:', PORT)
})
