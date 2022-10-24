const querieDietAll = require('./diet_queries');
const querieRecipAll = require('./recipe_queries');
const querieSearchAll = require('./search_queries');

const myQuerie = async (recipe) => {
  const message = recipe;
  const myDictionary = {
    recipe: querieRecipAll,
    diet: querieDietAll,
    search: querieSearchAll,
    error: () =>
      console.log(
        `no podes poner ${message}, los parametros son recipe || diet || search`
      ),
  };
  !myDictionary[recipe] ? (recipe = 'error') : null;

  const result = await myDictionary[recipe]();

  return Array.isArray(result)
    ? result.forEach((e) => {
        console.log(e.name);
      })
    : null;
};

//myQuerie('diet');

const myId = async (id) => {};

//myQuerie('recipe','tomato')

module.exports = myQuerie;

// dairy free
// gluten free
// lacto ovo vegetarian
// vegan
// dairy free
// paleolithic
// primal
// whole 30
// pescatarian
// noDiet
// ketogenic
// fodmap friendly
// listening at 3001

// const hola2 = {
//   id: 2,
//   name: 'dairy free',
//   info: 'Una dieta sin lácteos incluye evitar todos o la mayoría de los productos lácteos, como la leche, la mantequilla, el yogur, el queso, la nata y el helado. A diferencia de una dieta vegana o basada en plantas, una dieta sin lácteos aún incluye otros productos animales, como carne, pescado y huevos.',
//   image:
//     'https://cdn.shopify.com/s/files/1/0458/0969/6936/t/4/assets/al-1200-x-600--jpg-40-1652360218157_1200x.jpg?v=1652360254',
// };

// const hola = {
//   id: 5,
//   name: 'dairy free',
//   info: 'Una dieta sin lácteos incluye evitar todos o la mayoría de los productos lácteos, como la leche, la mantequilla, el yogur, el queso, la nata y el helado. A diferencia de una dieta vegana o basada en plantas, una dieta sin lácteos aún incluye otros productos animales, como carne, pescado y huevos.',
//   image:
//     'https://cdn.shopify.com/s/files/1/0458/0969/6936/t/4/assets/al-1200-x-600--jpg-40-1652360218157_1200x.jpg?v=1652360254',
// };
