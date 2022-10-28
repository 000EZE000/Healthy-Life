import { useRef } from 'react';
import { useState } from 'react';
import {
  generadorInput,
  generatorStep,
  setInf,
} from './function_Hard/function_Recipe_Step';
import {
  containerBottonLessAndAdd,
  containerStep,
  labelInput,
  containerInputRecipe,
  bottonLessStep,
  bottonAddStep,
  containerBackgroundBot,
} from '../../style/create_Inicio/create_Recipe/input_step.module.css';
export default function InputStep({ setForm, form, refStep }) {
  const inputRef = useRef([]);
  let [numStep, setNumStep] = useState(1);

  const bottonAddAndLess = [];
  const handleCluterStepsNumber = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    refStep.current[name]['step'] = value;
    setInf(setForm, refStep.current, form);
  };

  const handleCluterIngreNumber = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const splitValue = value.split(' ');
    refStep.current[name]['ingredients'] = splitValue;
    setInf(setForm, refStep.current, form);
  };

  const handleCluterEquiNumber = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const splitValue = value.split(' ');
    refStep.current[name]['equipment'] = splitValue;
    setInf(setForm, refStep.current, form);
  };

  const handleOnclickNumPLus = () => {
    if (numStep === 10) return;
    inputRef.current.push(
      generadorInput(
        inputRef.current.length,
        handleCluterStepsNumber,
        handleCluterIngreNumber,
        handleCluterEquiNumber
      )
    );
    refStep.current.push(generatorStep(numStep));

    setNumStep(numStep + 1);
  };
  const handleOnclickNumLess = async () => {
    if (numStep === 1) {
      await setForm({
        ...form,
        step_by_step: [],
      });
      inputRef.current.pop();
      refStep.current.pop();
      setNumStep(--numStep);
      return null;
    }
    inputRef.current.pop();
    refStep.current.pop();
    setNumStep(--numStep);
  };

  bottonAddAndLess.push(
    <div key={56} className={containerBackgroundBot}>
      <div className={containerBottonLessAndAdd} key={numStep}>
        <input
          className={bottonAddStep}
          key={2}
          type="button"
          onClick={handleOnclickNumPLus}
          value="+"
        />
        <input
          className={bottonLessStep}
          key={3}
          type="button"
          onClick={handleOnclickNumLess}
          value="--"
        />
      </div>
    </div>
  );

  const parckInput = (
    <div className={containerInputRecipe}>
      <label className={labelInput}>Steps</label>
      <div className={containerStep}>{inputRef.current}</div>
      {bottonAddAndLess}
    </div>
  );

  return parckInput;
}
