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
    <>
      <label htmlFor={name}>Name</label>
      <input
        type="text"
        value={name}
        name={name}
        onChange={handleOnchange}
        autoComplete="off"
      />
    </>
  );

  return inputName;
}
