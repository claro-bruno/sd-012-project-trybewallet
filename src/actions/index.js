export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const LOADING = 'LOADING';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_FORM = 'EDIT_FORM';

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

export const actionDeleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  id,
});

export const actionEditForm = (id) => ({
  type: EDIT_FORM,
  id,
})

export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(actionLoading());
    return fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const currencies = Object.keys(data).filter((currency) => currency !== 'USDT');
        dispatch(actionGetCurrencies(currencies));
      })
      .catch((error) => console.log(error));
  };
}

export function fetchCambioRate(object) {
  return (dispatch) => fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const newObject = { ...object, exchangeRates: data };
      dispatch(actionAddExpense(newObject));
    })
    .catch((error) => console.log(error));
}
