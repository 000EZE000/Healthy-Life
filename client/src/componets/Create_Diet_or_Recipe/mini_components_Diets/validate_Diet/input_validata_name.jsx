export default function ValidataName({ name }) {
  const lengthName = name.split(' ');

  const miExp = /[a-z]/;

  const messageNoString = `the first word could not be ${lengthName[0]}`;

  const messageUndef = 'the first word could not be empty';

  const messageError = lengthName[0] ? messageNoString : messageUndef;

  if (!miExp.test(lengthName[0])) return [false, <p>{messageError}</p>];

  if (lengthName.length > 3)
    return [false, <p>{'the name could not have three words'}</p>];

  return [true, <span>the name is ok</span>];
}
