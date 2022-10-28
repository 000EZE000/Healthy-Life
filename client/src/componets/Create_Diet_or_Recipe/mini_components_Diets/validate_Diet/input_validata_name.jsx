import {
  errorDietForm,
  successInput,
} from '../../../style/create_Inicio/create_diet/validation_diet.module.css';

export default function ValidataName({ name }) {
  const lengthName = name.split(' ');

  const miExp = /[a-z]/;

  const messageNoString = `⊗ The first word could not be ${lengthName[0]} ⊗`;

  const messageUndef = '⊗ The first word could not be empty ⊗';

  const messageError = lengthName[0] ? messageNoString : messageUndef;

  if (!miExp.test(lengthName[0]))
    return [false, <p className={errorDietForm}>{messageError}</p>];

  const messageTreError = ' ⊗The name could not have three words⊗';

  if (lengthName.length > 3)
    return [false, <p className={errorDietForm}>{messageTreError}</p>];

  return [true, <p className={successInput}>✔ The name ✔ </p>];
}
