import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { allDiet } from '../../redux/actions/diet_actions';
import CardDiet from './Card_Diet/Card_diet';
import {
  containerDiet,
  containerCardDiet,
  dietTitle,
  ContainerDietTitle,
} from '../style/Diet/diet.module.css';
const Diet = () => {
  const dietRe = useSelector((e) => e.dietReduce.diets);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allDiet());
  }, [dispatch]);

  let pest = 'pescatarian';
  let free = 'dairy free';
  return (
    <div className={containerDiet}>
      <div className={ContainerDietTitle}>
        <h3 className={dietTitle}>Diets.....</h3>
      </div>
      <div className={containerCardDiet}>
        {dietRe?.map((e) => {
          if (e.name === pest) {
            pest = '';
            return null;
          }
          if (e.name === free) {
            free = '';
            return null;
          }

          return (
            <CardDiet
              key={e.id}
              name={e.name}
              id={e.id}
              info={e.info}
              image={e.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Diet;
