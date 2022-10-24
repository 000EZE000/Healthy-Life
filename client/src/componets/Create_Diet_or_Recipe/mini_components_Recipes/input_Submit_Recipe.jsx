export default function InputSubmit({ name, dish, image, step, diet, health }) {
  const inputSubmit = <input type="submit" value="Upload the New Recipe" />;

  const messageDish = <p>{'check DishSummry'}</p>;
  const messageImage = <p>{'check URL'}</p>;
  const messageStep = <p>{'check Steps'}</p>;
  const messageDiet = <p>{'check Diet'}</p>;
  const messageHealth = <p>{'check Health Score'}</p>;
  const messageName = <p>{'check Name'}</p>;

  const myValidate = !name
    ? messageName
    : !dish
    ? messageDish
    : !diet
    ? messageDiet
    : !health
    ? messageHealth
    : !step
    ? messageStep
    : !image
    ? messageImage
    : inputSubmit;

  return myValidate;
}
