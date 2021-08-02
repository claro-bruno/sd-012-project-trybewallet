import * as actionTypes from '../redux/actions/actionTypes';

const INTIIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
  onLoadingCurrencies: false,
  onLoadingRates: false,
};

const wallet = (state = INTIIAL_STATE, action) => {
  switch (action.type) {
  case actionTypes.GET_CURRENCIES:
    return { ...state, onLoadingCurrencies: true };
  case actionTypes.GET_CURRENCIES_SUCESS:
    return { ...state, currencies: [...action.currencies], onLoadingCurrencies: false };
  case actionTypes.GET_CURRENCIES_ERROR:
    return { ...state, error: String(action.error), onLoadingCurrencies: false };
  case actionTypes.GET_RATES:
    return { ...state, onLoadingRates: true };
  case actionTypes.GET_RATES_SUCESS:
    return {
      ...state, expenses: [...state.expenses, action.expense], onLoadingRates: false };
  case actionTypes.GET_RATES_ERROR:
    return { ...state, error: String(action.error), onLoadingRates: false };

  default:
    return state;
  }
};

export default wallet;
