const { Router } = require('express');

const {
    controllerUpdate,
    controllerGetTitle,
    controllerRelationship,
    myMessageError,
    controllerId,
    myPostRecipe,
    controllerDelete,
} = require('./controller/for_Recipe')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const recipesRouter = Router();


recipesRouter.get('/repice', async (req, res) => {
    try {
        const myRes = await controllerGetTitle(req.query)
        res.status(200).send(myRes)
    } catch (error) {
        res.status(404).send(error.message)
    }
})


recipesRouter.get('/relationship/:ids', async (req, res) => {
    try {
        console.log(req.params)
        const relationshipDiet = await controllerRelationship(req.params)
        res.status(200).send(relationshipDiet)
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
        console.log('dadasdasdsadsasdasd')
        const myRes = await controllerDelete(req.params);
        res.status(200).send(myRes)
    } catch (error) {
        res.status(400).send(myMessageError(error));
    }

})

module.exports = recipesRouter;
