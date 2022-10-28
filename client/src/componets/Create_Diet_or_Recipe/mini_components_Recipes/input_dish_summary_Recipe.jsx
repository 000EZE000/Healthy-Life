import {
  containerInputRecipe,
  labelInput,
  textareaStyleDish,
} from '../../style/create_Inicio/create_Recipe/form_recipe.module.css';
export default function InputDishSummry({ form, setForm }) {
  const { dish_summary } = form;
  const handleOnchange = (event) => {
    const value = event.target.value;
    setForm({
      ...form,
      dish_summary: value,
    });
  };

  const inputName = (
    <div className={containerInputRecipe}>
      <label className={labelInput} htmlFor={dish_summary}>
        Dish Summary
      </label>
      <textarea
        className={textareaStyleDish}
        type="text"
        value={dish_summary}
        name="dish_summary"
        onChange={handleOnchange}
        autoComplete="off"
      />
    </div>
  );

  return inputName;
}
