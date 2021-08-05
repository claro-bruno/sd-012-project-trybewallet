import { requestCurrenciesIISuccess, requestCurrenciesIIError } from '../actions';

const URL = 'https://economia.awesomeapi.com.br/json/all';

const fetchCurrenciesForExpenses = (state) => async (dispatch) => {
  const response = await fetch(URL);
  if (!response.ok) return dispatch(requestCurrenciesIIError());
  const currencies = await response.json();
  dispatch(requestCurrenciesIISuccess({ ...state, exchangeRates: currencies }));
};

export default fetchCurrenciesForExpenses;
