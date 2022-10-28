export default function alphaOrder(array) {
  const arrayOb = [...array];
  const myAbc = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'ñ',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  const myArrayAlpha = [];

  myAbc.forEach((element) => {
    arrayOb.forEach((e, index) => {
      let { name } = e;
      name = name.toLowerCase();
      if (element === name[0]) {
        myArrayAlpha.push(e);
        arrayOb.slice(index, 1);
      }
    });
  });
  myArrayAlpha.concat(arrayOb);

  return myArrayAlpha;
}
