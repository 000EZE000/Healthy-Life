import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
//import { createRecipe } from '../../redux/actions/recipe_actions';
import FormRecipe from './mini_components_Recipes/form_Recipe';
import { createRecipe } from '../../redux/actions/recipe_actions';
import SuccessRecipe from './mini_components_Recipes/message_success_Recipe';
export default function CreateRecipe() {
  const [mySwitch, setMySwitch] = useState(true);
  const refStep = useRef([]);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: '',
    diets: [],
    dish_summary: '',
    healthy_food_score: '',
    step_by_step: [],
    image: '',
  });

  const buttonBackToCrate = (
    <button>
      <Link to="/create">Back</Link>
    </button>
  );

  const createRecipeForm = (
    <div>
      <h3>Create your own Recipe</h3>
      {buttonBackToCrate}
      <FormRecipe
        form={form}
        setForm={setForm}
        dispatch={dispatch}
        refStep={refStep}
        setMySwitch={setMySwitch}
        createRecipe={createRecipe}
      />
    </div>
  );
  const decision = mySwitch ? (
    createRecipeForm
  ) : (
    <SuccessRecipe setMySwitch={setMySwitch} setForm={setForm} />
  );
  return decision;
}
