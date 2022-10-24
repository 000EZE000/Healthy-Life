export default function ValidataInfo({ info }) {
  const lengthInf = info.split(' ');

  const messageUndef = 'the first word could not be empty';

  if (!lengthInf[0]) return [false, messageUndef];

  const minLength = lengthInf.length > 3;
  const maxLength = lengthInf.length < 31;
  const messageMinMaxErro = 'the information must be between 3 to 30 words';

  if (!minLength || !maxLength) return [false, messageMinMaxErro];

  return [true, <span>the information is ok</span>];
}
