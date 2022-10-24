import { useSelector } from 'react-redux';
import { useRef, useEffect, useState, useCallback } from 'react';
import {
  myFunctionAddSimbol,
  myFunctionPutOffSimbol,
} from './function_Hard/function_Recipe_diets';
export default function InputDiet({ setForm, form }) {
  const dataForInput = useSelector((store) =>
    store.dietReduce.diets?.map((diet) => diet.name)
  );
  const dataArr = new Set(dataForInput);
  let filterListDiet = [...dataArr];
  const myRefDiet = useRef(filterListDiet);
  const [myRender, setMyRendetr] = useState(null);

  const handleOnClickDiet = useCallback(
    (event) => {
      const valueDiet = event.target.value;
      if (valueDiet[0] === '✓') {
        const [valuePutOffSimbol, putOffSimbol] = myFunctionPutOffSimbol(
          valueDiet,
          myRefDiet.current
        );
        myRefDiet.current = putOffSimbol;
        const myNewListDiet = form.diets.filter((e) => e !== valuePutOffSimbol);
        setForm({
          ...form,
          diets: myNewListDiet,
        });
        return;
      }
      const arrayAddSimbol = myFunctionAddSimbol(valueDiet, myRefDiet.current);
      myRefDiet.current = arrayAddSimbol;

      setForm({
        ...form,
        diets: [...form.diets, valueDiet],
      });
    },
    [form, setForm]
  );

  const myInputSelec = useCallback(
    (array) => {
      return array.map((e, index) => {
        return (
          <div key={index}>
            <input
              key={index}
              type="button"
              name={e}
              value={e}
              onClick={handleOnClickDiet}
            />
          </div>
        );
      });
    },
    [handleOnClickDiet]
  );
  useEffect(() => {
    setMyRendetr(myInputSelec(myRefDiet.current));
  }, [form, myInputSelec]);
  return myRender;
}
