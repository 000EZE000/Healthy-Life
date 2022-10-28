import {
  containerInputRecipe,
  labelInput,
  inputRecipe,
} from '../../style/create_Inicio/create_Recipe/form_recipe.module.css';
export default function InputHealthy({ form, setForm }) {
  const { healthy_food_score } = form;

  const handleOnchange = (event) => {
    const value = event.target.value;
    setForm({
      ...form,
      healthy_food_score: value,
    });
  };

  const inputHelthy = (
    <div className={containerInputRecipe}>
      <label className={labelInput} htmlFor={healthy_food_score}>
        Healthy Food Score
      </label>
      <input
        className={inputRecipe}
        type="text"
        value={healthy_food_score}
        name={healthy_food_score}
        onChange={handleOnchange}
        autoComplete="off"
      />
    </div>
  );

  return inputHelthy;
}
