import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import FormRecipe from './mini_components_Recipes/form_Recipe';
import { createRecipe } from '../../redux/actions/recipe_actions';
import SuccessRecipe from './mini_components_Recipes/message_success_Recipe';
import {
  containerFatherRecipe,
  containerAddBack,
  linkBack,
  textCreateRecipe,
} from '../style/create_Inicio/create_Recipe/create_recipe.module.css';
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

  const createRecipeForm = (
    <div className={containerFatherRecipe}>
      <div>
        <div className={containerAddBack}>
          <Link className={linkBack} to="/create">
            ⋘Back
          </Link>
          <h3 className={textCreateRecipe}>Create your own Recipe</h3>
        </div>
      </div>
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
