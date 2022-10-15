const { Router } = require('express');
const { Recipe, Op,Diet} = require('../db');
const mySwitch = require('../models_database/initial_procedures');
const { bodysuitChecker, isId } = require('./controller/for_Recipe')
const { tableInterme } = require('../models_database/function/Bulcker/intermediate_table')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const recipesRouter = Router();

recipesRouter.get('/repice', async (req, res) => {
    try {
        const { title } = req.query
        await mySwitch(title)
        const myRes = await Recipe.findAll({
            raw: true,
            where: {
                name: {
                    [Op.iLike]: `%${title}%`,
                },
            },
            attributes: {
                exclude: ['dish_summary', 'step_by_step', 'image']
            }
        });
        if (myRes[0]) return res.status(200).send(myRes)
        throw new Error((`La Receta ${title} no se ha encontrado.`)
        )
    } catch (error) {
        res.status(404).send(error.message)
    }
})




recipesRouter.get('/taba/:ids', async (req, res) => {
    const {ids} = req.params
    
    const prueba = await Diet.findAll({
        attributes:["name"],
        where:{
            id:ids
        },
        include:[{
            model:Recipe,
            attributes:["name", "id"],
            through: { attributes: [],}
        }]
    })
console.log(prueba[0]["recipes"].length)
    res.status(200).send(prueba)
  
})


recipesRouter.get('/:id', async (req, res) => {
    try {
        let { id } = req.params

        const myVali = isId(id)

        if (!myVali) return res.status(400).send('El id debe ser un numero');

        const myRes = await Recipe.findByPk(Number(id))

        if (myRes) return res.status(200).send(myRes);

        throw new Error(`el servidor no respondio como debia`)

    } catch (error) {

        return res.status(500).send(error.message)
    }

})


recipesRouter.post('/', async (req, res) => {
    try {

        const myRes = await bodysuitChecker(req.body)
        if (!myRes[0]) return res.status(400).send(myRes[1]);
        const respDataBase = await tableInterme([req.body])
        return res.status(200).send(myRes[1]);
    } catch (error) {
        return res.status(400).send(error.message);

    }

})






// recipesRouter.post('/',async(req,res)=>{
// console.log(req.body);
// console.log(Recipe);
// try {
//     const newRecipes = await Recipe.create(req.body)
//     res.status(201).send(newRecipes)
// } catch (error) {
//     res.status(404).send(error.message)
// }

// })

module.exports = recipesRouter;
