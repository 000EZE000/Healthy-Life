import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchName } from '../../redux/actions/recipe_actions';
import PaginationSearch from './pagination_Search';
import Home from '../Home/Home';
export default function Search() {
  const [page, setPage] = useState([]);
  const [pageLocation, setPageLocation] = useState(0);
  const dispatch = useDispatch();
  const mySearch = useSelector((e) => e.recipesReduce.recipeName.data);

  useEffect(() => {
    return () => {
      return dispatch(searchName(null));
    };
  }, [dispatch]);

  const handleOnChange = (event) => {
    const myResul = event.target.value;
    if (myResul.length < 2) {
      // mySearch = undefined;
      return dispatch(searchName(null));
    }
    dispatch(searchName(myResul));
  };

  let mySearchPage = mySearch ? (
    <PaginationSearch
      page={page}
      setPage={setPage}
      pageLocation={pageLocation}
      setPageLocation={setPageLocation}
      content={mySearch}
    />
  ) : (
    <Home />
  );

  if (Array.isArray(mySearch) && !mySearch[0]) mySearchPage = <Home />;
  console.log(mySearch);
  const inputSearch = (
    <div>
      <label htmlFor="search">My Search</label>
      <input
        type="text"
        name="search"
        placeholder="valor"
        onChange={handleOnChange}
      />
    </div>
  );

  const packSearch = (
    <>
      {inputSearch}
      {mySearchPage}
    </>
  );
  return packSearch;
}
