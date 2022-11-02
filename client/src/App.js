import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Header from './componets/Header/Header';
import Home from './componets/Home/Home';
import Search from './componets/Search/Search';
import Recipe from './componets/Recipe/Recipe_Container.jsx';
import Diet from './componets/Diet/diet_container';
import RecipeDetails from './componets/Detaile_Recipe/detait_Recipe';
import RelationsDiet from './componets/Relations_Diet_Recipes/Relation_Diet';
import { runDataBase } from './redux/actions/run_database_action';
import { allDiet } from './redux/actions/diet_actions';
import CreateDietOrRecipe from './componets/Create_Diet_or_Recipe/Create';
import styles from './App.module.css';
import CreateDiet from './componets/Create_Diet_or_Recipe/Create_Diet';
import CreateRecipe from './componets/Create_Diet_or_Recipe/Create_Recipe';
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(runDataBase());
    dispatch(allDiet());
  });

  const myApp = (
    <div className={styles.black}>
      <div></div>
      <Route path="/" component={Header} />
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/recipes" component={Recipe} />
      <Route exact path="/relationDiet" component={RelationsDiet} />
      <Route exact path="/diets" component={Diet} />
      <Route exact path="/create" component={CreateDietOrRecipe} />
      <Route exact path="/create/recipe" component={CreateRecipe} />
      <Route exact path="/create/diet" component={CreateDiet} />
      <Route exact path="/details/:id" component={RecipeDetails} />
    </div>
  );
  return myApp;
}
