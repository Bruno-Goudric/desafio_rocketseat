// const { age, date } = require('../../lib/utils')
const recipes = require("../../../data")



module.exports = {
    index(req, res){
        return res.render("home/index", {items: recipes})
    },
    about(req, res){
        return res.render("home/about")
    },
    recipes(req, res){
        return res.render("home/recipes", {items: recipes})
    },
    recipe(req, res){
        const recipeIndex = req.params.index;
  
        return res.render("home/recipe", {item: recipes[recipeIndex]})
    }
}