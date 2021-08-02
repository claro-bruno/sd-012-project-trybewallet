import * as actionTypes from './actionTypes';

export const getUserEmail = (email) => ({ type: actionTypes.GET_USER_EMAIL, email });

export const getFetch = (onLoading) => ({
  type: actionTypes.GET_FETCH,
  onLoading,
});

export const getError = (error, onLoading) => ({
  type: actionTypes.GET_ERROR,
  error,
  onLoading,
});

export const getCurrenciesSucess = (currencies) => ({
  type: actionTypes.GET_CURRENCIES_SUCESS,
  currencies,
});

export const getRatesSucess = (expense) => ({
  type: actionTypes.GET_RATES_SUCESS,
  expense,
});

export const removeItem = (id) => ({
  type: actionTypes.REMOVE_ITEM,
  id,
});

export const editItem = (editedItem) => ({
  type: actionTypes.EDIT_ITEM,
  editedItem,
});

const handleErrors = (response) => {
  if (!response.ok) throw Error(`${response.status} ${response.statusText}`);
  return response.json();
};

export const fetchCurrencies = () => async (dispatch) => {
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  const forbidenCurrencies = ['USDT'];
  dispatch(getFetch('onLoadingCurrencies'));
  fetch(endpoint)
    .then((response) => handleErrors(response))
    .then((results) => {
      const currencies = [...Object.keys(results)
        .filter((cur) => !forbidenCurrencies.includes(cur))];
      dispatch(getCurrenciesSucess(currencies));
    }).catch((err) => dispatch(getError(err, 'onLoadingCurrencies')));
};

export const fetchRates = (expense) => async (dispatch) => {
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  dispatch(getFetch('onLoadingRates'));
  fetch(endpoint)
    .then((response) => handleErrors(response))
    .then((exchangeRates) => dispatch(getRatesSucess({ ...expense, exchangeRates })))
    .catch((err) => dispatch(getError(err, 'onLoadingRates')));
};
