export const GET_CURRENCIES = 'GET_CURRENCIES ';
export const USER_EMAIL = 'USER_EMAIL';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';

export const actionUserEmail = (email) => ({ type: USER_EMAIL, email });
export const getCurrencies = (payload) => ({ type: GET_CURRENCIES, payload });
export const saveExpenses = (expenses) => ({ type: SAVE_EXPENSES, expenses });

export const fetchAPI = (state) => (dispatch) => {
  const endpoind = 'https://economia.awesomeapi.com.br/json/all';
  fetch(endpoind)
    .then((response) => response.json())
    .then((results) => {
      if (!state) {
        const arr = Object.keys(results).filter((key) => key !== 'USDT');
        return dispatch(getCurrencies(arr));
      }
      dispatch(saveExpenses({ ...state, exchangeRates: results }));
    });
};
