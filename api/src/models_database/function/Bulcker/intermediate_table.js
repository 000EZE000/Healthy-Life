const { Diet, Recipe } = require('../../../db');
const searhDietOrCreate = require('./start_table_diet_or_find');
const cleanData = (data) => {
  const newArray = data.map((e) => {
    JSON.stringify(e.diets) === '[]' && e.diets.push('noDiet');
    return e.diets;
  });
  return newArray;
};

const tableInterme = async (array) => {
  try {
    const myDiet = await searhDietOrCreate();
    const newArray = cleanData(array);
    array.forEach(async (e, index) => {
      const recipeFor = await Recipe.create(e);
      newArray[index].forEach(async (nameDiet) => {
        const myFind = myDiet.find((e) => e.name === nameDiet);

        const req = await Diet.findOrCreate({
          where: myFind,
          default: myFind,
        });

        req[0].addRecipes([recipeFor]);
      });
    });
    console.log('se han vinculado exitosamente');
  } catch (error) {
    console.log(error, 'es tabla intermedia');
  }
};

module.exports = {
  tableInterme,
};
