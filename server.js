// ========== DEPENDENCIES ========= //
require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const methodOverride = require('method-override')

const app = express()
const PORT = process.env.PORT
const dbURL = process.env.MONGODB_URL
const recipeRouter = require('./controllers/recipeRouter')

// ========== MIDDLEWARE ========= //
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use('/', recipeRouter) 




// ========== INITIALISATION ========= //
mongoose.connect(dbURL, () => {
    console.log('Connected to recipe db')
})

app.listen(PORT, () => {
    console.log('Server started at PORT:', PORT)
})
