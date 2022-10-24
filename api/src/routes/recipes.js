const { Router } = require('express');

const {
    controllerUpdate,
    controllerGetName,
    controllerRelationship,
    myMessageError,
    controllerId,
    myPostRecipe,
    controllerDelete,
    controllerAlpha,
    controllerhealthScore,
    controllerAllRecipes,
} = require('./controller/for_Recipe')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const recipesRouter = Router();


recipesRouter.get('/search', async (req, res) => {
    try {
        const myRes = await controllerGetName(req.query)
        res.status(200).send(myRes)
    } catch (error) {
        res.status(400).send(myMessageError(error))
    }
})

recipesRouter.get('/all_recipes', async (req, res) => {
    try {
        const myRes = await controllerAllRecipes()
        res.status(200).send(myRes)
    } catch (error) {

        res.status(400).send(myMessageError(error))
    }
})


recipesRouter.get('/order/alphabetically', async (req, res) => {
    try {
        const myRes = await controllerAlpha();
        res.status(200).send(myRes)
    } catch (error) {
        res.status(400).send(myMessageError(error))
    }

})


recipesRouter.get('/order/health_score', async (req, res) => {
    try {
        const myRes = await controllerhealthScore();
        res.status(200).send(myRes);
    } catch (error) {
        res.status(400).send(myMessageError(error))
    }
})


recipesRouter.get('/relationship/:ids', async (req, res) => {
    try {
        const relationshipDiet = await controllerRelationship(req.params)
        res.status(200).send(relationshipDiet[0])
    } catch (error) {
        res.status(400).send(myMessageError(error))
    }

})


recipesRouter.get('/:id', async (req, res) => {
    try {
        const myRes = await controllerId(req.params)
        res.status(200).send(myRes);
    } catch (error) {
        res.status(400).send(myMessageError(error))
    }

})


recipesRouter.post('/', async (req, res) => {
    try {
        const myRes = await myPostRecipe(req.body)
         res.status(201).send(myRes);
         } catch (error) {
     res.status(400).send(myMessageError(error));
    }

})

recipesRouter.put('/', async (req, res) => {
    try {
        const myRes = await controllerUpdate(req.body)
        res.status(200).send(myRes);
    } catch (error) {
        res.status(400).send(myMessageError(error));
    }

})


recipesRouter.delete('/:ids', async (req, res) => {
    try {
        const myRes = await controllerDelete(req.params);
        res.status(200).send(myRes)
    } catch (error) {
        res.status(400).send(myMessageError(error));
    }

})

module.exports = recipesRouter;
