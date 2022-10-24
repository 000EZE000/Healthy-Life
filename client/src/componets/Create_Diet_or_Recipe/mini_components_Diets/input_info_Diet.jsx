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
    <>
      <label htmlFor={info}>infomation</label>
      <input
        type="text"
        value={info}
        name={info}
        onChange={handleOnchange}
        autoComplete="off"
      />
    </>
  );

  return inputInf;
}
