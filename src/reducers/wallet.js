import { API_FETCH, API_FETCH_SUCCESS } from '../actions';
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
};

const wallet = (state = INITIAL_WALLET_STATE, action) => {
  switch (action.type) {
  case API_FETCH:
    return ({
      ...state,
      loading: true,
    });
  case API_FETCH_SUCCESS:
    return ({
      ...state,
      loading: false,
      currencies: action.currencies,
    });
  default:
    return state;
  }
};

export default wallet;
