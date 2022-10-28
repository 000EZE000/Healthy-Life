const { Recipe, Op, Diet } = require('../../db');
const mySwitch = require('../../models_database/initial_procedures');
const {
  tableInterme,
} = require('../../models_database/function/Bulcker/intermediate_table');
const {
  isId,
  validatorUpdateForRecipe,
  bodysuitCheckeForRecipe,
} = require('./validate');

////////////////////////////////////
//ERROR
////////////////////////////////////
const myMessageError = (error) => {
  return `${error.message}, file error ${__filename}`;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*GET */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const controllerAllRecipes = async () => {
  const myRes = await Recipe.findAll({
    attributes: {
      exclude: ['dish_summary', 'step_by_step'],
    },
    include: [
      {
        model: Diet,
        attributes: ['name', 'id'],
      },
    ],
  });

  return myRes;
};

const controllerGetName = async ({ name }) => {
  await mySwitch(name);

  const myRes = await Recipe.findAll({
    raw: true,
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    attributes: {
      exclude: ['dish_summary', 'step_by_step'],
    },
  });
  if (!myRes[0]) return [];
  return myRes;
};

const controllerAlpha = async () => {
  const myOrder = await Recipe.findAll({
    order: [['name', 'ASC']],
    attributes: {
      exclude: ['step_by_step', 'dish_summary'],
    },
    include: [
      {
        model: Diet,
        attributes: ['name', 'id'],
        through: { attributes: [] },
      },
    ],
  });

  return myOrder;
};

const controllerhealthScore = async () => {
  const myOrder = await Recipe.findAll({
    order: [['healthy_food_score', 'DESC']],
    attributes: {
      exclude: ['step_by_step', 'dish_summary'],
    },
    include: [
      {
        model: Diet,
        attributes: ['name', 'id'],
        through: { attributes: [] },
      },
    ],
  });

  return myOrder;
};

const controllerRelationship = async ({ ids }) => {
  const relationshipDiet = await Recipe.findAll({
    attributes: [],
    where: {
      id: ids,
    },
    include: [
      {
        model: Diet,
        attributes: ['name', 'id'],
        through: { attributes: [] },
      },
    ],
  });

  return relationshipDiet;
};

const controllerId = async ({ id }) => {
  const myVali = isId(id);

  if (!myVali[0]) throw new Error(myVali[1]);

  const myRes = await Recipe.findByPk(Number(id));

  if (myRes) return myRes;

  throw new Error(`the id entered is wrong`);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*POST*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const myPostRecipe = async (data) => {
  const myRes = await bodysuitCheckeForRecipe(data);
  if (!myRes[0]) throw new Error(myRes[1]);
  await tableInterme([data]);
  return myRes[1];
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*PUT*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const updateDietForRecipe = async (idData, diets) => {
  const recipeForFunction = await Recipe.findOrCreate({
    where: { id: idData },
  });
  const recipeForObj = await Recipe.findByPk(idData);
  await recipeForFunction[0].setDiets(null);

  diets.forEach(async (e) => {
    const dietDataBase = await Diet.findOrCreate({
      where: { name: e },
    });
    dietDataBase[0].addRecipes(recipeForObj);
  });
};

const controllerUpdate = async (data) => {
  const [idRecipe, recipeUpdate] = data;

  const myRes = await validatorUpdateForRecipe(data);

  if (!myRes[0]) throw new Error(myRes[1]);

  await Recipe.update(recipeUpdate, {
    where: { id: idRecipe },
  });
  await updateDietForRecipe(idRecipe, recipeUpdate['diets']);

  return myRes[1];
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*DELETE*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const controllerDelete = async ({ ids }) => {
  const myVali = isId(ids);
  if (!myVali[0]) throw new Error(myVali[1]);
  const recipeForFunction = await Recipe.findOrCreate({
    where: { id: ids },
  });
  await recipeForFunction[0].setDiets(null);
  await Recipe.destroy({
    where: { id: ids },
  });

  return `the recipe with the id ${ids} has been deleted successfully`;
};

module.exports = {
  controllerId,
  controllerUpdate,
  controllerGetName,
  controllerRelationship,
  myMessageError,
  myPostRecipe,
  controllerDelete,
  controllerAlpha,
  controllerhealthScore,
  controllerAllRecipes,
};
