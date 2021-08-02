import fetchAPI from '../services/currencyAPI';

export const USER_LOGIN = 'USER_LOGIN';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const REQUEST_CURRENCIES_SUCCESS = 'REQUEST_CURRENCIES_SUCCESS';
export const REQUEST_CURRENCIES_ERROR = 'REQUEST_CURRENCIES_ERROR';

export const actionUserLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

const requestCurrencies = () => ({ type: REQUEST_CURRENCIES });
const requestCurrenciesSuccess = (payload) => ({
  type: REQUEST_CURRENCIES_SUCCESS,
  payload,
});
const requestCurrenciesError = (payload) => ({
  type: REQUEST_CURRENCIES_ERROR,
  payload,
});

export const actionFetchCurrencies = () => async (dispatch) => {
  dispatch(requestCurrencies());

  try {
    const response = await fetchAPI();
    dispatch(requestCurrenciesSuccess(response));
  } catch (error) {
    dispatch(requestCurrenciesError(error));
  }
};
