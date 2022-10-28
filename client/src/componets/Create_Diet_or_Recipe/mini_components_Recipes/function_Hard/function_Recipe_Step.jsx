import {
  subLabelInput,
  containerInputStInEq,
  containerInputInEq,
  textareaStep,
  containerInputInOrEq,
  textareaIng,
  textareaEqui,
} from '../../../style/create_Inicio/create_Recipe/input_step.module.css';

export const generadorInput = (num, h1, h2, h3) => {
  const newInput = (
    <div className={containerInputStInEq} key={num}>
      <label className={subLabelInput} htmlFor={`${num} Step`}>{`Step ${
        num + 1
      }`}</label>
      <textarea className={textareaStep} type="text" name={num} onChange={h1} />
      <div className={containerInputInEq}>
        <div className={containerInputInOrEq}>
          <label className={subLabelInput} htmlFor={num}>
            Ingredients
          </label>
          <textarea
            className={textareaIng}
            type="text"
            name={num}
            onChange={h2}
            autoComplete="off"
          />
        </div>
        <div className={containerInputInOrEq}>
          <label className={subLabelInput} htmlFor={num}>
            Equipment
          </label>
          <textarea
            className={textareaEqui}
            type="text"
            name={num}
            onChange={h3}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
  return newInput;
};

export const generatorStep = (num) => {
  const objStep = {
    step_number: num,
    step: '',
    ingredients: [],
    equipment: [],
  };
  return objStep;
};

export const setInf = (cb, ob, obStatus) => {
  const objStep = {
    steps: [...ob],
  };
  cb({
    ...obStatus,
    step_by_step: [objStep],
  });
};
