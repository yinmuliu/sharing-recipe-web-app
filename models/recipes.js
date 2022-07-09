// ========= CREATE RECIPE SCHEMA ========== //
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    serves: { type: Number, required: true },
    cookTime: { type: Number, required: true, max: 60 },
    ingredients: [ { type: String } ],
    method: [ { type: String } ],
    img: { type: String, default: 'https://d1y37rophvf5gr.cloudfront.net/Content/images/recipe-default.jpg' },
    author: String
  },
  { timestamps: true }
)

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe