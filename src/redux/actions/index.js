export const REQUEST_EXCHANGE_RATE = 'REQUEST_EXCHANGE_RATE';
export const REQUEST_EXCHANGE_RATE_SUCCESS = 'REQUEST_EXCHANGE_RATE_SUCCESS';
export const REQUEST_EXCHANGE_RATE_FAILURE = 'REQUEST_EXCHANGE_RATE_FAILURE';

export const requestExchangeRateSuccess = (payload) => ({
  type: REQUEST_EXCHANGE_RATE_SUCCESS,
  payload,
});

export function requestExchangeRates(expenseData) {
  return async (dispatch) => {
    const fetchExchangeRates = await fetch('https://economia.awesomeapi.com.br/json/all');
    const fetchExchangeRatesJSON = await fetchExchangeRates.json();
    const exchange = { exchangeRates: fetchExchangeRatesJSON };
    Object.assign(expenseData, exchange);
    dispatch(requestExchangeRateSuccess(expenseData));
  };
}
