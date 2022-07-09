// ========== DEPENDENCIES ========= //
require('dotenv').config()
const mongoose = require('mongoose')

const dbURL = process.env.MONGODB_URL

// ========== MIDDLEWARE ========= //


// ========== INITIALISATION ========= //
mongoose.connect(dbURL, () => {
    console.log('Connected to recipe db')
})

