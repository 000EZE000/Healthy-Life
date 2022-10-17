const {Search} = require('../db');

const querieSearchAll = async () => {
    const res = await Search.findAll({raw: true});
    return res
};



module.exports =querieSearchAll;