import {
  GET_CURRENCIES, GET_CURRENCIES_SUCCESS, GET_CURRENCIES_ERROR,
  ADD_EXPENSE,
} from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: {},
  expenses: [],
  error: null,
  isLoading: false,
  exchangeRates: {},
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, isLoading: true };
  case GET_CURRENCIES_SUCCESS: {
    const { USDT, ...validCurrencies } = action.payload;
    return { ...state,
      isLoading: false,
      currencies: validCurrencies,
      exchangeRates: action.payload,
    };
  }
  case GET_CURRENCIES_ERROR:
    return { ...state, isLoading: false, error: action.error };
  case ADD_EXPENSE: {
    const { expenses, exchangeRates } = state;
    const { expense } = action;
    const newExpense = { ...expense, id: expenses.length, exchangeRates };
    return { ...state, expenses: [...expenses, newExpense] };
  }
  default:
    return state;
  }
};

export default wallet;
