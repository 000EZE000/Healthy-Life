
// esta funcion tal larga hace un filtrado  a  la propiedad steps_steps de 
//  la base de datos para adaptarlo a mis necesidades

const updateStep = (array) => {

  const newArray = [];
  array.forEach((e) => {

    if (e.steps) {

      const ArrayOfFor = { steps: [] };
      e.steps.forEach((a) => {
        /*esto dos map son lo mas importantes de la funcion pueden filtar un array
        de objetos y devolverme un array de String*/
        const newPropIng = a.ingredients.map((t) => t.name);
        const newPropEqui = a.equipment.map((t) => t.name);

        const Obj = {
          step_number: a.number,
          step: a.step,
          ingredients: newPropIng,
          equipment: newPropEqui,
        };

        if (e.name) ArrayOfFor['name'] = e.name;
        return ArrayOfFor.steps.push(Obj);
      });

      return newArray.push(ArrayOfFor);
    } else if (e.name) {
      return newArray.push({ name: e.name });
    }
  });
  return newArray;
};

/* esta funcion recibe un objeto con una propieda array 
filtrando  objetos que se adptan para poder ingresar a la base de datos
 */
const tableRepice = (data) => {
  return data.map(elem => {
    return ({
      name: elem.title,
      image: elem.image,
      dish_summary: elem.summary,
      step_by_step: updateStep(elem.analyzedInstructions),
      healthy_food_score: elem.healthScore,
      diets: elem.diets,
    });
  });
}




module.exports = tableRepice





