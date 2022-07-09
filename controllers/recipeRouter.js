// Require express
const express = require('express')
// Set recipe router
const recipeRouter = express.Router()
// Require recipe schema
const RecipeModel = require('../models/recipeModel')

// ============ NEW GET /recipe/new ============ //
recipeRouter.get('/recipe/new', (req, res) => {
    res.send('create new recipe')
})

// ============ CREATE POST rdr /recipe ============ //
recipeRouter.post('/', (req, res) => {
    
})

// ============ HOME GET / ============ //
recipeRouter.get('/', (req, res) => {
    res.send('homepage')
})

// ============ INDEX GET /recipe ============ //
recipeRouter.get('/recipe', (req, res) => {
    RecipeModel.find()
        .exec()
        .then((recipes) => {
            res.send(recipes)
        })
})

// ============ SHOW GET /recipe/:id ============ //
recipeRouter.get('/recipe/:id', (req, res) => {
    res.send('show recipe id' + req.params.id)
})

// ============ EDIT GET /recipe/:id/edit ============ //
recipeRouter.get('/recipe/:id/edit', (req, res) => {
    res.send('edit recipe id' + req.params.id)
})

// ============ UPDATE PUT rdr /recipe/:id ============ //

// ============ DELETE DELETE rdr /recipe ============ //

// Export router for access in server.js
module.exports = recipeRouter