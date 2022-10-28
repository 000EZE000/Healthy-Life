import {
  errorRecipeForm,
  successInputRecipe,
} from '../../../style/create_Inicio/create_Recipe/validate_recipe.module.css';

export default function ValidataImageRecipe({ image }) {
  const lengthImage = image.split(' ');
  const messageUndef = (
    <p className={errorRecipeForm}> {'⊗The URL could not be empty⊗'}</p>
  );

  if (!lengthImage[0]) return [false, messageUndef];

  const myExpRe = /^(\w{5})(:\/{2}).+\.+(png|jpg|jpeg|gif)$/gim;
  const urlExample = 'https://anything.png⊗';
  const mesageErro = '⊗the url does not have the proper format a little help:';
  const messageHAH = (
    <p className={errorRecipeForm}>
      {`⊗you can not put the example >: V hahaha⊗`}
    </p>
  );
  if (image === 'https://anything.png') return [false, messageHAH];

  if (myExpRe.test(image))
    return [true, <p className={successInputRecipe}>✔The Url✔</p>];

  return [
    false,
    <p className={errorRecipeForm}>{`${mesageErro} ${urlExample}`}</p>,
  ];
}
