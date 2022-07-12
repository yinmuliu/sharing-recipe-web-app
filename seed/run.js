// Require dotenv to avoid hardcoding of dbURL
require('dotenv').config()

// Require mongoose
const mongoose = require('mongoose')

// Require recipe schema
const RecipeModel = require('../models/recipeModel')

// Require recipe data
const recipeData = require('./recipeData')

// Provide url to connect to db
const dbURL = process.env.MONGODB_URL

// Now connect and seed data!
mongoose.connect(dbURL, () => {
    console.log('Connected to recipes db')
    
    // FIRST TIME SEEDING USING CODE BELOW
    // RecipeModel.insertMany(recipeData)

    // AFTER FIRST TIME USING CODE BELOW
    console.log('Resetting recipe collection')

    // Remove all docs in the recipe collection
    RecipeModel.collection.drop()
      .then(() => {
        console.log('Recipe collection dropped')
        console.log('Inserting seed data')
        // insert data
        return RecipeModel.insertMany(recipeData)
      })
      .then(() => {
        console.log('Recipe data inserted')
        // close connection
        mongoose.connection.close()
      })
  })
  