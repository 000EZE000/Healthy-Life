import {
  errorDietForm,
  successInput,
} from '../../../style/create_Inicio/create_diet/validation_diet.module.css';

export default function ValidataInfo({ info }) {
  const lengthInf = info.split(' ');

  const messageUndef = (
    <p className={errorDietForm}> {'⊗ The first word could not be empty ⊗'}</p>
  );

  if (!lengthInf[0]) return [false, messageUndef];

  const minLength = lengthInf.length > 3;
  const maxLength = lengthInf.length < 31;
  const messageMinMaxErro = (
    <p className={errorDietForm}>
      {'⊗ The information must be between 3 to 30 words ⊗'}
    </p>
  );

  if (!minLength || !maxLength) return [false, messageMinMaxErro];

  return [true, <p className={successInput}>✔ The Information ✔</p>];
}
