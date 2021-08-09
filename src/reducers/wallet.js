import {
  CHANGE_WALLET_INFORMATION,
  GET_CURRENCIES,
  GET_EXCHANGE_RATES,
  SET_EXPENSE,
  REMOVE_EXPENSE,
  REQUEST_CURRENCIES,
  FAILED_REQUEST,
} from '../actions/ActionTypes';

const INITIAL_STATE = {
  totalValue: 0,
  currencies: [],
  exchange: {},
  expenses: [],
  isFetching: false,
  error: '',
};

const generateID = (expenses, action) => {
  let id = 0;
  if (expenses.length > 0) id = expenses.length;
  return { id, ...action.expense };
};

const format = (rawCurrencies) => {
  const formatedCurrencies = Object.values(rawCurrencies)
    .filter(((currencie) => currencie.codein !== 'BRLT'))
    .map((formated) => {
      const currenciesObject = {
        [formated.code]: { ...formated, name: formated.name.split('/')[0] },
      };
      return currenciesObject;
    }).reduce((prev, next) => Object.assign(prev, next), {});
  return formatedCurrencies;
};

const extract = (rawCurrencies) => {
  const extractedCurrencies = Object.values(rawCurrencies)
    .filter(((currencie) => currencie.codein !== 'BRLT'))
    .map((currencie) => currencie.code);
  return extractedCurrencies;
};

const removeExpense = (expenses, id) => {
  const updateExpenses = expenses.filter((expense) => expense.id !== id);
  return updateExpenses;
};

const updateTotal = (expenses) => {
  const updatedValue = expenses.reduce((previousValue, nextValue) => {
    const { exchangeRates: { [nextValue.currency]: { ask } } } = nextValue;
    const result = parseFloat(previousValue) + parseFloat(nextValue.value * ask);
    return result;
  }, 0);
  return updatedValue;
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_WALLET_INFORMATION:
    return { ...state, ...action.info };
  case GET_EXCHANGE_RATES:
    return { ...state, exchange: format(action.exchange), isFetching: false };
  case SET_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, generateID(state.expenses, action)],
      totalValue: updateTotal([...state.expenses, generateID(state.expenses, action)]),
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: removeExpense(state.expenses, parseInt(action.id, 10)),
      totalValue: updateTotal(removeExpense(state.expenses, parseInt(action.id, 10))),
    };
  case REQUEST_CURRENCIES:
    return { ...state, isFetching: true };
  case GET_CURRENCIES:
    return { ...state, currencies: extract(action.currencies), isFetching: false };
  case FAILED_REQUEST:
    return { ...state, error: action.error, isFetching: false };
  default:
    return state;
  }
};

export default wallet;
