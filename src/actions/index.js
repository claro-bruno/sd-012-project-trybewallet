export const WRITE_EMAIL = 'WRITE_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_RATES = 'GET_RATES';
const REQUEST_RATES = 'REQUEST_RATES';

export const userLogIn = (payload) => ({ type: WRITE_EMAIL, payload });

export const getCurrencies = (payload) => ({ type: GET_CURRENCIES, payload });

const getRates = (state, json) => (
  { type: GET_RATES, payload: { ...state, exchangeRates: json } });

const requestRates = () => ({ type: REQUEST_RATES });

export function fetchRates(state) {
  return (dispatch) => {
    dispatch(requestRates());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((r) => r.json())
      .then((json) => dispatch(getRates(state, json)));
  };
}
