const { Router } = require('express');
const { 
    controllerGetDiet,
    myMessageError,
    controllerRelations,
    controllerPostDiet,
    controllerDeleteDiet } = require('./controller/for_Diet')


const dietRouter = Router();


dietRouter.get('/', async (req, res) => {
    try {
        const myRes = await controllerGetDiet();
        res.status(200).send(myRes);
    } catch (error) {
        res.status(500).send(myMessageError(error))
    }
})


dietRouter.get('/relations/:ids', async (req, res) => {
    try {
        const myRes = await controllerRelations(req.params)
        res.status(200).send(myRes)
    } catch (error) {
        res.status(404).send(myMessageError(error))
    }
})


dietRouter.post('/', async (req, res) => {
    try {
        const myRes = await controllerPostDiet(req.body)
        res.status(201).send(myRes)
    } catch (error) {
        res.status(400).send(myMessageError(error))
    }
})

dietRouter.delete('/:ids',async (req, res) => {
    try {
        const myRes = await controllerDeleteDiet(req.params)
        res.status(201).send(myRes)
    } catch (error) {
        res.status(400).send(myMessageError(error))
    }
})

module.exports = dietRouter;
