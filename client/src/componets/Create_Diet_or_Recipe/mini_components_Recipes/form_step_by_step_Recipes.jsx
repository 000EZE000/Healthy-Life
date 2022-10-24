import { useRef } from 'react';
import { useState } from 'react';
import {
  generadorInput,
  generatorStep,
  setInf,
} from './function_Hard/function_Recipe_Step';
export default function InputStep({ setForm, form, refStep }) {
  const inputRef = useRef([]);
  let [numStep, setNumStep] = useState(1);

  const newArray = [];
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
  const handleOnclickNumLess = () => {
    if (numStep === 0) return;
    inputRef.current.pop();
    refStep.current.pop();
    setNumStep(--numStep);
  };
  newArray.push(
    <div key={numStep}>
      <input key={2} type="button" onClick={handleOnclickNumPLus} value="+" />
      <input key={3} type="button" onClick={handleOnclickNumLess} value="-" />
    </div>
  );

  const parckInput = (
    <div>
      <h3>Steps</h3>
      <div>{inputRef.current}</div>
      {newArray}
    </div>
  );

  return parckInput;
}
