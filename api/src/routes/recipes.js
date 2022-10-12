const { Router } = require('express');
const {Recipe} = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const recipesRouter = Router();


recipesRouter.post('/',async(req,res)=>{
console.log(req.body);
console.log(Recipe);
try {
    const newRecipes = await Recipe.create(req.body)
    res.status(201).send(newRecipes)
} catch (error) {
    res.status(404).send(error.message)
}

})

module.exports = recipesRouter;
