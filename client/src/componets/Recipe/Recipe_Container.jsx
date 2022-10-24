import React, { useEffect, useState, useRef } from 'react';
import PaginationRecipe from './pagination_Recipe.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { allRecipes } from '../../redux/actions/recipe_actions';
import { orderAlphabetically } from '../../redux/actions/recipe_actions';
import { orderHealthyPoints } from '../../redux/actions/recipe_actions';
export default function Recipe() {
  const [order, setOrder] = useState('Disorderly');
  const [page, setPage] = useState([]);
  const [pageLocation, setPageLocation] = useState(0);
  const myRefFunction = useRef(allRecipes);
  const repicesReducer = useSelector((e) => e.recipesReduce.recipes);

  const dispatch = useDispatch();
  useEffect(() => {
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

  const orderNameArray = ['Alpha', 'Healthy', 'Disorderly'];
  const buttonArray = orderNameArray.map((e, index) => (
    <div key={index}>
      {order === e ? (
        <button disabled>{e}</button>
      ) : (
        <button name={e} onClick={handleOnclickOrder}>
          {e}
        </button>
      )}
    </div>
  ));

  return (
    <div>
      {buttonArray}
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
