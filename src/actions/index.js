// Coloque aqui suas actions
export const SET_EMAIL = 'SET_EMAIL';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const RECIEVE_CURRENCY = 'RECIEVE_CURRENCY';

export const actionChangeEmail = (payload) => ({ type: SET_EMAIL, payload });

export const requestCurrencies = () => ({ type: REQUEST_CURRENCY });

export const recieveCurrencies = (currencies) => ({
  type: RECIEVE_CURRENCY,
  currencies,
});

export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((res) => res.json())
      .then((data) => dispatch(recieveCurrencies(data)));
  };
}
