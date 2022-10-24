import * as Scroll from 'react-scroll';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function CardSearch({ location }) {
  const { scrollToTop } = Scroll.animateScroll;

  useEffect(() => {
    return () => {
      scrollToTop();
    };
  }, []);

  const cardSearch = location?.map((e, index) => (
    <div key={index}>
      <button>
        <Link to={`/details/${e.id}`}>Details</Link>
      </button>
      <h4>{e.name}</h4>
      <img src={e.image} alt={e.name} />
    </div>
  ));

  const myShearCard = cardSearch ? cardSearch : null;

  return myShearCard;
}
