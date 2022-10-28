import {
  submitFormDiet,
  containerInputSuccessDiet,
} from '../../style/create_Inicio/create_diet/validation_diet.module.css';

export default function InputSubmit({ name, inf, image }) {
  const inputSubmit = (
    <div className={containerInputSuccessDiet}>
      <input
        className={submitFormDiet}
        type="submit"
        value=">>> Upload the New Diet <<<"
      />
    </div>
  );
  return name && inf && image && inputSubmit;
}
