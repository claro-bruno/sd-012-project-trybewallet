import {
  GET_CURRENCIES, GET_CURRENCIES_SUCCESS, GET_CURRENCIES_ERROR,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SUM_EXPENSES,
} from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: {},
  expenses: [],
  error: null,
  isLoading: false,
  exchangeRates: {},
  totalExpended: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUM_EXPENSES: {
    return {
      ...state,
      totalExpended:
        state.expenses.map(
          (expense) => Math.round(expense.value
          * expense.exchangeRates[expense.currency].ask * 100) / 100,
        )
          .reduce((a, b) => (parseFloat(a) + parseFloat(b)), 0),
    };
  }
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
  case DELETE_EXPENSE: {
    const { expenses } = state;
    return {
      ...state,
      expenses: expenses.filter((expense) => expense.id !== action.expenseId),
    };
  }
  default:
    return state;
  }
};

export default wallet;
