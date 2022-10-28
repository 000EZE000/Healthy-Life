import { useSelector } from 'react-redux';

export default function TypeDietSear() {
  const dataForInput = useSelector((store) =>
    store.dietReduce.diets?.map((diet) => {
      return [diet.id, diet.name];
    })
  );
  const dataArr = new Set(dataForInput);
  let filterListDiet = [...dataArr];

  return filterListDiet;
}
