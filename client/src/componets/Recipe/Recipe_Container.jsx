import React, { useEffect, useState } from 'react';
import PaginationRecipe from './pagination_Recipe.jsx';
import { useSelector, useDispatch } from 'react-redux';

import {
  containerButtonAll,
  buttonNotDisable,
  containerButton,
  containerRecipeAall,
  containerDietInput,
  filterDiet,
  backgroundAuxRec,
} from '../style/Recipe_list/recipe_Opcion.module.css';
import {
  dietRecipeRelations,
  clearRelation,
} from '../../redux/actions/diet_actions.js';
import TypeDietSear from './type_diet.jsx';
import alphaOrder from './order/card_recipe/alpha.js';
import scoreOrder from './order/score.js';
export default function Recipe() {
  let repicesReducer = useSelector(
    (e) => e.dietReduce.relationsDietRecipe.data?.[0]?.recipes
  );
  const [myOrder, setMyOrder] = useState([]);
  const [page, setPage] = useState([]);
  let [pageLocation, setPageLocation] = useState(0);
  const dispatch = useDispatch();
  const myDiet = TypeDietSear();
  let arrayPage = [];

  useEffect(() => {
    return () => {
      dispatch(clearRelation());
    };
  }, [dispatch]);
  const handleOnclickOrderAndDiet = (event) => {
    const nameId = event.target.name;
    const dicctionary = {
      Alpha: alphaOrder,
      Healthy: scoreOrder,
    };

    if (nameId !== 'Alpha' && nameId !== 'Healthy') {
      dispatch(dietRecipeRelations(nameId));
      setPageLocation(0);
      setMyOrder([]);
      return;
    }
    const filterDiet = dicctionary[nameId](repicesReducer);
    setMyOrder(filterDiet);
    return;
  };

  const myOptionDiets = myDiet ? (
    <div className={containerDietInput}>
      {myDiet?.map((e, index) => (
        <input
          key={index}
          type="button"
          value={e[1]}
          name={e[0]}
          onClick={handleOnclickOrderAndDiet}
          className={filterDiet}
        />
      ))}
    </div>
  ) : null;
  const orderNameArray = ['Alpha', 'Healthy'];
  const buttonArray = repicesReducer
    ? orderNameArray.map((e, index) => (
        <div className={containerButton} key={index}>
          <button
            name={e}
            className={buttonNotDisable}
            onClick={handleOnclickOrderAndDiet}
          >
            {e}
          </button>
        </div>
      ))
    : null;

  const myCarts = (
    <div className={containerRecipeAall}>
      <div className={containerButtonAll}>{buttonArray}</div>
          <div>{myOptionDiets}</div>
      <PaginationRecipe
        content={myOrder[0] ? myOrder : repicesReducer}
        setPage={setPage}
        pageLocation={pageLocation}
        setPageLocation={setPageLocation}
        page={page}
        arrayPage={arrayPage}
      />
    </div>
  );

  return (
    <div>
      {myCarts}
      <div className={backgroundAuxRec}></div>
    </div>
  );
}
