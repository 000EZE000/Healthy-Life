import {
  containerInputRecipe,
  labelInput,
  inputRecipe,
} from '../../style/create_Inicio/create_Recipe/form_recipe.module.css';
export default function InputName({ form, setForm }) {
  const { name } = form;

  const handleOnchange = (event) => {
    const value = event.target.value;
    setForm({
      ...form,
      name: value,
    });
  };

  const inputName = (
    <div className={containerInputRecipe}>
      <label className={labelInput} htmlFor={name}>
        Name of Recipe
      </label>
      <input
        className={inputRecipe}
        type="text"
        value={name}
        name={name}
        onChange={handleOnchange}
        autoComplete="off"
      />
    </div>
  );

  return inputName;
}
