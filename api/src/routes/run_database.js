const { Router } = require('express');
const mySwitch = require('../models_database/initial_procedures')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const runDatabase = Router();

runDatabase.get('/', async (req, res) => {
    try {
        await mySwitch()
        res.status(200).send('THE DATABASE HAS BEEN MOUNTED OK, NO ERROR : )')
    } catch (error) {
        res.status(500).send(error)
    }
})


module.exports = runDatabase;