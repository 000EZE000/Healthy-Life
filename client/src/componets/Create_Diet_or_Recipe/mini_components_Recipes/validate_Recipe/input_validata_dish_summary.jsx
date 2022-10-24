export default function ValidataDishSummary({ dish_summary }) {
  const lengthDishShummary = dish_summary.split(' ');

  const messageUndef = 'the first word could not be empty';

  if (!lengthDishShummary[0]) return [false, <p>{messageUndef}</p>];

  const minLength = lengthDishShummary.length > 3;
  const maxLength = lengthDishShummary.length < 60;
  const messageMinMaxErro = 'the information must be between 3 to 60 words';

  if (!minLength || !maxLength) return [false, <p>{messageMinMaxErro}</p>];

  return [true, <span>the dish summary is ok</span>];
}
