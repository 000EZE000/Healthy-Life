import axios from 'axios';
import {
  ALL_RECIPES,
  NAME_SEARCH,
  DETAILS_WITH_ID,
  ORDER_ALPHABETICALLY,
  ORDER_HEALTHY_POINTS,
  CREATE_RECIPE,
  MODIFY_RECIPE,
  DELETE_RECIPE,
  RECIPE_DIETS_RELATIONS,
} from './name_variables_Recipe';

/// ////////////////////////////////////////////////////////////////////////////////////
/* GET */
/// ////////////////////////////////////////////////////////////////////////////////////
export const allRecipes = () => async (dispatch) => {
  const myRes = await axios({
    method: 'get',
    url: 'http://localhost:3003/recipes/all_recipes',
  });
  return dispatch({ type: ALL_RECIPES, payload: myRes });
};

export const orderAlphabetically = () => async (dispatch) => {
  const myRes = await axios({
    method: 'get',
    url: 'http://localhost:3003/recipes/order/alphabetically',
  });
  dispatch({ type: ORDER_ALPHABETICALLY, payload: myRes });
};

export const orderHealthyPoints = () => async (dispatch) => {
  const myRes = await axios({
    method: 'get',
    url: 'http://localhost:3003/recipes/order/health_score',
  });
  dispatch({ type: ORDER_HEALTHY_POINTS, payload: myRes });
};

export const searchName = (nameRecipe) => async (dispatch) => {
  try {
    const myRes = await axios({
      method: 'get',
      url: 'http://localhost:3003/recipes/search?',
      params: {
        name: nameRecipe,
      },
    });
    dispatch({ type: NAME_SEARCH, payload: myRes });
  } catch (error) {
    console.log(error.message);
  }
};

export const detailsId = (id) => async (dispatch) => {
  try {
    const myRes = await axios({
      method: 'get',
      url: `http://localhost:3003/recipes/${id}`,
    });
    dispatch({ type: DETAILS_WITH_ID, payload: myRes });
  } catch (error) {
    dispatch({ type: DETAILS_WITH_ID, payload: error.message });
  }
};

export const recipesRelationsDiet = (id) => async (dispatch) => {
  const myRes = await axios({
    method: 'get',
    url: `http://localhost:3003/recipes/relationship/${id}`,
  });
  return dispatch({ type: RECIPE_DIETS_RELATIONS, payload: myRes });
};

/// ////////////////////////////////////////////////////////////////////////////////
/* POST */
/// ////////////////////////////////////////////////////////////////////////////////

export const createRecipe = (packRecipe) => async (dispatch) => {
  const myRes = await axios({
    method: 'post',
    url: 'http://localhost:3003/recipes',
    data: packRecipe,
  });
  dispatch({ type: CREATE_RECIPE, payload: myRes });
};

/// ////////////////////////////////////////////////////////////////////////////////
/* PUT */
/// ////////////////////////////////////////////////////////////////////////////////

export const modifyRecipe = (updateRecipe) => async (dispatch) => {
  const myRes = await axios({
    method: 'put',
    url: 'http://localhost:3003/recipes',
    data: updateRecipe,
  });
  dispatch({ type: MODIFY_RECIPE, payload: myRes });
};

/// ////////////////////////////////////////////////////////////////////////////////
/* DELETE */
/// ////////////////////////////////////////////////////////////////////////////////

export const deleteRecipe = (id) => async (dispatch) => {
  const myRes = await axios({
    method: 'delete',
    url: `http://localhost:3003/recipes${id}`,
  });
  dispatch({ type: DELETE_RECIPE, payload: myRes });
};
