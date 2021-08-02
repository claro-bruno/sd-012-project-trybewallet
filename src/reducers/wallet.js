import {
  ADD_EXPENSE,
  ADD_EXPENSE_SUCCESS,
  REQUEST_CURRENCIES,
  REQUEST_CURRENCIES_SUCCESS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return state;
  case REQUEST_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: Object
        .keys(action.payload)
        .filter((currency) => currency !== 'USDT'),
    };
  case ADD_EXPENSE:
    return state;
  case ADD_EXPENSE_SUCCESS:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          ...action.expenseInfo,
          id: action.expenseId,
          exchangeRates: action.apiData,
        },
      ],
    };
  default:
    return state;
  }
};

export default wallet;
