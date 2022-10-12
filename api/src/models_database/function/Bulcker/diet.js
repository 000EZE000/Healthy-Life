const classificationOfDiets = (array) => {
  let [...argArray] = array
  if (!argArray[0]) return "this dish does not have a diet plan";
  const elemVeget = argArray.find((e) => e === "lacto ovo vegetarian");
  if (elemVeget) argArray = argArray.filter((e) =>  e !== "vegan");
  const elemVegan = argArray.find((e) => e === "vegan");
  const objDiet = elemVegan ? "vegan" : elemVeget ? "vegetarian" : "withMeat";
  objDiet === 'vegan' ? argArray = argArray.filter(e=> e !== 'vegan' ):null;
  argArray.unshift(objDiet)
  return argArray.join("#");;
};
const tableDiet = (data) => {
  let count = 1;
  const table = data.map((elem) => {
    return {
      id: count++,
      name: classificationOfDiets(elem.diets),
    };
  });
  return table;
};

module.exports = tableDiet;
