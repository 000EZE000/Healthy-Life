import { Link } from 'react-router-dom';

export default function Success({ setForm, setMySwitch }) {
  const handleOnClickRepeat = () => {
    setMySwitch(true);
  };

  const decision = (
    <div>
      <h2>Your diet is up</h2>
      <button>
        <Link to="/diets">See my diet</Link>
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
