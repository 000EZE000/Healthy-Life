import {
  errorRecipeForm,
  successInputRecipe,
} from '../../../style/create_Inicio/create_Recipe/validate_recipe.module.css';

const validatelength = (string, numMin, numMax) => {
  const lengthString = string.split(' ');
  const lengthOk = lengthString.length > numMin && lengthString.length < numMax;
  return lengthOk;
};

const validateArry = (array, numMin, numMax) => {
  const lengthOk = array.length > numMin && array.length < numMax;
  return lengthOk;
};

export default function ValidateStep(refStep) {
  let copySegu;
  refStep?.['current']
    ? (copySegu = [...refStep.current])
    : (copySegu = [...refStep]);

  const [firtsElem, secondElem] = copySegu;

  const messageUndefine = (
    <p className={successInputRecipe}>
      {
        '✔This is where you explain how to make the delicious recipe, but it is notmandatory✔'
      }
    </p>
  );
  if (!firtsElem && !secondElem) return [true, messageUndefine];

  const { step_number, step, ingredients, equipment } = firtsElem;

  const validateIndefinite = !step
    ? false
    : !ingredients
    ? false
    : !ingredients
    ? false
    : true;
  const messageIdefinite = (
    <p
      className={errorRecipeForm}
    >{`⊗Some of the data in step ${step_number} missing complete⊗`}</p>
  );
  if (!validateIndefinite) return [false, messageIdefinite];
  const validateSpace = step[0] === ' ';
  const messageSpaceErro = (
    <p
      className={errorRecipeForm}
    >{`⊗There can be no empty spaces at the beginning step ${step_number}⊗`}</p>
  );

  if (validateSpace) return [false, messageSpaceErro];
  const lengthOkStep = validatelength(step, 2, 35);
  const messageLengError = (
    <p
      className={errorRecipeForm}
    >{`⊗For a worthy description we ask you to put between 3 to 35 words in the ${step_number} step⊗`}</p>
  );
  if (!lengthOkStep) return [false, messageLengError];
  const lengthOkIngre = validateArry(ingredients, 0, 10);
  const messageLengErrorIng = (
    <p
      className={errorRecipeForm}
    >{`⊗The ingredients have to have at least between 1 to 15 elements, check in step ${step_number}⊗`}</p>
  );
  if (!lengthOkIngre) return [false, messageLengErrorIng];

  const lengthOkEqui = validateArry(equipment, 0, 10);
  const messageLengErrorEqui = (
    <p
      className={errorRecipeForm}
    >{`⊗The Equipment have to have at least between 1 to 10 elements, check in step ${step_number}⊗`}</p>
  );
  if (!lengthOkEqui) return [false, messageLengErrorEqui];

  if (secondElem) {
    copySegu.shift();
    return ValidateStep(copySegu);
  }

  const messageSuccess = <p className={successInputRecipe}>{`✔The steps✔`}</p>;
  return [true, messageSuccess];
}
