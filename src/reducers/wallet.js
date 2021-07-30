const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
  error: false,
};

const prepareCurrencies = (payload) => {
  const currencies = [];
  const keys = Object.keys(payload).filter((key) => key !== 'USDT');
  keys.forEach((key) => {
    currencies.push(payload[key]);
  });
  return currencies;
};

const prepareExpenses = (expenses, payload) => {
  const idNumber = expenses.length;
  const newExpense = { ...payload, id: idNumber };
  return [...expenses, newExpense];
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'REQUEST_CURRENCIES':
    return { ...state, loading: true };
  case 'GET_CURRENCIES':
    return { ...state, currencies: prepareCurrencies(action.payload), loading: false };
  case 'FAILED_REQUEST':
    return { ...state, error: true };
  case 'ADICIONAR_DESPESA':
    return { ...state, expenses: prepareExpenses(state.expenses, action.payload) };
  default:
    return state;
  }
};

export default wallet;
