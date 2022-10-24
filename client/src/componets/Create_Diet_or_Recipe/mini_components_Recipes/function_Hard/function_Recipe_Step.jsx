export const generadorInput = (num, h1, h2, h3) => {
  const newInput = (
    <div key={num}>
      <label htmlFor={`${num} Step`}>{`Step ${num + 1}`}</label>
      <input type="text" name={num} onChange={h1} autoComplete="off" />
      <label htmlFor={num}>ingredients </label>
      <input type="text" name={num} onChange={h2} autoComplete="off" />
      <label htmlFor={num}>equipment</label>
      <input type="text" name={num} onChange={h3} autoComplete="off" />
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
