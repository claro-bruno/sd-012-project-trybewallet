import { ADD_CURRENCIE, ADD_CURRENCIE_SUCCES, ADD_CURRENCIE_ERROR } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  error: null,
};
function filterCurrencies(allCurrencies) {
  const keys = Object.keys(allCurrencies);
  const filterK = keys.filter((key) => key !== 'USDT');
  return filterK;
}
function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_CURRENCIE:
    return { ...state, isFetching: true };

  case ADD_CURRENCIE_SUCCES: {
    console.log(filterCurrencies(action.payload));
    return { ...state, currencies: filterCurrencies(action.payload) };
  }
  case ADD_CURRENCIE_ERROR:
    return { ...state, error: action.error };

  default:
    return state;
  }
}
export default wallet;
