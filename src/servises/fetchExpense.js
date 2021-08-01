import { actionExpense, actionExpenseFail } from '../actions/index';

const fetchExpense = (state) => async (dispatch) => {
  const requisition = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await requisition.json();
  if (!json) return dispatch(actionExpenseFail);
  dispatch(actionExpense({ ...state, exchangeRates: json }));
};

export default fetchExpense;
