
const tableRepice = require('./function/Bulcker/repice.js')
const tableDiet = require('./function/Bulcker/diet.js')

const forTableRepice=(data) => {
return tableRepice(data);
};
const forTableDiet=(data) => {
return tableDiet(data);
};

module.exports = {forTableRepice,forTableDiet};
