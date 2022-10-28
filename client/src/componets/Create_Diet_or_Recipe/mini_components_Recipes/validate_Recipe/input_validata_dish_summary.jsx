import {
  errorRecipeForm,
  successInputRecipe,
} from '../../../style/create_Inicio/create_Recipe/validate_recipe.module.css';
export default function ValidataDishSummary({ dish_summary }) {
  const lengthDishShummary = dish_summary.split(' ');

  const messageUndef = '⊗The first word could not be empty⊗';

  if (!lengthDishShummary[0])
    return [false, <p className={errorRecipeForm}>{messageUndef}</p>];

  const minLength = lengthDishShummary.length > 3;
  const maxLength = lengthDishShummary.length < 60;
  const messageMinMaxErro = '⊗The information must be between 3 to 60 words⊗';

  if (!minLength || !maxLength)
    return [false, <p className={errorRecipeForm}>{messageMinMaxErro}</p>];

  return [true, <p className={successInputRecipe}>✔The dish summary is ok✔</p>];
}
