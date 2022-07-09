// ========== DEPENDENCIES ========= //
require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')

const app = express()
const PORT = process.env.PORT
const dbURL = process.env.MONGODB_URL
const recipeRouter = require('./controllers/recipeRouter')

app.use('/', recipeRouter)

// ========== MIDDLEWARE ========= //


// ========== INITIALISATION ========= //
mongoose.connect(dbURL, () => {
    console.log('Connected to recipe db')
})

app.listen(PORT, () => {
    console.log('Server started at PORT:', PORT)
})
