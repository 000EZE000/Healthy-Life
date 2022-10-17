const {Diet} = require('../db');

const querieDietAll = async () => {
    const res = await Diet.findAll({raw: true})
   return res
}



module.exports =querieDietAll