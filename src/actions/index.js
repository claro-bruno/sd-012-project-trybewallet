const ADD_EXPENSE = 'ADD_EXPENSE';
const CURRENCIE_CHANGE = 'CURRENCIE_CHANGE';
const CURRENCIE_SUCESS = 'CURRENCIE_SUCESS';
const CURRENCIE_FAIL = 'CURRENCIE_FAIL';
const DELETE_EXPENSES = 'DELETE_EXPENSES';

export const addExpense = (payload) => ({ type: ADD_EXPENSE, payload });

export const changeCurrencie = () => ({
  type: CURRENCIE_CHANGE,
});

export const currencieSucess = (payload) => ({
  type: CURRENCIE_SUCESS,
  payload,
});

export const currencieFail = (error) => ({
  type: CURRENCIE_FAIL,
  error,
});

export const currencyFetch = async () => {
  const requisition = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await requisition.json();
  return Object.keys(data).filter((currency) => currency !== 'USDT');
};

export const fetchAPI = async () => {
  const requisition = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await requisition.json();
  return data;
};

export const currencyThunk = () => async (dispatch) => {
  dispatch(changeCurrencie());
  try {
    const request = await currencyFetch();
    dispatch(currencieSucess(request));
  } catch (error) {
    dispatch(currencieFail(error));
  }
};

export const actionUser = (payload) => ({
  type: 'TYPE_EMAIL',
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSES,
  payload,
});
