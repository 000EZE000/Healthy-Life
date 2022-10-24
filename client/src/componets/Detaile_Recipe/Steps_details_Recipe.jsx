export default function CardSteps({ num, step, ingredients, equipment }) {
  const CardIngredients = ingredients[0] ? (
    <>
      <h4>Ingredients</h4>
      <ul>
        {ingredients.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
    </>
  ) : null;

  const CardEquipment = equipment[0] ? (
    <>
      <h4>Equipment</h4>
      <ul>
        {equipment.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
    </>
  ) : null;

  const Card = (
    <div>
      <h3>Step {num}</h3>
      <p>{step} </p>
      <div>{CardIngredients}</div>
      <div>{CardEquipment}</div>
    </div>
  );

  return Card;
}
