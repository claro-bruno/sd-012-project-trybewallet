export const GET_CURRENCIES = 'GET_CURRENCIES ';
export const USER_EMAIL = 'USER_EMAIL';

export const actionUserEmail = (email) => ({ type: USER_EMAIL, email });

export const getCurrencies = (payload) => ({ type: GET_CURRENCIES, payload });

export const fetchAPI = () => (dispatch) => {
  const endpoind = 'https://economia.awesomeapi.com.br/json/all';
  fetch(endpoind)
    .then((response) => response.json())
    .then((results) => {
      const arr = Object.keys(results).filter((key) => key !== 'USDT');
      dispatch(getCurrencies(arr));
    });
};
