const tableRepice = require('./function/Bulcker/repice.js');
const { Diet } = require('../db');
const getBaseData = require('./peticion_DATA_BASE');
const { tableInterme } = require('./function/Bulcker/intermediate_table');
const mySwitchSearch = require('./models_Search/search_processing');

const loadDatabase = async () => {
  const dataBruta = await getBaseData();
  console.log(dataBruta);
  const recipeData = await tableRepice(dataBruta);
  tableInterme(recipeData);
};

const mySwitch = async (request) => {
  const switchSear = null === (await Diet.findOne({ raw: true }));
  console.log('dasdasdasd');
  switchSear ? loadDatabase() : mySwitchSearch(request);
};

module.exports = mySwitch;
