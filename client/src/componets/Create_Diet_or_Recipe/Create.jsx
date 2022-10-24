import { Link } from 'react-router-dom';
export default function CreateDietOrRecipe() {
  const bottonRecipe = (
    <button>
      <Link to="/create/recipe">Create Recipe</Link>
    </button>
  );
  const bottonDiet = (
    <button>
      <Link to="/create/diet">Create Diet</Link>
    </button>
  );

  const goToDietOrRecipe = (
    <div>
      <h2>What do you want to create</h2>
      {bottonRecipe}
      {bottonDiet}
    </div>
  );

  return <div>{goToDietOrRecipe}</div>;
}
