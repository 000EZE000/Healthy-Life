import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { allDiet } from '../../redux/actions/diet_actions';
import CardDiet from './Card_Diet/Card_diet';
const Diet = () => {
  const dietRe = useSelector((e) => e.dietReduce.diets);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allDiet());
  }, [dispatch]);

  return (
    <div>
      <h3>My Diet</h3>
      {dietRe?.map((e) => (
        <div key={e.id}>
          <CardDiet name={e.name} id={e.id} info={e.info} image={e.image} />
        </div>
      ))}
    </div>
  );
};

export default Diet;
