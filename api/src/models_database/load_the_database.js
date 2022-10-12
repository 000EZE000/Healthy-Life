const { Diet, Recipe } = require("../db");
const { forTableRepice, forTableDiet } = require("./procesamiento_de_datos");
const getBaseData = require("./peticion_DATA_BASE");
let switchFuntio = false;
const dataCharger = async () => {
  try {
    const validador = await Diet.findOne({ raw: true });
    if (validador === null) {
      const data = await getBaseData();
      const recipeData = await forTableRepice(data);
      const dietData = await forTableDiet(data);
      await Diet.bulkCreate(dietData);
      await Recipe.bulkCreate(recipeData);
      console.log("la base de datos fue creada Exitosamente !!");
      return;
    }
    console.log("La base de datos ya esta en linea");
  } catch (error) {
    console.log(error);
  }
};

// const hola = async () => {
//   const characters = await Diet.findAll({ raw: true });
//   console.log(characters);
// };

switchFuntio ? dataCharger() : console.log('Todo en orden');

module.exports = dataCharger;
