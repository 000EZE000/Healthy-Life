import { useEffect } from 'react';
import CardSearch from './Card_search';
import Home from '../Home/Home';
export default function PaginationSearch({
  content,
  setPage,
  pageLocation,
  setPageLocation,
  page,
}) {
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
      {' >>'}
    </button>
  );
  const bottonPrevious = (
    <button name="less" onClick={handleOnclickMovePage}>
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
      <button value={i} key={i} onClick={handleNumLocal}>{`Page ${i}`}</button>
    );
  }

  const renderPageButton = (
    <div>
      <div>
        {bottonPrevious}
        {buttonsPagesL}
        {bottonNetx}
      </div>
      <CardSearch location={page[pageLocation]} />
    </div>
  );

  return renderPageButton;
}
