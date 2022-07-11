// Require express
const express = require('express')
// Set recipe router
const recipeRouter = express.Router()
// Require recipe schema
const RecipeModel = require('../models/recipeModel')

// MIDDLEWARE
const formatData = (req, res, next) => {
    const defaultImg = 'https://d1y37rophvf5gr.cloudfront.net/Content/images/recipe-default.jpg'
    if (req.body.img === '') {
        req.body.img = defaultImg
    }
    req.body.serves = parseInt(req.body.serves)
    req.body.cookTime = parseInt(req.body.cookTime)
    // req.body.ingredients = [req.body.ingredients]
    // HOW TO BREAK A STRING TO ARRAY ELEMENTS
    req.body.ingredients = req.body.ingredients.split(';')
    req.body.methods = req.body.methods.split(';')
    next()
}

// CREATE - allow user to enter new recipe data and store data in database
// ============ NEW GET /recipe/new (render: new.ejs) ============ //
recipeRouter.get('/recipe/new', (req, res) => {
    res.render('recipeViews/new.ejs', {
        baseUrl: req.baseUrl,
        tabTitle: 'Create New Recipe'
    })
})

// ============ CREATE POST (redirect to /recipe) ============ //
recipeRouter.post('/', formatData, (req, res) => {
    RecipeModel.create(req.body)
        .then(() => {
            res.redirect(req.baseUrl + `/recipe`)
            // how to direct to recipe show page?
        })
        .catch((err) => {
            console.log("Error creating new recipe:", err);
        })
})

// READ - show user the homepage with highlighted recipes
// ============ HOME GET / (render: home.ejs) ============ //
recipeRouter.get('/', (req, res) => {
    res.render('recipeViews/home.ejs', {
        currentUser: req.session.currentUser,
        baseUrl: req.baseUrl,
        tabTitle: 'EasyPeasy Home'
    })
})

// READ - show user the page with all recipe
// ============ INDEX GET /recipe (render: index.ejs)============ //
recipeRouter.get('/recipe', (req, res) => {
    RecipeModel.find()
        .exec()
        .then((recipes) => {
            res.render('recipeViews/index.ejs', {
                allRecipes: recipes,
                baseUrl: req.baseUrl,
                tabTitle: 'View All Recipes'
            })
        })
})

// READ - show user the page of a specific recipe
// ============ SHOW GET /recipe/:id (render: show.ejs) ============ //
recipeRouter.get('/recipe/:id', (req, res) => {
    RecipeModel.findById(req.params.id)
        .exec()
        .then((recipe) => {
            res.render('recipeViews/show.ejs', {
                recipe: recipe,
                baseUrl: req.baseUrl,
                tabTitle: `${recipe.title}`
            })
        })
})

// UPDATE - allow user to edit an existing recipe and update the data in db
// ============ EDIT GET /recipe/:id/edit (render: edit.ejs) ============ //
recipeRouter.get('/recipe/:id/edit', (req, res) => {
    RecipeModel.findById(req.params.id)
        .exec()
        .then((recipe) => {
            res.render('recipeViews/edit.ejs', {
                recipe: recipe,
                baseUrl: req.baseUrl,
                tabTitle: `Edit ${recipe.title}`
            })
        })
})

// ============ UPDATE PUT (redirect to: /recipe/:id) ============ //
recipeRouter.put('/recipe/:id/edit', formatData, (req, res) => {
    const updatedRecipe = RecipeModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .exec()
        .then((updatedRecipe) => {
            res.redirect(req.baseUrl + `/recipe/${req.params.id}`)
        })
        .catch((err) => {
            console.log("Error updating new recipe:", err);
        })
})

// DELETE - allow user to delete and existing recipe (from the db as well)
// ============ DELETE DELETE (redirect to: /recipe) ============ //
recipeRouter.delete('/:id', (req, res) => {
    RecipeModel.findByIdAndDelete(req.params.id)
        .exec()
        .then(() => {
            res.redirect(req.baseUrl + '/recipe')
        })         
})

// Export router for access in server.js
module.exports = recipeRouter
