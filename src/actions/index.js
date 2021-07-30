export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const LOADING = 'LOADING';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const FORM_CHANGE = 'FORM_CHANGE';

const URL = 'https://economia.awesomeapi.com.br/json/all';

export const actionOnChange = (name, value) => ({
  type: LOGIN,
  name,
  value,
});

const actionGetCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

const actionLoading = () => ({
  type: LOADING,
});

const actionAddExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(actionLoading());
    return fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const currencies = Object.keys(data).filter((currency) => currency !== 'USDT');
        console.log(data);
        dispatch(actionGetCurrencies(currencies));
      })
      .catch((error) => console.log(error));
  };
}

export function fetchCambioRate(object) {
  return (dispatch) => {
    dispatch(actionLoading());
    return fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const newObject = { ...object, exchangeRates: data };
        dispatch(actionAddExpense(newObject));
      })
      .catch((error) => console.log(error));
  };
}
