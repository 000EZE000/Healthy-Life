import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducerDiet from '../reducer/reducer_Diet';
import rootReducerRecipe from '../reducer/reducer_Recipe';
import rootReducerRun from '../reducer/reducer_RunDataBase';

const packReducer = combineReducers({
  recipesReduce: rootReducerRecipe,
  dietReduce: rootReducerDiet,
  runDataReduce: rootReducerRun,
});
const store = createStore(
  packReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;

