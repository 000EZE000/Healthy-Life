export default function ValidataImage({ image }) {
  const lengthImage = image.split(' ');
  const messageUndef = 'the URL could not be empty';

  if (!lengthImage[0]) return [false, messageUndef];

  const myExpRe = /^(\w{5})(:\/{2}).+\.+(png|jpg|jpeg|gif)$/gim;
  const urlExample = 'https://anything.png';
  const mesageErro = 'the url does not have the proper format a little help:';
  const messageHAH = <p> {`you can not put the example >: V hahaha`}</p>;
  if (image === 'https://anything.png') return [false, messageHAH];
  if (myExpRe.test(image)) return [true, <p>the Url es Ok </p>];

  return [false, <p>{`${mesageErro} ${urlExample}`}</p>];
}
