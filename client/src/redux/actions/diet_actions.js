import axios from 'axios';
import {
  ALL_DIETS,
  CREATE_DIETS,
  MODIFY_DIETS,
  DELETE_DIET,
  DIET_RECIPES_RELATIONS,
} from './name_variables_Diet';

/// ////////////////////////////////////////////////////////////////////////////////////
/* GET */
/// ////////////////////////////////////////////////////////////////////////////////////

export const allDiet = () => async (dispatch) => {
  const myRes = await axios({
    method: 'get',
    url: 'http://localhost:3003/diet',
  });
  dispatch({ type: ALL_DIETS, payload: myRes });
};

export const dietRecipeRelations = (id) => async (dispatch) => {
  const myRes = await axios({
    method: 'get',
    url: `http://localhost:3003/diet/relations/${id}`,
  });
  dispatch({ type: DIET_RECIPES_RELATIONS, payload: myRes });
};

/// ////////////////////////////////////////////////////////////////////////////////////
/* POST */
/// ////////////////////////////////////////////////////////////////////////////////////
export const createDiet = (packDiet) => async (dispatch) => {
  console.log(packDiet);
  const myRes = await axios({
    method: 'post',
    url: 'http://localhost:3003/diet',
    data: packDiet,
  });
  dispatch({ type: CREATE_DIETS, payload: myRes });
};

/// ////////////////////////////////////////////////////////////////////////////////////
/* PUT */
/// ////////////////////////////////////////////////////////////////////////////////////

export const modifyDiet = (updateDiet) => async (dispatch) => {
  const forJson = JSON.stringify(updateDiet);
  const myRes = await axios({
    method: 'put',
    url: 'http://localhost:3003/diet',
    data: forJson,
  });
  dispatch({ type: MODIFY_DIETS, payload: myRes });
};

/// ////////////////////////////////////////////////////////////////////////////////////
/* DELETE */
/// ////////////////////////////////////////////////////////////////////////////////////

export const deleteDiet = (id) => async (dispatch) => {
  const myRes = await axios({
    method: 'delete',
    url: 'http://localhost:3003/diet',
    params: id,
  });
  dispatch({ type: DELETE_DIET, payload: myRes });
};
