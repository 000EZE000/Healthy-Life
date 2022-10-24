import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dietRecipeRelations } from '../../redux/actions/diet_actions';
function RelationsDiet() {
  const dispatch = useDispatch();
  const mySubscription = useSelector((e) => e.dietReduce.relationsDietRecipe);

  useEffect(() => {
    //
    dispatch(dietRecipeRelations(1));
  }, [dispatch]);

  console.log(mySubscription);
}

export default RelationsDiet;
