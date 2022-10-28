import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { allDiet } from '../../redux/actions/diet_actions';
export default function TypeDietSear() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allDiet());
  }, [dispatch]);

  const dataForInput = useSelector((store) =>
    store.dietReduce.diets?.map((diet) => {
      return [diet.id, diet.name];
    })
  );
  const dataArr = new Set(dataForInput);
  let filterListDiet = [...dataArr];

  return filterListDiet;
}
