import {
  ALL_DIETS,
  CREATE_DIETS,
  MODIFY_DIETS,
  DELETE_DIET,
  DIET_RECIPES_RELATIONS,
} from '../actions/name_variables_Diet';

const initialState = {
  diets: [],
  relationsDietRecipe: {},
  messageServer: '',
};

const rootReducerDiet = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ALL_DIETS:
      return { ...state, diets: payload.data };
    case DIET_RECIPES_RELATIONS:
      return { ...state, relationsDietRecipe: payload };
    case CREATE_DIETS:
      return { ...state, messageServer: payload };
    case MODIFY_DIETS:
      return { ...state, messageServer: payload };
    case DELETE_DIET:
      return { ...state, messageServer: payload };
    default:
      return { ...state };
  }
};

export default rootReducerDiet;
