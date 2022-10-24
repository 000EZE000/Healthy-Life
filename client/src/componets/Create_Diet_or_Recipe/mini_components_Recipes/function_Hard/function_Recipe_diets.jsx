export const myFunctionPutOffSimbol = (string, array) => {
  let arrayString = string.split(' ');
  arrayString.shift();
  const newString = arrayString.join(' ');
  const newArray = array.map((e) => {
    if (e === string) return newString;
    return e;
  });
  return [newString, newArray];
};

export const myFunctionAddSimbol = (string, array) => {
  const addSimbol = `✓ ${string}`;
  const arrayAddSimbol = array.map((e) => {
    if (e === string) return addSimbol;
    return e;
  });
  return arrayAddSimbol;
};
