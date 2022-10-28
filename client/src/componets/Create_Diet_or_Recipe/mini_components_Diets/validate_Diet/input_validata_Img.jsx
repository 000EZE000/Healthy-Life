import {
  errorDietForm,
  successInput,
} from '../../../style/create_Inicio/create_diet/validation_diet.module.css';
export default function ValidataImage({ image }) {
  const lengthImage = image.split(' ');
  const messageUndef = (
    <p className={errorDietForm}>{'⊗The URL could not be empty⊗'}</p>
  );

  if (!lengthImage[0]) return [false, messageUndef];

  const myExpRe = /^(\w{5})(:\/{2}).+\.+(png|jpg|jpeg|gif)$/gim;
  const urlExample = 'https://anything.png';
  const mesageErro = 'The url does not have the proper format a little help:';
  const messageHAH = (
    <p
      className={errorDietForm}
    >{`⊗You can not put the example >: V hahaha⊗`}</p>
  );
  if (image === 'https://anything.png⊗') return [false, messageHAH];
  if (myExpRe.test(image))
    return [true, <p className={successInput}>✔ The Url ✔</p>];

  return [
    false,
    <p className={errorDietForm}>{` ⊗${mesageErro} ${urlExample}⊗`}</p>,
  ];
}
