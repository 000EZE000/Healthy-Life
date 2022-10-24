import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import * as Scroll from 'react-scroll';
export default function CardRecipe({ location }) {
  const { scrollToTop } = Scroll.animateScroll;
  useEffect(() => {
    return () => {
      scrollToTop();
    };
  }, []);
  if (!Array.isArray(location)) return null;
  const renderRecipe = location?.map((e) => (
    <div key={e.id}>
      <button>
        <Link to={`/details/${e.id}`}>Details</Link>
      </button>
      <p>{e.name}</p>
      <img src={e.image} alt={e.name} />
      <p>{e.healthy_food_score}</p>
      {e.diets?.map((a) => (
        <div key={a.id}>
          <span>{a.name}</span>
        </div>
      ))}
    </div>
  ));

  return renderRecipe;
}
