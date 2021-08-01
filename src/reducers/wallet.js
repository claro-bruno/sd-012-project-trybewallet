const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
  error: false,
  editing: 'none',
  test: 0,
};

const prepareCurrencies = (payload) => Object.keys(payload)
  .filter((key) => key !== 'USDT');

const prepareExpenses = (expenses, payload, exchangeRates) => {
  if (expenses.length === 0) {
    const idNumber = 0;
    const newExpense = { id: idNumber, ...payload, exchangeRates };
    return [...expenses, newExpense];
  }
  const idNumber = expenses[expenses.length - 1].id + 1;
  const newExpense = { id: idNumber, ...payload, exchangeRates };
  return [...expenses, newExpense];
};

const addEditedExpense = (expenses, payload, id) => {
  const newExpenses = expenses.map((expense) => {
    if (expense.id === id) {
      return { id, ...payload, exchangeRates: expense.exchangeRates };
    }
    return expense;
  });
  return newExpenses;
};

const editPlusDelete = (editing, id) => {
  if (editing === id) {
    return 'none';
  }
  return editing;
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'REQUEST_CURRENCIES':
    return { ...state, loading: true };
  case 'GET_CURRENCIES':
    return { ...state, currencies: prepareCurrencies(action.payload), loading: false };
  case 'FAILED_REQUEST':
    return { ...state, error: true };
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: prepareExpenses(state.expenses, action.payload, action.newFetch),
    };
  case 'DELETE_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
      editing: editPlusDelete(state.editing, action.id),
    };
  case 'TOGGLE_EDIT':
    return { ...state, editing: action.id };
  case 'EDIT_EXPENSE':
    return {
      ...state,
      expenses: addEditedExpense(state.expenses, action.payload, action.id),
      editing: 'none',
    };
  default:
    return state;
  }
};

export default wallet;
