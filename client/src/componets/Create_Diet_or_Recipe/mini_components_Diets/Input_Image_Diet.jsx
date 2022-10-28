import {
  containerInputDiet,
  inputDiet,
  labelInput,
} from '../../style/create_Inicio/create_diet/form_diet.module.css';
export default function InputImage({ form, setForm }) {
  const { image } = form;
  const handleOnchange = (event) => {
    const value = event.target.value;
    setForm({
      ...form,
      image: value,
    });
  };

  const inputImage = (
    <div className={containerInputDiet}>
      <label className={labelInput} htmlFor={image}>
        Image Url
      </label>
      <input
        className={inputDiet}
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
