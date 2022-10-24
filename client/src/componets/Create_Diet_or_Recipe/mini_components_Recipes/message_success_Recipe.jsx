import { Link } from 'react-router-dom';

export default function SuccessRecipe({ setMySwitch }) {
  const handleOnClickRepeat = () => {
    setMySwitch(true);
  };

  const decision = (
    <div>
      <h2>Your Recipe is up</h2>
      <button>
        <Link to="/search">Search my Recipe</Link>
      </button>
      <input
        type="button"
        value="Create yet another recipe"
        onClick={handleOnClickRepeat}
      />
    </div>
  );
  return decision;
}
