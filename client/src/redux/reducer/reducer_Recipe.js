/* eslint-disable default-param-last */
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
} from '../actions/name_variables_Recipe';

const initialState = {
  recipes: [],
  recipeName: [],
  detailsId: {},
  relationRecipeDiet: {},
  messageServer: '',
};

const rootReducerRecipe = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ALL_RECIPES:
      return { ...state, recipes: payload.data };
    case NAME_SEARCH:
      return { ...state, recipeName: payload };
    case DETAILS_WITH_ID:
      return { ...state, detailsId: payload };
    case ORDER_ALPHABETICALLY:
      return { ...state, recipes: payload.data };
    case ORDER_HEALTHY_POINTS:
      return { ...state, recipes: payload.data };
    case RECIPE_DIETS_RELATIONS:
      return { ...state, relationRecipeDiet: payload.data };
    case CREATE_RECIPE:
      return { ...state, messageServer: payload };
    case MODIFY_RECIPE:
      return { ...state, messageServer: payload };
    case DELETE_RECIPE:
      return { ...state, messageServer: payload };
    default:
      return { ...state };
  }
};

export default rootReducerRecipe;
