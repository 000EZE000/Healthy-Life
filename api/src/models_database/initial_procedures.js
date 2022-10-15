
const tableRepice = require('./function/Bulcker/repice.js')
const { Diet } = require("../db");
const packDiet = require('./function/Bulcker/diet');
const getBaseData = require("./peticion_DATA_BASE");
const { tableInterme } = require('./function/Bulcker/intermediate_table');
const mySwitchSearch = require('./models_Search/search_processing')

const loadDatabase = async () => {
    await packDiet(Diet)
    const dataBruta = await getBaseData();
    const recipeData = await tableRepice(dataBruta);
    tableInterme(recipeData)
}

const mySwitch = async (request) => {
    const switchSear = null === await Diet.findOne({ raw: true, });
    switchSear ? loadDatabase() :mySwitchSearch(request)
}



module.exports = mySwitch;
