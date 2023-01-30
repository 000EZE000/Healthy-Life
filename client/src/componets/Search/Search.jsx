import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchName } from '../../redux/actions/recipe_actions';
import PaginationSearch from './pagination_Search';
import {
  inputSearhSt,
  contentSearhInput,
  imgSearch,
  aux,
} from '../style/Search/search.module.css';
import { allDiet } from '../../redux/actions/diet_actions.js';

export default function Search() {
  const [page, setPage] = useState([]);
  let [pageLocation, setPageLocation] = useState(0);
  const dispatch = useDispatch();
  const mySearch = useSelector((e) => e.recipesReduce.recipeName.data);

  useEffect(() => {
    dispatch(allDiet());
    return () => {
      return dispatch(searchName(null));
    };
  }, [dispatch]);

  const handleOnChange = (event) => {
    const myResul = event.target.value;
    if (myResul.length < 2) {
      // mySearch = undefined;
      dispatch(searchName(null));
      setPageLocation(0);
      return;
    }
    dispatch(searchName(myResul));
    setPageLocation(0);
    return;
  };

  let mySearchPage = mySearch ? (
    <PaginationSearch
      page={page}
      setPage={setPage}
      pageLocation={pageLocation}
      setPageLocation={setPageLocation}
      content={mySearch}
    />
  ) : null;

  const inputSearch = (
    <div className={contentSearhInput}>
      <input
        className={inputSearhSt}
        type="text"
        name="search"
        autoComplete="off"
        onChange={handleOnChange}
      />
      <img
        className={imgSearch}
        src="http://cdn.onlinewebfonts.com/svg/img_381798.png"
        alt="ico"
      />
    </div>
  );

  const packSearch = (
    <div>
      <div className={aux}>
        <div>{inputSearch}</div>
        <div> {mySearchPage} </div>
      </div>
    </div>
  );
  return packSearch;
}
