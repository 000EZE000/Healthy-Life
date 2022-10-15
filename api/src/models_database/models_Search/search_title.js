
const { Search, Recipe, Op } = require('../../db');

const findSearch = async (request) => {
  const requestDataBase = await Search.findAll({
    raw: true,
    where: {
      name: {
        [Op.iLike]: `%${request}%`
      }
    }
  })
  return requestDataBase[0] !== undefined
}

const agreeSearh = async (request) => {
  const myResult = await Search.create({ name: request })
  myResult ?
    console.log(`la request ${request} se ha agregado Exitosamente`) :
    console.log(`Algo paso!! no se pudo cargar la recueste ${request} revise ${__dirname}`);
}


const miFildLocal = async (request) => {
  const myResult = await Recipe.findAll({
    raw: true,
    where: {
      name: {
        [Op.iLike]: `%${request}%`,
      }

    },

  })
  return myResult.length
}




module.exports = {
  miFildLocal,
  findSearch,
  agreeSearh,
}