// Coloque aqui suas actions
export const EMAIL_ACTION = 'EMAIL_ACTION';
export const actionLog = (email) => ({ type: EMAIL_ACTION, email });

export const EXPENSES = 'EXPENSES';
export const actionExpenses = (state) => ({ type: EXPENSES, state });

export const FAIL_EXPENSES = 'FAIL_EXPENSES';
export const actionFailExpenses = (error) => ({ type: FAIL_EXPENSES, error });

export const fetchAPIExpenses = (state) => async (dispatch) => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  const getAPI = await fetch(URL);
  const getJson = await getAPI.json();
  if (!getJson) return dispatch(actionFailExpenses);
  dispatch(actionExpenses({ ...state, exchangeRates: getJson }));
};
