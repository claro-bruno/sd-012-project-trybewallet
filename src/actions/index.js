// Coloque aqui suas actions
// export const actiontest = createAction('BLABLA');
export const CAN_AUTHENTICATE = 'CAN_AUTHENTICATE';
export const authAction = (payload) => ({
  type: CAN_AUTHENTICATE,
  payload,
});

export const LOGIN_ACTION = 'LOGIN_ACTION';
export const loginAction = (payload) => ({
  type: LOGIN_ACTION,
  payload,
});

export const REQUEST_ACTION = 'REQUEST_CURRENCIES';
export const requestAction = () => ({
  type: REQUEST_ACTION,
});

export const RECEIVE_ACTION = 'RECEIVE_REQUEST';
export const receiveAction = (payload) => ({
  type: RECEIVE_ACTION,
  payload,
});

export function getCurrencies() {
  const API_URL = 'https://economia.awesomeapi.com.br/json/all';
  return async (dispatch) => {
    dispatch(requestAction());
    const currencies = await fetch(API_URL);
    const currenciesObj = await currencies.json();
    dispatch(receiveAction(currenciesObj));
  };
}

export const ADD_EXPENSE_ACTION = 'ADD_EXPENSE_ACTION';
export const addExpenseAction = (expense, id) => ({
  type: ADD_EXPENSE_ACTION,
  payload: {
    expense, id,
  },
});

export const REMOVE_EXPENSE_ACTION = 'REMOVE_EXPENSE_ACTION';
export const removeExpenseAction = (payload) => ({
  type: REMOVE_EXPENSE_ACTION,
  payload,
});
