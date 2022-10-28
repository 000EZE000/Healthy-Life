import {
  errorRecipeForm,
  successInputRecipe,
} from '../../../style/create_Inicio/create_Recipe/validate_recipe.module.css';
export default function ValidateHealth({ healthy_food_score }) {
  const healthySplit = healthy_food_score.split('.');
  const messageInterger = (
    <p className={errorRecipeForm}>⊗The number must be an integer⊗</p>
  );

  if (healthySplit[1]) return [false, messageInterger];

  const messageUndefined = (
    <p className={errorRecipeForm}>⊗The recipe must be rated⊗</p>
  );
  if (!healthy_food_score) return [false, messageUndefined];

  const myNumber = Number(healthy_food_score);
  const messageNotNumber = (
    <p className={errorRecipeForm}>⊗The score goes in Numbers⊗</p>
  );
  if (isNaN(myNumber)) return [false, messageNotNumber];

  const optimalScore = !(myNumber < 101 && myNumber > 0);
  const messageScore = (
    <p className={errorRecipeForm}>⊗The score must be between 1 to 100⊗</p>
  );
  if (optimalScore) return [false, messageScore];
  const messageSuccess = <p className={successInputRecipe}>✔The score✔ </p>;
  return [true, messageSuccess];
}
