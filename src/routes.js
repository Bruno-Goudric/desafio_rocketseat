const express = require('express')
const routes = express.Router()
const HomeController = require('./app/controllers/HomeController') 
const recipes = require('./app/controllers/recipe')

routes.get('/', function(req, res) {
    return res.redirect("/home")
})

// HOME
routes.get('/home', HomeController.index)
routes.get('/home/about', HomeController.about)
routes.get('/home/recipes', HomeController.recipes)
routes.get('/recipe/:index', HomeController.recipe)

// ADMIN
routes.get("/admin/recipes", recipes.index)
routes.get("/admin/recipes/create", recipes.create)
routes.get("/admin/recipes/:id", recipes.show)
routes.get("/admin/recipes/:id/edit", recipes.edit)

routes.post("/admin/recipes", recipes.post)
routes.put("/admin/recipes", recipes.put)
routes.delete("/admin/recipes", recipes.delete)

module.exports = routes