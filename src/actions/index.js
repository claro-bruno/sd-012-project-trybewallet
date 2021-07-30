export const ADD_EMAIL = 'ADD_EMAIL';
export const GET_CURRENCY = 'GET_CURRENCY';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';

export default function userEmail(state) {
  return {
    type: ADD_EMAIL,
    email: state,
  };
}

const getCurrencies = () => ({
  type: GET_CURRENCY,
});

const getCurrenciesSuccess = (payload) => ({
  type: GET_CURRENCY_SUCCESS,
  payload,
});

const api = () => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((result) => result.json())
);

export const fetchData = () => async (dispatch) => {
  dispatch(getCurrencies());
  return api().then((result) => dispatch(getCurrenciesSuccess(result)));
};

export const saveExpenses = (expense) => ({
  type: SAVE_EXPENSES,
  payload: expense,
});

export const addExpense = (payload) => async (dispatch) => api()
  .then((result) => {
    dispatch(saveExpenses({ ...payload, exchangeRates: result }));
  });
