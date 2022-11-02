import { useEffect } from 'react';
import CardRecipe from './order/card_recipe/card_recipe.jsx';
import {
  nextP,
  lessP,
  statusP,
  contentInputPa,
  contentInputPaBotton,
} from '../style/Recipe_list/page_Recipe_num.module.css';
import {
  fatherTitle,
  titlePageSt,
  contentFather,
  filBackground,
} from '../style/Recipe_list/name_number_page.module.css';

export default function PaginationRecipe({
  content,
  setPage,
  pageLocation,
  setPageLocation,
  page,
}) {
  let arrayPage = [];
  const N = Number;
  useEffect(() => {
    setPage(arrayPage);
  }, [content, pageLocation, setPage]);

  if (!Array.isArray(content)) return null;
  const numRequired = 9;
  const copyOfContent = [...content];
  const numPage = Math.ceil(copyOfContent.length / 9);
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
    <button className={nextP} name="plus" onClick={handleOnclickMovePage}>
      {' >>'}
    </button>
  );
  const bottonPrevious = (
    <button className={lessP} name="less" onClick={handleOnclickMovePage}>
      {' <<'}
    </button>
  );
  const handleNumLocal = (event) => {
    const value = event.target.value;
    setPageLocation(value);
  };

  const buttonsPagesL = [];

  for (let i = 1; i < arrayPage.length; i++) {
    buttonsPagesL.push(
      <button
        className={statusP}
        value={i - 1}
        key={i}
        onClick={handleNumLocal}
      >
        {i}
      </button>
    );
  }

  const titlePage = (
    <p className={titlePageSt}>
      Page N: {N(pageLocation) + 1} - {arrayPage.length}
    </p>
  );

  const renderPageButton = (
    <div>
      <div className={contentInputPa}>
        {bottonPrevious}
        {buttonsPagesL}
        {bottonNetx}
      </div>
      <div className={fatherTitle}>{titlePage}</div>
      <div className={filBackground}>
        <div className={contentFather}>
          <CardRecipe location={page[pageLocation]} />
          <div className={contentInputPaBotton}>
            {bottonPrevious}
            {buttonsPagesL}
            {bottonNetx}
          </div>
        </div>
      </div>
    </div>
  );

  return renderPageButton;
}
