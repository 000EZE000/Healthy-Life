import InputName from './input_name_Recipe';
import InputDishSummry from './input_dish_summary_Recipe';
import InputHealthy from './input_ healthy_food_score_Recipe';
import ValidataDishSummary from './validate_Recipe/input_validata_dish_summary';
import ValidataNameRecipe from './validate_Recipe/input_validata_name';
import ValidateDietType from './validate_Recipe/input_validata_diets_type';
import ValidateHealth from './validate_Recipe/input_validata_healthy_food_score';
import InputDiet from './input_type_diets_Recipe';
import InputStep from './form_step_by_step_Recipes';
import ValidateStep from './validate_Recipe/input_validata_step_by_step';
import InputImageRecipe from './Input_Image_Recipe';
import ValidataImageRecipe from './validate_Recipe/input_validata_Img';
import InputSubmit from './input_Submit_Recipe';
import { useEffect } from 'react';
import { allDiet } from '../../../redux/actions/diet_actions';
import { containerForm } from '../../style/create_Inicio/create_Recipe/form_recipe.module.css';
export default function FormRecipe({
  setForm,
  dispatch,
  form,
  refStep,
  createRecipe,
  setMySwitch,
}) {
  const validateName = ValidataNameRecipe(form);
  const validateDis = ValidataDishSummary(form);
  const validateDiet = ValidateDietType(form);
  const validaHealth = ValidateHealth(form);
  const validaStep = ValidateStep(refStep);
  const validaImage = ValidataImageRecipe(form);

  useEffect(() => {
    dispatch(allDiet());
  }, [form, dispatch]);

  const handleOnSubmitForm = (event) => {
    event.preventDefault();
    dispatch(createRecipe(form));
    refStep.current = [];
    setForm({
      name: '',
      diets: [],
      dish_summary: '',
      healthy_food_score: '',
      step_by_step: [],
      image: '',
    });
    setMySwitch(false);
  };
  const myForm = (
    <div className={containerForm}>
      <form onSubmit={handleOnSubmitForm}>
        <InputName setForm={setForm} form={form} />
        {validateName[1]}
        <InputDishSummry setForm={setForm} form={form} />
        {validateDis[1]}
        <InputDiet setForm={setForm} form={form} />
        {validateDiet[1]}
        <InputHealthy setForm={setForm} form={form} />
        {validaHealth[1]}
        <InputStep refStep={refStep} setForm={setForm} form={form} />
        {validaStep[1]}
        <InputImageRecipe setForm={setForm} form={form} />
        {validaImage[1]}
        <InputSubmit
          form={form}
          name={validateName[0]}
          dish={validateDis[0]}
          image={validaImage[0]}
          step={validaStep[0]}
          diet={validateDiet[0]}
          health={validaHealth[0]}
        />
      </form>
    </div>
  );

  return myForm;
}
