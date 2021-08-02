// const TYPE_API_DATA = 'API';
export const TYPE_GET_CURRENCIES = 'CURRENCIES';
export const TYPE_FAKE_EXPENSES = 'FAKE_EXPENSES';

// export const requestAPI = () => ({ type: TYPE_API_DATA });

export const getCurrencies = (currencies) => ({
  type: TYPE_GET_CURRENCIES,
  currencies: Object.values(currencies),
});

export const fakeActionExpenses = () => ({
  type: TYPE_FAKE_EXPENSES,
});

export function fetchAPI() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((json) => {
      const currencies = Object.values(json)
        .filter((currency) => currency.codein === 'BRL');
      return dispatch(getCurrencies(currencies));
      // delete json.USDT;
      // return dispatch(getCurrencies(json));
    });
}
