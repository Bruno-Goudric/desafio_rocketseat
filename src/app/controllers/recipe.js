const fs = require('fs')
const recipes = require("../../../data")

const data = require("../../../data.json")



module.exports = {
    index(req, res){
        return res.render("admin/index", {items: data.recipes})
    },
    create(req, res){
        return res.render("admin/create")
    },
    post(req, res){
        // const keys = Object.keys(req.body)

        // for(key of keys){
        //     if(req.body[key] == ""){
        //         return res.send('Please, fill all fields')
        //     }
        // }

        let { id, image,title, author, ingredients, preparation, information } = req.body

        const id = Number(data.recipes.length + 1)

        data.recipes.push({
            id,
            image,
            title,
            author,
            ingredients,
            preparation,
            information  
        })

        fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
            if(err) return res.send("Write file error!")

            return res.redirect("/admin/recipes")
        })
        

    },
    show(req, res){
        const { id } = req.params

        const foundRecipe = data.recipes.find(function(recipe){
            return id == recipe.id
        })

        if(!foundRecipe) return res.send("Recipe not found!")

        const recipe = {
            ...foundRecipe
        }

        return res.render("admin/show", { item: recipe })
    }
}