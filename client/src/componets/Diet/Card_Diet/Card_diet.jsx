import {
  cardChildDiet,
  infCardDiet,
  nameDiet,
  imageCardDiet,
} from '../../style/Diet/card_diets.module.css';

export default function CardDiet({ id, name, info, image }) {
  return (
    <div className={cardChildDiet} key={id}>
      <h3 className={nameDiet}>{name}</h3>
      <img className={imageCardDiet} src={image} alt={name} />
      <p className={infCardDiet}>{info}</p>
    </div>
  );
}
