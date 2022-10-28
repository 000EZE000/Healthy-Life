import { Link } from 'react-router-dom';
import {
  bottonLink,
  textLink,
  containerFather,
  cotainerBotton,
  titileCreate,
} from '../style/create_Inicio/create_start.module.css';
export default function CreateDietOrRecipe() {
  const bottonRecipe = (
    <button className={bottonLink}>
      <Link className={textLink} to="/create/recipe">
        Create Recipe
      </Link>
    </button>
  );
  const bottonDiet = (
    <button className={bottonLink}>
      <Link className={textLink} to="/create/diet">
        Create Diet
      </Link>
    </button>
  );

  const goToDietOrRecipe = (
    <div className={containerFather}>
      <h2 className={titileCreate}>What do you want to create?</h2>
      <div className={cotainerBotton}>
        {bottonRecipe}
        {bottonDiet}
      </div>
    </div>
  );

  return <div>{goToDietOrRecipe}</div>;
}
