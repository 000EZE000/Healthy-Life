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
        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/310241117_605327081345712_5296182171041140039_n.png?stp=dst-png_p206x206&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=2JpZ0p1UR3gAX-SZWFu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQ-3CZGSTUT9Za56HZ8mIJ8SgN-QoNF3HFqDPAw9ZB5GQ&oe=637BCA42"
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
