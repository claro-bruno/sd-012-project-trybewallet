export const LOGIN = 'LOGIN';
export const ADD_EXPENSE_SUCCESS = 'ADD_EXPENSE_SUCCESS';
export const ADD_EXPENSE_FAIL = 'ADD_EXPENSE_FAIL';
export const CURRENCIES_SUCCESS = 'CURRENCIES_SUCCESS';
export const CURRENCIES_FAIL = 'CURRENCIES_FAIL';
const CURRENCIES_API = 'https://economia.awesomeapi.com.br/json/all';

export const storeLogin = (email) => ({
  type: LOGIN,
  email,
});

export const successAddExpense = (payload, fetch) => ({
  type: ADD_EXPENSE_SUCCESS,
  payload,
  fetch,
});

export const failAddExpense = () => ({
  type: ADD_EXPENSE_FAIL,
});

export const successUpdateCurrencies = (payload) => ({
  type: CURRENCIES_SUCCESS,
  payload,
});

export const failUpdateCurrencies = (payload) => ({
  type: CURRENCIES_FAIL,
  payload,
});

export const actionAPI = () => async (dispatch) => {
  try {
    let response = await fetch(CURRENCIES_API);
    response = await response.json();
    const results = Object.keys(response);
    const currenciesArr = results
      .filter((e) => e !== 'USDT');
    dispatch(successUpdateCurrencies(currenciesArr));
  } catch (error) {
    dispatch(failUpdateCurrencies(error));
  }
};

export const actionExpense = (objetão) => async (dispatch) => {
  try {
    let response = await fetch(CURRENCIES_API);
    response = await response.json();
    dispatch(successAddExpense(objetão, response));
  } catch (error) {
    dispatch(failAddExpense());
  }
};
