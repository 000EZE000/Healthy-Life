import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchName } from '../../../../redux/actions/recipe_actions';

export default function ValidataNameRecipe({ name }) {
  const myRepatName = useSelector((strore) =>
    strore.recipesReduce.recipeName?.data?.map((e) => e.name).at(-1)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (name && name.length > 4) {
      dispatch(searchName(name));
    }
  }, [name, dispatch]);

  const messageRepeatName = (
    <p>{`That name is already being used by Another Recipe`}</p>
  );

  if (name === myRepatName) return [false, messageRepeatName];

  const lengthName = name.split(' ');

  const miExp = /[a-z]/;

  const messageNoString = `the first word could not be ${lengthName[0]}`;

  const messageUndef = 'the first word could not be empty';

  const messageError = lengthName[0] ? messageNoString : messageUndef;

  if (!miExp.test(lengthName[0])) return [false, <p>{messageError}</p>];

  if (lengthName.length > 5)
    return [false, <p>{'the name could not have five words'}</p>];

  return [true, <span>the name is ok</span>];
}
