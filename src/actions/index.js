export const userLogin = (email) => ({
  type: 'USER_LOGIN',
  payload: email,
});

export const newCurrencies = (currencies) => ({
  type: 'NEW_CURRENCIES',
  payload: currencies,
});

export const newExpenses = (expenses) => ({
  type: 'NEW_EXPENSES',
  payload: expenses,
});

export const fetchCurrency = (state) => (dispatch) => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((response) => dispatch(newExpenses({ ...state, exchangeRates: response })))
);
