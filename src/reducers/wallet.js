import {
  GET_CURRENCIES, GET_CURRENCIES_SUCCESS, GET_CURRENCIES_ERROR,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
} from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: {},
  expenses: [],
  error: null,
  isLoading: false,
  exchangeRates: {},
  totalExpended: 0,
  nextId: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, isLoading: true };
  case GET_CURRENCIES_SUCCESS: {
    const { USDT, ...validCur } = action.payload;
    return {
      ...state, isLoading: false, currencies: validCur, exchangeRates: action.payload }; }
  case GET_CURRENCIES_ERROR:
    return { ...state, isLoading: false, error: action.error };
  case ADD_EXPENSE: {
    const { expenses, exchangeRates, nextId } = state;
    const newExpense = { ...action.expense, id: nextId, exchangeRates };
    const newExpensesList = [...expenses, newExpense];
    return { ...state,
      expenses: newExpensesList,
      nextId: nextId + 1,
      totalExpended: newExpensesList.map((exp) => Math.round(exp.value
        * exp.exchangeRates[exp.currency].ask * 100) / 100)
        .reduce((a, b) => (parseFloat(a) + parseFloat(b)), 0) }; }
  case DELETE_EXPENSE: {
    const newExpensesList = state.expenses.filter((exp) => exp.id !== action.expenseId);
    return {
      ...state,
      expenses: newExpensesList,
      totalExpended: newExpensesList.map((exp) => Math.round(exp.value
        * exp.exchangeRates[exp.currency].ask * 100) / 100)
        .reduce((a, b) => (parseFloat(a) + parseFloat(b)), 0) }; }
  case EDIT_EXPENSE: {
    const { payload } = action;
    const { expenses } = state;
    const expenseIndex = expenses.findIndex((exp) => exp.id === payload.id);
    const { exchangeRates } = expenses[expenseIndex];
    const newExpensesList = [...expenses];
    newExpensesList[expenseIndex] = { ...payload, exchangeRates };
    return ({ ...state,
      expenses: newExpensesList,
      totalExpended: newExpensesList.map((exp) => Math.round(exp.value
        * exp.exchangeRates[exp.currency].ask * 100) / 100)
        .reduce((a, b) => (parseFloat(a) + parseFloat(b)), 0) }); }
  default:
    return state;
  }
};

export default wallet;
