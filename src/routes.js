const express = require('express')
const routes = express.Router()
const HomeController = require('./app/controllers/HomeController') 

routes.get('/', function(req, res) {
    return res.redirect("/home")
})

routes.get('/home', HomeController.index)
routes.get('/home/about', HomeController.about)
routes.get('/home/recipes', HomeController.recipes)
routes.get('/recipe/:index', HomeController.recipe)
// routes.get('/instructors/create', instructors.create)
// routes.get('/instructors/:id', instructors.show)
// routes.get('/instructors/:id/edit', instructors.edit)
// routes.post("/instructors", instructors.post)
// routes.put("/instructors", instructors.put)
// routes.delete("/instructors", instructors.delete)





module.exports = routes