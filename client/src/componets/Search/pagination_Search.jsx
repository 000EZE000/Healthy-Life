import { useEffect } from 'react';
import CardSearch from './Card_search';
import {
  nextP,
  lessP,
  contentInputPa,
  statusP,
  contentInputPaBotton,
} from '../style/Search/button_page_Search.module.css';

import {
  titlePageSt,
  fatherTitle,
  contentFather,
  filBackground,
} from '../style/Search/card_Page_num_page.module.css';

export default function PaginationSearch({
  content,
  setPage,
  pageLocation,
  setPageLocation,
  page,
}) {
  const N = Number;
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

  useEffect(() => {
    setPage(arrayPage);
  }, [pageLocation, content, setPage]);

  if (!arrayPage[0]) return null;
  const handleOnclickMovePage = (event) => {
    const N = Number;
    console.log(event);
    const name = event.target.name;
    if (name === 'less') {
      if (N(pageLocation) === 0) return;
      return setPageLocation(N(pageLocation) - 1);
    }
    if (name === 'plus') {
      if (N(pageLocation) === N(numPage - 1) || pageLocation > numPage) return;
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
  for (let i = 0; i < arrayPage.length; i++) {
    const lengthPage = N(arrayPage.length);
    if (i === 0) continue;
    if (i === lengthPage - 2) i++;
    if (i % 2 === 1) continue;
    buttonsPagesL.push(
      <button value={i} className={statusP} key={i} onClick={handleNumLocal}>
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
    <>
      <div>
        <div className={contentInputPa}>
          {bottonPrevious}
          {buttonsPagesL}
          {bottonNetx}
        </div>
        <div className={fatherTitle}>{titlePage}</div>
        <div className={filBackground}>
          <div className={contentFather}>
            <CardSearch location={page[pageLocation]} />
            <div className={contentInputPaBotton}>
              {bottonPrevious}
              {buttonsPagesL}
              {bottonNetx}
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return renderPageButton;
}
