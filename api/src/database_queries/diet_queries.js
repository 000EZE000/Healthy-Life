const {Diet} = require('../db');

const querieDietAll = async () => {
    const res = await Diet.findAll({raw: true})
    console.log(res)
}



module.exports =querieDietAll