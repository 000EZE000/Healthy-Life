import { RUN_DATABASE } from '../actions/run_database_action';

const initialState = {
  OK: [],
};

const rootReducerRun = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RUN_DATABASE:
      return { ...state, OK: payload };
    default:
      return { ...state };
  }
};

export default rootReducerRun;
