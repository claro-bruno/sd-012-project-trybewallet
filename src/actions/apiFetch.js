import getCoins from './getCoins';
import getExpenses from './getExpenses';

const fetchApi = (expenses) => async (dispatch) => {
  const API = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(API);
  const data = await response.json();
  if (!expenses) {
    const currents = Object.keys(data)
      .filter((current) => current !== 'USDT');
    console.log(currents);
    return dispatch(getCoins(currents));
  }
  dispatch(getExpenses({ ...expenses, exchangeRates: data }));
};
export default fetchApi;
// Link
// Implementação da lógica do Eric Kreis
// https://github.com/tryber/sd-012-project-trybewallet/commit/488f60c6256689ed324465fe72bbb15787efb69d
