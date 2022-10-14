const {Search} = require('../db');

const querieSearchAll = async () => {
    const res = await Search.findAll({raw: true});
    console.log(res);
};



module.exports =querieSearchAll;