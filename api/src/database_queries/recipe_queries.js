const { Recipe } = require('../db');

const querieRecipAll = async () => {
    const res = await Recipe.findAll({ raw: true });
    console.log(res);
};



module.exports = querieRecipAll;