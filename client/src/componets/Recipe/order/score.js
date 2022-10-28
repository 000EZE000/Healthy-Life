export default function scoreOrder(array) {
  const arrayOb = [...array];
  const myArrayScore = [];
  for (let i = 100; i !== 0; i--) {
    arrayOb.forEach((e, index) => {
      let { healthy_food_score } = e;
      if (i === healthy_food_score) {
        myArrayScore.push(e);
        arrayOb.slice(index, 1);
      }
    });
  }

  return myArrayScore;
}
