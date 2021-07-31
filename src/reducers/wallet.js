import {
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
  ADD_EXPENSE,
  SUM_EXPENSES,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  idCounter: 0,
  totalExpense: 0,
  currencies: [],
  expenses: [],
  error: '',
  isFetching: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  const codes = (action.currencies)
    ? Object.keys(action.currencies).filter((code) => code !== 'USDT')
    : [];
  // const id = (state.idCounter) ? state.idCounter + 1 : 0;
  const totalExpense = state.expenses
    .reduce((acc, { value, currency, exchangeRates }) => {
      const { ask } = exchangeRates[currency];
      return acc + (value * ask);
    }, 0);
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      isFetching: true,
    };
  case GET_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: [...codes],
      isFetching: false,
    };
  case GET_CURRENCIES_ERROR:
    return {
      ...state,
      error: action.error,
      isFetching: false,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          id: state.idCounter,
          ...action.payload.expense,
          exchangeRates: action.payload.currencies,
        },
      ],
      idCounter: state.idCounter + 1,
    };
  case SUM_EXPENSES:
    return {
      ...state,
      totalExpense,
    };
  default:
    return state;
  }
};

export default wallet;
