// Require express
const express = require('express')
// Set recipe router
const recipeRouter = express.Router()
// Require recipe schema
const RecipeModel = require('../models/recipeModel')

// CREATE - allow user to enter new recipe data and store data in database
// ============ NEW GET /recipe/new (render: new.ejs) ============ //
recipeRouter.get('/recipe/new', (req, res) => {
    res.render('recipeViews/new.ejs', {
        tabTitle: 'Create New Recipe'
    })
})

// ============ CREATE POST (redirect to /recipe) ============ //
recipeRouter.post('/', (req, res) => {
    console.log('post request received');
    // console.log(req.body);
    req.body.serves = parseInt(req.body.serves)
    req.body.cookTime = parseInt(req.body.cookTime)
    req.body.ingredients = [req.body.ingredients]
    req.body.methods = [req.body.methods]
    console.log(req.body);
    RecipeModel.create(req.body)
        .then(() => {
            res.redirect(req.baseUrl + '/recipe')
        })
        .catch((err) => {
            console.log("Error creating new recipe:", err);
        })
})

// READ - show user the homepage with highlighted recipes
// ============ HOME GET / (render: home.ejs) ============ //
recipeRouter.get('/', (req, res) => {
    res.render('recipeViews/home.ejs', {
        tabTitle: 'Home'
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
                tabTitle: 'all recipe'
            })
        })
})

// READ - show user the page of a specific recipe
// ============ SHOW GET /recipe/:id (render: show.ejs) ============ //
recipeRouter.get('/recipe/:id', (req, res) => {
    console.log(req.baseUrl);
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
    res.render('recipeViews/edit.ejs')
})

// ============ UPDATE PUT (redirect to: /recipe/:id) ============ //

// DELETE - allow user to delete and existing recipe (from the db as well)
// ============ DELETE DELETE (redirect to: /recipe) ============ //

// Export router for access in server.js
module.exports = recipeRouter