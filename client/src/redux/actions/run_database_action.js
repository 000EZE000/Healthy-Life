import axios from 'axios';

export const RUN_DATABASE = 'RUN_DATABASE';

export const runDataBase = () => async (dispatch) => {
  const myRes = await axios({
    method: 'get',
    url: 'http://localhost:3003/',
  });

  return dispatch({ type: RUN_DATABASE, payload: myRes });
};
