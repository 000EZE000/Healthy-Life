import InputName from './input_name_Diet';
import InputInfo from './input_info_Diet';
import InputImage from './Input_Image_Diet';
import ValidataName from './validate_Diet/input_validata_name';
import ValidataInfo from './validate_Diet/input_validata_Info';
import ValidataImage from './validate_Diet/input_validata_Img';
import InputSubmit from './input_Submit';
import { containerForm } from '../../style/create_Inicio/create_diet/form_diet.module.css';
export default function FormDiet({
  setForm,
  form,
  dispatch,
  createDiet,
  setMySwitch,
}) {
  const valiName = ValidataName(form);
  const valiInfo = ValidataInfo(form);
  const valiImg = ValidataImage(form);
  const handleOnSubmitForm = (event) => {
    event.preventDefault();
    dispatch(createDiet(form));
    setMySwitch(false);
  };

  const myFrom = (
    <div className={containerForm}>
      <form onSubmit={handleOnSubmitForm}>
        <InputName form={form} setForm={setForm} />
        {valiName[1]}
        <InputInfo form={form} setForm={setForm} />
        {valiInfo[1]}
        <InputImage form={form} setForm={setForm} />
        {valiImg[1]}
        <InputSubmit name={valiName[0]} image={valiImg[0]} inf={valiInfo[0]} />
      </form>
    </div>
  );

  return myFrom;
}
