import React, { useEffect, useState, useRef } from 'react';
import PaginationRecipe from './pagination_Recipe.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { allRecipes } from '../../redux/actions/recipe_actions';
import { orderAlphabetically } from '../../redux/actions/recipe_actions';
import { orderHealthyPoints } from '../../redux/actions/recipe_actions';
import {
  containerButtonAll,
  buttonDisable,
  buttonNotDisable,
  containerButton,
  containerRecipeAall,
} from '../style/Recipe_list/recipe_Opcion.module.css';
import { allDiet } from '../../redux/actions/diet_actions.js';
import TypeDietSear from './type_diet.jsx';
export default function Recipe() {
  const [order, setOrder] = useState('Disorderly');
  const [page, setPage] = useState([]);
  const [pageLocation, setPageLocation] = useState(0);
  const myRefFunction = useRef(allRecipes);
  const repicesReducer = useSelector((e) => e.recipesReduce.recipes);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allDiet());
    dispatch(myRefFunction.current());
  }, [order, dispatch]);

  const handleOnclickOrder = (event) => {
    const name = event.target.name;
    const dicctionary = {
      Alpha: orderAlphabetically,
      Healthy: orderHealthyPoints,
      Disorderly: allRecipes,
    };
    myRefFunction.current = dicctionary[name];
    setOrder(name);
  };

  const myDiets = TypeDietSear();
  console.log(myDiets);

  const orderNameArray = ['Alpha', 'Healthy'];
  const buttonArray = orderNameArray.map((e, index) => (
    <div className={containerButton} key={index}>
      <button
        name={e}
        className={buttonNotDisable}
        onClick={handleOnclickOrder}
      >
        {e}
      </button>
    </div>
  ));

  return (
    <div className={containerRecipeAall}>
      <div className={containerButtonAll}>{buttonArray}</div>
      <PaginationRecipe
        content={repicesReducer}
        setPage={setPage}
        order={order}
        pageLocation={pageLocation}
        setPageLocation={setPageLocation}
        page={page}
      />
    </div>
  );
}
