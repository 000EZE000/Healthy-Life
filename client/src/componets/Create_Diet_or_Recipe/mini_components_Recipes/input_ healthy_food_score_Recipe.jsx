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
    <>
      <label htmlFor={healthy_food_score}>healthy food score</label>
      <input
        type="text"
        value={healthy_food_score}
        name={healthy_food_score}
        onChange={handleOnchange}
        autoComplete="off"
      />
    </>
  );

  return inputHelthy;
}
