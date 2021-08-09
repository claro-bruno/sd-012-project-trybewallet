// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import {
  FETCH_CURRENCIES,
  FETCH_CURRENCIES_SUCCESS,
  STATE_XCHANGERATE_SUCCESS,
  STATE_XCHANGERATE_ERROR,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_CURRENCIES:
    return state;
  case FETCH_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: Object
        .keys(action.payload)
        .filter((currency) => currency !== 'USDT'),
    };

  case STATE_XCHANGERATE_SUCCESS:
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }],

    };
  case STATE_XCHANGERATE_ERROR:
    return { ...state, expenses: action.payload };
  default:
    return state;
  }
}

export default wallet;
