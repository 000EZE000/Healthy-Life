import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createDiet } from '../../redux/actions/diet_actions';
import FormDiet from './mini_components_Diets/form_Diet';
import Success from './mini_components_Diets/message_success';
export default function CreateDiet() {
  const [mySwitch, setMySwitch] = useState(true);
  const [form, setForm] = useState({
    name: '',
    info: '',
    image: '',
  });
  const dispatch = useDispatch();
  useEffect(() => {
    setForm({
      name: '',
      info: '',
      image: '',
    });
  }, [mySwitch]);
  const buttonBackToCrate = (
    <button>
      <Link to="/create">Back</Link>
    </button>
  );

  const CreateDiet = (
    <div>
      {buttonBackToCrate}
      <h3>Create your own Diet</h3>
      <FormDiet
        setForm={setForm}
        form={form}
        dispatch={dispatch}
        createDiet={createDiet}
        setMySwitch={setMySwitch}
      />
    </div>
  );

  const decision = mySwitch ? (
    CreateDiet
  ) : (
    <Success setMySwitch={setMySwitch} setForm={setForm} />
  );
  return decision;
}
