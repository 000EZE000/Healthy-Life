const { Recipe } = require('../../db');

const createDictionary = (array) => {
  const miDictionary = {};
  array.forEach((e) => {
    miDictionary[e] = true;
  });
  return miDictionary;
};

const arrayOfStringName = (array) => {
  const miArray = [];
  array.forEach((e) => {
    miArray.push(e.name);
  });
  return miArray;
};

const dataBaseLocalName = async () => {
  const dataBaseName = await Recipe.findAll({ raw: true });
  const miDictionary = createDictionary(arrayOfStringName(dataBaseName));
  return miDictionary;
};

const filteringResApi = async (arrayAPi) => {
  const myDictionary = await dataBaseLocalName();
  const myArray = arrayAPi.filter((e) => {
    if (!myDictionary[e.name]) return e;
  });
  return myArray;
};

module.exports = filteringResApi;
