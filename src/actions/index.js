import {
  GET_CURRENCIES, GET_CURRENCIES_SUCCESS, GET_CURRENCIES_ERROR,
} from './actionTypes';

export const USER_ACTION = 'USER_ACTION';

export const userAction = (payload, value) => ({ type: 'USER_ACTION', payload, value });

export const getCurrencies = () => ({ type: GET_CURRENCIES });

export const getCurrencySuccess = (currencies) => ({
  type: GET_CURRENCIES_SUCCESS, currencies,
});

export const getCurrencyError = (error) => ({
  type: GET_CURRENCIES_ERROR, error,
});

export const fetchCurrency = () => async (dispatch) => {
  dispatch(getCurrencies());
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const responseJson = await response.json();
    const currency = Object.keys(responseJson)
      .filter((curr) => curr !== 'USDT');
    dispatch(getCurrencySuccess(currency));
  } catch (error) {
    dispatch(getCurrencyError(error));
  }
};

// export const fetchCurrency = () => async (dispatch) => {
//   fetch('https://economia.awesomeapi.com.br/json/all')
//     .then((response) => response.json())
//     .then((data) => {
//       const currencies = Object.keys(data);
//       dispatch(getCurrencySuccess(currencies));
//     });
// };
