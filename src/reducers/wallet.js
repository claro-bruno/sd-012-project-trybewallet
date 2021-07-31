import { GET_API, GET_API_SUCESS, GET_API_ERROR } from '../actions/actionApi';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_API:
    return { ...state };
  case GET_API_SUCESS:
    return { ...state, currencies: action.currencies };
  case GET_API_ERROR:
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
};

export default wallet;
