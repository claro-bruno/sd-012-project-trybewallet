// const TYPE_API_DATA = 'API';
export const TYPE_GET_CURRENCIES = 'CURRENCIES';

// export const requestAPI = () => ({ type: TYPE_API_DATA });

export const getCurrencies = (currencies) => ({
  type: TYPE_GET_CURRENCIES,
  currencies: Object.values(currencies),
});

export function fetchAPI() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((json) => {
      delete json.USDT;
      return dispatch(getCurrencies(json));
    });
}
