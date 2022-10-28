import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import * as Scroll from 'react-scroll';
import {
  containerCard,
  containerTextLink,
  textLink,
  titleCard,
  imageCard,
  healthyCard,
} from '../../../style/Recipe_list/card_Recipe.module.css';
export default function CardRecipe({ location }) {
  const { scrollToTop } = Scroll.animateScroll;
  useEffect(() => {
    return () => {
      scrollToTop();
    };
  }, [scrollToTop]);

  if (!Array.isArray(location)) return null;

  const renderRecipe = location?.map((e) => (
    <div className={containerCard} key={e.id}>
      <p className={titleCard}>{e.name}</p>
      <img className={imageCard} src={e.image} alt={e.name} />
      <p className={healthyCard}>
        healthy {'>>>'} {e.healthy_food_score} {'<<<'} healthy
      </p>

      <div>
        <button className={containerTextLink}>
          <Link className={textLink} to={`/details/${e.id}`}>
            Details
          </Link>
        </button>
      </div>
    </div>
  ));

  return renderRecipe;
}
