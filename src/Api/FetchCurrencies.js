import { getCurrencies } from '../actions';

const currenciesUrl = 'https://economia.awesomeapi.com.br/json/all';

const fetchCurrencies = () => async (dispatch) => {
  const response = await fetch(currenciesUrl);
  const currencies = await response.json();
  const initialsCurrencies = Object.keys(currencies);
  const filteredCurrencies = initialsCurrencies
    .filter((currency) => currency !== 'USDT');
  dispatch(getCurrencies(filteredCurrencies));
};

export default fetchCurrencies;
