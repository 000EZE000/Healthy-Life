import {
  containerInputDiet,
  textareaStyle,
  labelInput,
} from '../../style/create_Inicio/create_diet/form_diet.module.css';
export default function InputInfo({ form, setForm }) {
  const { info } = form;

  const handleOnchange = (event) => {
    const value = event.target.value;
    setForm({
      ...form,
      info: value,
    });
  };

  const inputInf = (
    <div className={containerInputDiet}>
      <label className={labelInput} htmlFor={info}>
        Infomation
      </label>
      <textarea
        rows="2"
        cols="20"
        className={textareaStyle}
        type="text"
        value={info}
        name={info}
        onChange={handleOnchange}
        autoComplete="off"
      />
    </div>
  );

  return inputInf;
}
