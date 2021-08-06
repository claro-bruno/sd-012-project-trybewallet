const ADD_EXP = 'ADD_EXP';
const CHANGE_CURRENCY = 'CHANGE_CURRENCY';
const CURRENCY_SUCCESS = 'CURRENCY_SUCCESS';
const CURRENCY_FAIL = 'CURRENCY_FAIL';
const DELETE_EXPENSES = 'DELETE_EXPENSES';

export const addExp = (payload) => ({ type: ADD_EXP, payload });

export const changeCurrency = () => ({
  type: CHANGE_CURRENCY,
});

export const currencySucess = (payload) => ({
  type: CURRENCY_SUCCESS,
  payload,
});

export const currencyFail = (error) => ({
  type: CURRENCY_FAIL,
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
  dispatch(changeCurrency());
  try {
    const request = await currencyFetch();
    dispatch(currencySucess(request));
  } catch (error) {
    dispatch(currencyFail(error));
  }
};

export const actionUserLogin = (payload) => ({
  type: 'TYPE_EMAIL',
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSES,
  payload,
});
