// ========= CREATE RECIPE SCHEMA ========== //
// Require mongoose
const mongoose = require('mongoose')
// Define a middle variable (a class) called Schema
const Schema = mongoose.Schema
// Create a new schema called recipeSchema, based on the schema class
const recipeSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    serves: { type: Number, required: true },
    cookTime: { type: Number, required: true, max: 60 },
    ingredients: { 
      type: Array, 
      required: true
    },
    methods: [ { 
      type: String, 
      required: true
    } ],
    img: { 
      type: String, 
      default: 'https://d1y37rophvf5gr.cloudfront.net/Content/images/recipe-default.jpg' 
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
)

// define recipe schema in mongoose model. First parameter is the name, second parameter is the schema
const RecipeModel = mongoose.model('Recipe', recipeSchema)

// Export Recipe schema for access in other files
module.exports = RecipeModel
