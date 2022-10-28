import {
  submitFormRecipe,
  errorABefore,
  containerInputSuccessRecipe,
} from '../../style/create_Inicio/create_Recipe/validate_recipe.module.css';

export default function InputSubmit({ name, dish, image, step, diet, health }) {
  const inputSubmit = (
    <input
      className={submitFormRecipe}
      type="submit"
      value="Upload the New Recipe"
    />
  );

  const messageDish = <p className={errorABefore}>{'⊗check DishSummry⊗'}</p>;
  const messageImage = <p className={errorABefore}>{'⊗check URL⊗'}</p>;
  const messageStep = <p className={errorABefore}>{'⊗check Steps⊗'}</p>;
  const messageDiet = <p className={errorABefore}>{'⊗check Diet⊗'}</p>;
  const messageHealth = (
    <p className={errorABefore}>{'⊗check Health Score⊗'}</p>
  );
  const messageName = <p className={errorABefore}>{'⊗check Name⊗'}</p>;

  const myValidate = (
    <div className={containerInputSuccessRecipe}>
      {!name
        ? messageName
        : !dish
        ? messageDish
        : !diet
        ? messageDiet
        : !health
        ? messageHealth
        : !step
        ? messageStep
        : !image
        ? messageImage
        : inputSubmit}
    </div>
  );

  return myValidate;
}
