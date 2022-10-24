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
    <>
      <label htmlFor={image}>image</label>
      <input
        type="text"
        value={image}
        name={image}
        onChange={handleOnchange}
        autoComplete="off"
      />
    </>
  );

  return inputImage;
}
