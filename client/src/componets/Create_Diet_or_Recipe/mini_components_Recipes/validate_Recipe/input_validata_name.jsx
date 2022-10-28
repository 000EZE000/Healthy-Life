import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchName } from '../../../../redux/actions/recipe_actions';
import {
  errorRecipeForm,
  successInputRecipe,
} from '../../../style/create_Inicio/create_Recipe/validate_recipe.module.css';
export default function ValidataNameRecipe({ name }) {
  const myRepatName = useSelector((strore) =>
    strore.recipesReduce.recipeName?.data?.map((e) => e.name).at(-1)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (name && name.length > 2) {
      dispatch(searchName(name));
    }
  }, [name, dispatch]);

  const messageRepeatName = (
    <p
      className={errorRecipeForm}
    >{`⊗That name is already being used by Another Recipe⊗`}</p>
  );

  if (name === myRepatName) return [false, messageRepeatName];

  const lengthName = name.split(' ');

  const miExp = /[a-z]/;

  const messageNoString = `⊗The first word could not be ${lengthName[0]}⊗`;

  const messageUndef = '⊗The first word could not be empty⊗';

  const messageError = lengthName[0] ? messageNoString : messageUndef;

  if (!miExp.test(lengthName[0]))
    return [false, <p className={errorRecipeForm}>{messageError}</p>];

  if (lengthName.length > 5)
    return [
      false,
      <p className={errorRecipeForm}>
        {'⊗The name could not have five words⊗'}
      </p>,
    ];

  return [true, <p className={successInputRecipe}>✔The name ✔</p>];
}
