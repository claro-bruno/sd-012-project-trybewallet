import getCurrencies from './getCurrencies';
import getExpenses from './getExpenses';

const fetchWallet = (expenses) => async (dispatch) => {
  const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
  const results = await fetchAPI.json();
  if (!expenses) {
    const currents = Object.keys(results)
      .filter((current) => current !== 'USDT');
    return dispatch(getCurrencies(currents));
  }
  dispatch(getExpenses({ ...expenses, exchangeRates: results }));
};

export default fetchWallet;
