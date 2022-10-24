export default function ValidateDietType({ diets }) {
  const [firstElemDiet, secondElemDiet] = diets;
  const noDiet = 'noDiet';
  const pescatarian = 'pescatarian';
  const vegan = 'vegan';

  const dictionaryDiet = {};
  diets.forEach((e) => {
    dictionaryDiet[e] = e;
  });

  const findNoDiet = dictionaryDiet[noDiet] || false;
  const findPescatarin = dictionaryDiet[pescatarian] || false;
  const findVegan = dictionaryDiet[vegan] || false;

  const messageUndefined = <p>{'You have to select a Diet Option'}</p>;
  if (!firstElemDiet) return [false, messageUndefined];

  const messageNoDiet = (
    <p>{'You cannot select another diet, because you selected NO DIET'}</p>
  );
  if (firstElemDiet && secondElemDiet && findNoDiet)
    return [false, messageNoDiet];

  const messageVeganPesc = (
    <p>{'The vegan diet and pescatarian have no relationship!!!'}</p>
  );
  if (findPescatarin && findVegan) return [false, messageVeganPesc];

  const messageOk = <p>{'What a great selection!!'}</p>;
  return [true, messageOk];
}
