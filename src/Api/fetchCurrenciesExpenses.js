import { getCurrenciesExpenses } from '../actions';

const currenciesUrl = 'https://economia.awesomeapi.com.br/json/all';

const fetchCurrenciesExpenses = (state) => async (dispatch) => {
  const response = await fetch(currenciesUrl);
  const currencies = await response.json();
  dispatch(getCurrenciesExpenses({ ...state, exchangeRates: currencies }));
};

export default fetchCurrenciesExpenses;
