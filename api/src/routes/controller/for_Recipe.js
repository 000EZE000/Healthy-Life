const { Recipe, Op } = require('../../db');

const isString = (array) => {
    let valiNum = true
    let valiEmpty = true
    array.forEach(e => {
        e === '' ? valiEmpty = false : null;
        typeof e !== 'string' ? valiNum = false : null

    })

    return array[0] && valiNum && valiEmpty ? true : false;
}

const isUrl = (data) => {
    const myExpRe = /^(\w{5})(:\/{2}).+\.+\w{3}/igm;
    return myExpRe.test(data)
}


const isId = (Id) => {
    let vali = Number(Id) ? true : false;
    if (!vali) return false

    return true
}

const myReat = async (name) => {
    const myRes = await Recipe.findAll({
        raw: true,
        where: {
            name: {
                [Op.iLike]: `${name}`,
            },
        },
        attributes: {
            exclude: ['dish_summary', 'step_by_step', 'image']
        }

    })

    return !myRes[0]
}



const bodysuitChecker = async(body) => {
    const {
        name,
        dish_summary,
        healthy_food_score,
        step_by_step,
        image,
        diets,
    } = body

    let vali =
        name && dish_summary &&
            healthy_food_score &&
            step_by_step && image &&
            diets ? true : false;

    if (!vali) return [false, 'no se han cargado los datos minimos'];

    vali = await myReat(name) ? true : false;

    if (!vali) return [false,` La reseta ${name} ya lo tiene asignado otra receta`];

    vali = isString([name, image, dish_summary]) ? true : false;

    if (!vali) return [false, `${name}  o ${image}  o ${dish_summary} no son String`]

    vali = Number(healthy_food_score) ? true : false;

    if (!vali) return [false, `${healthy_food_score} no es un numero`]

    vali = Array.isArray(diets) && Array.isArray(step_by_step) ? true : false;

    if (!vali) return [false, `${diets} y ${step_by_step} deben ser array`]

    vali = isUrl(image) ? true : false;

    if (!vali) return [false, `${image} no tiene el fomato de Url de tipo imagen, un Ej:https://i.blogs.es/af0d35/gim/840_560.jpg`]

    return [true, `La receta ${name} se ha subido con Exito!!!`]
}


module.exports = { bodysuitChecker, isId }