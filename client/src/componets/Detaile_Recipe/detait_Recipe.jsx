import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { detailsId } from '../../redux/actions/recipe_actions';
import CardSteps from './Steps_details_Recipe';
import { Markup } from 'interweave';

export default function RecipeDetails({ match }) {
  const { id } = match.params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsId(id));
  }, [dispatch, id]);
  const responseServer = useSelector((store) => store.recipesReduce.detailsId);

  const typeData = typeof responseServer;

  const errorFound = (
    <div>
      <h1>Recipe not found</h1>
    </div>
  );

  if (typeData === 'string') return errorFound;

  if (responseServer.data) {
    const { name, dish_summary, healthy_food_score, image, step_by_step } =
      responseServer?.data;

    const messagewithoutStep = <h3>This recipe does not have step by step</h3>;
    const stepsDetails = step_by_step[0] ? step_by_step[0]['steps'] : false;

    const renderStesp = stepsDetails
      ? stepsDetails?.map((e, index) => (
          <div key={index}>
            <CardSteps
              key={index}
              step={e.step}
              num={e.step_number}
              ingredients={e.ingredients}
              equipment={e.equipment}
            />
          </div>
        ))
      : messagewithoutStep;

    const myDetailsId = (
      <div>
        <h2>{name}</h2>
        <h3>healthy_food_score: {healthy_food_score}</h3>
        <div>
          <Markup content={dish_summary} />;
          <img src={image} alt={name} />
        </div>
        <div>{renderStesp}</div>
      </div>
    );

    return myDetailsId;
    //   return StepsDetails;
  }
  return <p>Loading........</p>;
}
