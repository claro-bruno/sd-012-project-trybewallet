/**
 * Consultei o repositório do Henrique Brito Elias para resolver essa parte.
 * Link: https://github.com/tryber/sd-09-project-trybewallet/pull/3/commits/702598b7aa02d12398b116c94eb325d340100b39
 */
import {
  CURRENCY_REQUEST,
  CURRENCY_REQUEST_SUCCESS,
  CURRENCY_REQUEST_FAILURE,
  EXCHANGE_RATE_REQUEST,
} from './actionTypes';

const currencyRequest = () => ({
  type: CURRENCY_REQUEST,
});

const currencyRequestSuccess = (data) => ({
  type: CURRENCY_REQUEST_SUCCESS,
  data,
});

const currencyRequestFailure = (error) => ({
  type: CURRENCY_REQUEST_FAILURE,
  error,
});

const exchangeRateRequest = (expenses, data) => ({
  type: EXCHANGE_RATE_REQUEST,
  expenses,
  data,
});

export const fetchCurrency = () => (
  async (dispatch) => {
    dispatch(currencyRequest());
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const responseObject = await response.json();
      dispatch(currencyRequestSuccess(responseObject));
    } catch (error) {
      dispatch(currencyRequestFailure(error));
    }
  }
);

export const fetchExchangeRate = (expenses) => (
  async (dispatch) => {
    dispatch(currencyRequest());
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const responseObject = await response.json();
      dispatch(exchangeRateRequest(expenses, responseObject));
    } catch (error) {
      dispatch(currencyRequestFailure(error));
    }
  }
);
