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
    // create(req, res){

    //     return res.render('instructors/create')

    // },
    // post(req, res){

    //     const keys = Object.keys(req.body)

    //     for(key of keys) {
    //         if (req.body[key] == "") {
    //             return res.send('Please, fill all fields!')
    //         }
    //     }
    
    //     Instructor.create(req.body, function(instructor) {
    //         return res.redirect(`/instructors/${instructor.id}`)
    //     })

    // },
    // show(req, res){
    //     Instructor.find(req.params.id, function(instructor) {
    //         if (!instructor) return res.send("Instructor not found!")

    //         instructor.age = age(instructor.birth)
    //         instructor.services = instructor.services.split(",")

    //         instructor.created_at = date(instructor.created_at).format

    //         return res.render("instructors/show", { instructor })
    //     })

    // },
    // edit(req, res){
    //     Instructor.find(req.params.id, function(instructor) {
    //         if (!instructor) return res.send("Instructor not found!")

    //         instructor.birth = date(instructor.birth).iso

    //         return res.render("instructors/edit", { instructor })
    //     })
    // },
    // put(req, res){
    //     const keys = Object.keys(req.body)

    //     for(key of keys) {
    //         if (req.body[key] == "") {
    //             return res.send('Please, fill all fields!')
    //         }
    //     }

    //     Instructor.update(req.body, function() {
    //         return res.redirect(`/instructors/${req.body.id}`)
    //     })

    // },
    // delete(req, res){
    //     Instructor.delete(req.body.id, function() {
    //         return res.redirect(`/instructors`)
    //     })

    // },
}