export const LOGIN = 'LOGIN';
export const WALLET = 'WALLET';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const login = (email) => ({
  type: LOGIN,
  email,
});

export const wallet = (currencies) => ({
  type: WALLET,
  currencies,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const fetchApi = (payload) => async (dispatch) => {
  const fetchCurrencies = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await fetchCurrencies.json();
  delete response.USDT;
  payload.exchangeRates = response;
  dispatch(addExpense(payload));
};
