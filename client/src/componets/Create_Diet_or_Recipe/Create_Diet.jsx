import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createDiet } from '../../redux/actions/diet_actions';
import FormDiet from './mini_components_Diets/form_Diet';
import Success from './mini_components_Diets/message_success';
import {
  containerAddBack,
  linkBack,
  textCreateDiet,
  containerFatherDiet,
} from '../style/create_Inicio/create_diet/create_diet.module.css';
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

  const CreateDiet = (
    <div className={containerFatherDiet}>
      <div>
        <div className={containerAddBack}>
          <Link className={linkBack} to="/create">
            ⋘Back
          </Link>
          <h3 className={textCreateDiet}>Create your own Diet</h3>
        </div>
      </div>
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
