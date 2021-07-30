import { ADD_EMAIL_TO_STORE,
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
  ADD_EXPENSE_TO_STORE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
}
  from './actionTypes';

export const addEmail = (payload) => ({ type: ADD_EMAIL_TO_STORE, payload });

export const addExpense = (payload) => ({ type: ADD_EXPENSE_TO_STORE, payload });

export const deleteExpense = (payload) => ({ type: REMOVE_EXPENSE, payload });

export const changeExpense = (payload) => ({ type: EDIT_EXPENSE, payload });

export const getCurrencies = () => ({ type: GET_CURRENCIES });

export const getCurrenciesSuccess = (payload1, payload2) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload1,
  payload2,
});

export const getCurrenciesError = (err) => ({ type: GET_CURRENCIES_ERROR, err });

export const fetchAPI = () => (dispatch) => {
  dispatch(getCurrencies());
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  fetch(endpoint)
    .then((data) => data.json())
    .then((currencies) => {
      delete currencies.USDT;
      const currenciesList = Object.keys(currencies);
      delete currenciesList[0];
      dispatch(getCurrenciesSuccess(currencies, currenciesList));
    })
    .catch((err) => dispatch(getCurrenciesError(err)));
};
