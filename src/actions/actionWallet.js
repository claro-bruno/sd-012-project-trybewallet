export const TYPE_GET_CURRENCIES = 'CURRENCIES';
export const TYPE_GET_EXPENSE = 'GET_EXPENSE';

export const getCurrencies = (currencies) => ({
  type: TYPE_GET_CURRENCIES,
  currencies: Object.values(currencies),
});

export const getExpense = (state, exchangeRates, id) => ({
  type: TYPE_GET_EXPENSE,
  expenses: {
    id,
    ...state,
    exchangeRates,
  },
});

export function fetchAPI() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((json) => {
      const currencies = Object.values(json)
        .filter((currency) => currency.codein === 'BRL');
      return dispatch(getCurrencies(currencies));
    });
}

export async function fetchCurrencies() {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await response.json();
  return json;
}
