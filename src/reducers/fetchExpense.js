import { fetchExpenseError, fetchExpenseSuccess } from '../actions';

const URL = 'https://economia.awesomeapi.com.br/json/all';
const fetchExpense = (userData) => async (dispatch) => {
  const getJson = await fetch(URL);
  if (!getJson.ok) return dispatch(fetchExpenseError());
  const expenseObj = await getJson.json();
  dispatch(fetchExpenseSuccess({ ...userData, exchangeRates: expenseObj }));
};

export default fetchExpense;
