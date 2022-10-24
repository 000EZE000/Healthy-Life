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
    <>
      <label htmlFor={dish_summary}>dish_summary</label>
      <input
        type="text"
        value={dish_summary}
        name="dish_summary"
        onChange={handleOnchange}
        autoComplete="off"
      />
    </>
  );

  return inputName;
}
