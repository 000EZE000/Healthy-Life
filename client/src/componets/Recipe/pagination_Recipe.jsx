import { useEffect } from 'react';
import CardRecipe from './order/card_recipe/card_recipe.jsx';
export default function PaginationRecipe({
  content,
  setPage,
  order,
  pageLocation,
  setPageLocation,
  page,
}) {
  useEffect(() => {
    setPage(arrayPage);
  }, [order, pageLocation, content, setPage]);

  if (!Array.isArray(content)) return null;
  const numRequired = 9;
  const copyOfContent = [...content];
  const numPage = Math.ceil(copyOfContent.length / 9);
  const arrayPage = [];
  for (let i = 0; i < numPage; i++) {
    arrayPage.push([]);
  }

  arrayPage.forEach((e) => {
    for (let i = 0; i < numRequired; i++) {
      if (!copyOfContent[0]) continue;
      e.push(copyOfContent[0]);
      copyOfContent.shift();
    }
  });

  if (!arrayPage[0]) return <p>Loading...............</p>;
  const handleOnclickMovePage = (event) => {
    const N = Number;
    const name = event.target.name;
    if (name === 'less') {
      if (N(pageLocation) === 0) return;
      return setPageLocation(N(pageLocation) - 1);
    }
    if (name === 'plus') {
      if (N(pageLocation) === N(numPage - 1)) return;
      return setPageLocation(N(pageLocation) + 1);
    }
  };

  const bottonNetx = (
    <button name="plus" onClick={handleOnclickMovePage}>
      Next
    </button>
  );
  const bottonPrevious = (
    <button name="less" onClick={handleOnclickMovePage}>
      Previous
    </button>
  );

  const handleNumLocal = (event) => {
    const value = event.target.value;
    setPageLocation(value);
  };

  const buttonsPagesL = [];
  let count = 10;
  for (let i = 0; i < arrayPage.length; i++) {
    if (i === arrayPage.length - 1) count = i;
    if (i !== count) continue;

    count = count + 10;
    buttonsPagesL.push(
      <button value={i} key={i} onClick={handleNumLocal}>{`page ${i}`}</button>
    );
  }

  const renderPageButton = (
    <div>
      <div>
        {bottonPrevious}
        {buttonsPagesL}
        {bottonNetx}
      </div>
      <CardRecipe location={page[pageLocation]} />
    </div>
  );

  return renderPageButton;
}
