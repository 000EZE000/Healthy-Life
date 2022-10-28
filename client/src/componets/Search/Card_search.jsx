import * as Scroll from 'react-scroll';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  containerCard,
  containerTextLink,
  textLink,
  titleCard,
  imageCard,
} from '../style/Search/card_search.module.css';
export default function CardSearch({ location }) {
  const { scrollToTop } = Scroll.animateScroll;

  useEffect(() => {
    return () => {
      scrollToTop();
    };
  }, [scrollToTop]);

  const cardSearch = location?.map((e, index) => (
    <div className={containerCard} key={index}>
      <p className={titleCard}>{e.name}</p>
      <img className={imageCard} src={e.image} alt={e.name} />
      <button className={containerTextLink}>
        <Link className={textLink} to={`/details/${e.id}`}>
          Details
        </Link>
      </button>
    </div>
  ));

  const myShearCard = cardSearch ? cardSearch : null;

  return myShearCard;
}
