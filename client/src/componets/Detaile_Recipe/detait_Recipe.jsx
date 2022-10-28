import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { detailsId } from '../../redux/actions/recipe_actions';
import CardSteps from './Steps_details_Recipe';
import { Markup } from 'interweave';
import {
  detailFather,
  childTitle,
  childDish,
  childDishAddImg,
  childImg,
  childHealthy,
  fatherTitle,
  fatherFilter,
  titileNoFound,
  titileStepe,
} from '../style/Detail/detail_recipe.module.css';

import { fatherStep } from '../style/Detail/detail_step.module.css';
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

    const messagewithoutStep = (
      <h3 className={titileNoFound}>This recipe does not have step by step</h3>
    );
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
      <>
        <div className={fatherFilter}>
          <div className={detailFather}>
            <div className={fatherTitle}>
              <h2 className={childTitle}>{name}</h2>
            </div>
            <div className={childDishAddImg}>
              <img className={childImg} src={image} alt={name} />
              <p className={childDish}>
                <Markup content={dish_summary} />;
              </p>
            </div>
            <h3 className={childHealthy}>
              Healthy {'>>>'} {healthy_food_score} {'<<<'} Healthy
            </h3>
            <h3 className={titileStepe}>
              here it will be explained how to make the recipe
            </h3>
            <div className={fatherStep}>{renderStesp}</div>
          </div>
        </div>
      </>
    );

    return myDetailsId;
    //   return StepsDetails;
  }
  return <p>Loading........</p>;
}
