const { Diet } = require('../../../db');
const packDiet = require('./diet');
const searhDietOrCreate = async () => {
  const res = await Diet.findAll({
    raw: true,
    attributes: {
      exclude: ['id'],
    },
  });
  if (res[0]) return res;

  const hola = packDiet();
  console.log(hola);
  return hola;
};

module.exports = searhDietOrCreate;
