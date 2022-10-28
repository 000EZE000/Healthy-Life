const { Diet, Recipe } = require('../../db');
const { isId, validateDataDiet } = require('./validate');

////////////////////////////////////
/*ERROR*/
////////////////////////////////////
const myMessageError = (error) => {
  return `${error.message}, file error ${__filename}`;
};

/////////////////////////////////////////////////////////////////////////
/*GET */
/////////////////////////////////////////////////////////////////////////

const controllerGetDiet = async () => {
  const myRes = await Diet.findAll({ raw: true });
  return myRes;
};

const controllerRelations = async ({ ids }) => {
  const valiId = isId(ids);

  if (!valiId[0]) throw new Error(valiId[1]);

  const relationshipRecipe = await Diet.findAll({
    attributes: ['name'],
    where: {
      id: ids,
    },
    include: [
      {
        model: Recipe,
        attributes: [
          'name',
          'id',
          'image',
          'dish_summary',
          'healthy_food_score',
          'step_by_step',
        ],
        through: { attributes: [] },
      },
    ],
  });

  return relationshipRecipe;
};

/////////////////////////////////////////////////////////////////////////
/*POST */
/////////////////////////////////////////////////////////////////////////

const controllerPostDiet = async (data) => {
  const myVali = validateDataDiet(data);
  if (!myVali[0]) throw new Error(myVali[1]);
  const myNewDiet = await Diet.create(data);
  return myVali[1];
};
/////////////////////////////////////////////////////////////////////////
/*PUT */
/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////
/*DELETE */
/////////////////////////////////////////////////////////////////////////

const controllerDeleteDiet = async ({ ids }) => {
  const vali = isId(ids);

  if (!vali[0]) throw new Error(vali[1]);

  const MyDietName = await Diet.findOrCreate({
    where: { id: ids },
  });

  await MyDietName[0].setRecipes(null);

  await Diet.destroy({
    where: { id: ids },
  });

  return `la dieta con el Id ${ids} se ha eliminado con éxito`;
};

module.exports = {
  controllerGetDiet,
  myMessageError,
  controllerRelations,
  controllerPostDiet,
  controllerDeleteDiet,
};
