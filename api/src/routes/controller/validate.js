const { Recipe, Op, Diet } = require('../../db');

///////////////////////////////////////////////////////////////////////////////////////////
/*VALIDATOR */
//////////////////////////////////////////////////////////////////////////////////////////



const isString = (array) => {
    let valiNum = true
    let valiEmpty = true
    array.forEach(e => {
        e === '' ? valiEmpty = false : null;
        typeof e !== 'string' ? valiNum = false : null

    })

    return array[0] && valiNum && valiEmpty ? true : false;
}

const isUndefined = (array) => {
    return array
        .filter(e => e !== undefined)
        .length === array.length && array[0] ?
        true : false;
}
const isUrl = (data) => {
    const myExpRe = /^(\w{5})(:\/{2}).+\.+\w{3}/igm;
    return myExpRe.test(data)
}


const isId = (id) => {

    return Number(id) ? [true, 'OK is ID'] : [false, 'The id must be a number'];

}




/////////////////////////////////////////////////////////////////////////////////
/*RECIPE */
//////////////////////////////////////////////////////////////////////////////////////


const myReatForRecipe = async (name) => {
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


const bodysuitCheckeForRecipe = async (body, searchName = true) => {
    const {
        name,
        dish_summary,
        healthy_food_score,
        step_by_step,
        image,
        diets,
    } = body

    let vali = isUndefined([name, dish_summary, healthy_food_score, step_by_step, image, diets])

    if (!vali) return [false, 'no se han cargado los datos minimos'];

    if (searchName) {
        vali = await myReatForRecipe(name) ? true : false;

        if (!vali) return [false, `La reseta ${name} ya lo tiene asignado otra receta`];
    }

    vali = isString([name, image, dish_summary]) ? true : false;

    if (!vali) return [false, `${name}  o ${image}  o ${dish_summary} no son String`]

    vali = Number(healthy_food_score) ? true : false;

    if (!vali) return [false, `healthy_food_score debe ser un numero`]

    vali = Array.isArray(diets) && Array.isArray(step_by_step) ? true : false;

    if (!vali) return [false, `${diets} y ${step_by_step} deben ser array`]

    vali = isUrl(image) ? true : false;

    if (!vali) return [false, `${image} no tiene el fomato de Url de tipo imagen, un Ej:https://i.blogs.es/af0d35/gim/840_560.jpg`]

    return [true, `La receta ${name} se ha subido con Exito!!!`]
}


const validatorUpdateForRecipe = async (array) => {

    const [id, data] = array;

    let vali = isId(id) ? true : false;

    if (!vali) return [false, `el id ${id} no es valido`];

    vali = await bodysuitCheckeForRecipe(data, false);

    if (!vali[0]) return vali;

    return [true, `la receta ${data.name} se actualizo correctamente`];
}

/////////////////////////////////////////////////////////////////////////////////
/*DIET */
//////////////////////////////////////////////////////////////////////////////////////


const validateDataDiet = ({ name, info, image }) => {

    let vali = isUndefined([name, info, image])

    if (!vali) return [false, `name:${name} or info:${inf} or image:${image} is undefined`]

    vali = isString([name, info, image])

    if (!vali) return [false, `name:${name} or info:${info} or image:${image} isn't String`]

    vali = isUrl(image);

    if (!vali) return [false, `${image} no tiene el fomato de Url de tipo imagen, un Ej:https://i.blogs.es/af0d35/gim/840_560.jpg`]

    return [true, `It has been created Successful ${name} diet!`]

}

module.exports = {
    isId,
    validatorUpdateForRecipe,
    bodysuitCheckeForRecipe,
    myReatForRecipe,
    validateDataDiet,
}