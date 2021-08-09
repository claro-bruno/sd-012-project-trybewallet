import { GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_FAIL,
  ADD_EXPENSE } from '../actions';

const ESTADO_INICIAL = {
  currencies: [],
  expenses: [],
  loading: false,
  error: false,
};

const prepareExpenses = (expenses, payload, exchangeRates) => {
  const idNumber = expenses.length;
  const newExpense = { id: idNumber, ...payload, exchangeRates };
  return [...expenses, newExpense];
};

const wallet = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, loading: true };
  case GET_CURRENCIES_SUCCESS:
    return { ...state, currencies: action.currencies, loading: false };
  case GET_CURRENCIES_FAIL:
    return { ...state, loading: false, err: true };
  case ADD_EXPENSE:
    return { ...state,
      expenses: prepareExpenses(state.expenses,
        action.payload,
        action.newFetch),
    };

  default:
    return state;
  }
};

export default wallet;
