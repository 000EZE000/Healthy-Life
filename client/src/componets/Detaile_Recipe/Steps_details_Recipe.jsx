import {
  cardChildStep,
  fatheIngrAndEqui,
  childStepIng,
  childStepEqui,
  titleStep,
  childLiStep,
} from '../style/Detail/detail_step.module.css';

export default function CardSteps({ num, step, ingredients, equipment }) {
  const CardIngredients = ingredients[0] ? (
    <>
      <h4>Ingredients</h4>
      <ul>
        {ingredients.map((e, index) => (
          <li className={childLiStep} key={index}>
            {e}
          </li>
        ))}
      </ul>
    </>
  ) : null;

  const CardEquipment = equipment[0] ? (
    <>
      <h4>Equipment</h4>
      <ul>
        {equipment.map((e, index) => (
          <li className={childLiStep} key={index}>
            {e}
          </li>
        ))}
      </ul>
    </>
  ) : null;

  const ingreIsNull = CardIngredients ? (
    <div className={childStepIng}>{CardIngredients}</div>
  ) : null;
  const equiIsNull = CardEquipment ? (
    <div className={childStepEqui}>{CardEquipment}</div>
  ) : null;
  const Card = (
    <div className={cardChildStep}>
      <h3 className={titleStep}>Step {num}</h3>

      <p className={titleStep}>{step}</p>

      <div className={fatheIngrAndEqui}>
        {ingreIsNull}
        {equiIsNull}
      </div>
    </div>
  );

  return Card;
}
