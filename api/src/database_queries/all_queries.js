const querieDietAll = require("./diet_queries");
const querieRecipAll = require('./recipe_queries');
const querieSearchAll = require('./search_queries');

const myQuerie = async (recipe) => {
    const message = recipe
    const myDictionary = {
        recipe: querieRecipAll,
        diet: querieDietAll,
        search: querieSearchAll,
        error: () => console.log(`no podes poner ${message}, los parametros son recipe || diet || search`)
    }
    !myDictionary[recipe] ? recipe = 'error' : null;

    console.log(await myDictionary[recipe]())
}


const myId = async (id) => {
  
}

//myQuerie('recipe','tomato')

module.exports = myQuerie;
