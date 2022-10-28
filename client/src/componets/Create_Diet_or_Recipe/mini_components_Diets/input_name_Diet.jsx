import {
  containerInputDiet,
  labelInput,
  inputDiet,
} from '../../style/create_Inicio/create_diet/form_diet.module.css';

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
    <div className={containerInputDiet}>
      <label className={labelInput} htmlFor={name}>
        Name of Diet
      </label>
      <input
        className={inputDiet}
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
