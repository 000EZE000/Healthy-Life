import {
  containerInputRecipe,
  labelInput,
  inputRecipe,
} from '../../style/create_Inicio/create_Recipe/form_recipe.module.css';
export default function InputImageRecipe({ form, setForm }) {
  const { image } = form;
  const handleOnchange = (event) => {
    const value = event.target.value;
    setForm({
      ...form,
      image: value,
    });
  };

  const inputImage = (
    <div className={containerInputRecipe}>
      <label className={labelInput} htmlFor={image}>
        Image
      </label>
      <input
        className={inputRecipe}
        type="text"
        value={image}
        name={image}
        onChange={handleOnchange}
        autoComplete="off"
      />
    </div>
  );

  return inputImage;
}
