// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  CURRENCY_REQUEST,
  CURRENCY_REQUEST_SUCCESS,
  CURRENCY_REQUEST_FAILURE,
  EXCHANGE_RATE_REQUEST,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCY_REQUEST:
    return {
      ...state,
      isFetching: true,
    };
  case CURRENCY_REQUEST_SUCCESS:
    return {
      ...state,
      currencies: [...Object.keys(action.data).filter((currency) => currency !== 'USDT')],
      isFetching: false,
    };
  case CURRENCY_REQUEST_FAILURE:
    return {
      ...state,
      error: action.error,
      isFetching: false,
    };
  case EXCHANGE_RATE_REQUEST:
    return {
      ...state,
      expenses: [...state.expenses, {
        ...action.expenses,
        exchangeRates: { ...action.data },
      }],
    };
  default:
    return state;
  }
};

export default wallet;
