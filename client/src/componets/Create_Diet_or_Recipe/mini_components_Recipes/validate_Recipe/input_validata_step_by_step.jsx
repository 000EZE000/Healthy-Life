const validatelength = (string, numMin, numMax) => {
  const lengthString = string.split(' ');
  console.log(lengthString, 'ho');
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
    <p>
      {
        'This is where you explain how to make the delicious recipe, but it is notmandatory'
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
    <p>{`Some of the data in step ${step_number} missing complete`}</p>
  );
  if (!validateIndefinite) return [false, messageIdefinite];
  const validateSpace = step[0] === ' ';
  const messageSpaceErro = (
    <p>{`there can be no empty spaces at the beginning step ${step_number}`}</p>
  );

  if (validateSpace) return [false, messageSpaceErro];
  const lengthOkStep = validatelength(step, 2, 35);
  const messageLengError = (
    <p>{`For a worthy description we ask you to put between 3 to 35 words in the ${step_number} step`}</p>
  );
  if (!lengthOkStep) return [false, messageLengError];
  console.log('si');
  const lengthOkIngre = validateArry(ingredients, 0, 10);
  const messageLengErrorIng = (
    <p>{`the ingredients have to have at least between 1 to 15 elements, check in step ${step_number}`}</p>
  );
  if (!lengthOkIngre) return [false, messageLengErrorIng];

  const lengthOkEqui = validateArry(equipment, 0, 10);
  const messageLengErrorEqui = (
    <p>{`the Equipment have to have at least between 1 to 10 elements, check in step ${step_number}`}</p>
  );
  if (!lengthOkEqui) return [false, messageLengErrorEqui];

  if (secondElem) {
    copySegu.shift();
    return ValidateStep(copySegu);
  }
  console.log(refStep);
  const messageSuccess = <p>{`the steps are ok`}</p>;
  return [true, messageSuccess];
}
