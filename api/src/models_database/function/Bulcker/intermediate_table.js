
const { Diet, Recipe } = require('../../../db')

const cleanData = (data) => {
    const newArray = data.map(e => {
        JSON.stringify(e.diets) === '[]' ? e.diets.push('noDiet') : null;
        return e.diets
    });
    return newArray;
}
const tableInterme = async (array) => {
    try {
        const newArray = cleanData(array)
        array.forEach(async (e, index) => {
            const recipeFor = await Recipe.create(e)
            newArray[index].forEach(async a => {
                const req = await Diet.findOrCreate({
                    where: { name:a},
                });
            
                req[0].addRecipes([recipeFor]);
            })
        })
        console.log('se han vinculado exitosamente')
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    tableInterme
}