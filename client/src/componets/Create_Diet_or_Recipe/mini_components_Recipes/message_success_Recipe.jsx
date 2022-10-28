import { Link } from 'react-router-dom';
import {
  facherMessageDiet,
  containerTitle,
  titleSucess,
  containerOpcion,
  linkOfDiet,
  repeatInput,
} from '../../style/create_Inicio/sucessMessage.module.css';
export default function Success({ setForm, setMySwitch }) {
  const handleOnClickRepeat = () => {
    setMySwitch(true);
  };

  const decision = (
    <div className={facherMessageDiet}>
      <div className={containerTitle}>
        <h2 className={titleSucess}>Your diet is up</h2>
      </div>
      <div className={containerOpcion}>
        <Link className={linkOfDiet} to="/search">
          Search my Recipe
        </Link>
        <input
          className={repeatInput}
          type="button"
          value="Create yet another Diet"
          onClick={handleOnClickRepeat}
        />
      </div>
    </div>
  );
  return decision;
}
