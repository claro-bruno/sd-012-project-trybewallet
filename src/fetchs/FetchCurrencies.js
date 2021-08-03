import { requestCurrenciesSuccess, requestCurrenciesError } from '../actions';

const URL = 'https://economia.awesomeapi.com.br/json/all';
// parte do requisito 7 retirado do repositório do colega Jossany Moura
const fetchCurrencies = () => async (dispatch) => {
  const response = await fetch(URL);
  if (!response.ok) return dispatch(requestCurrenciesError());
  const currencies = await response.json();
  const currenciesAbbreviation = Object.keys(currencies);
  const currenciesFiltered = currenciesAbbreviation
    .filter((currencie) => currencie !== 'USDT');

  dispatch(requestCurrenciesSuccess(currenciesFiltered));
};

export default fetchCurrencies;
