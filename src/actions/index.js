// Coloque aqui suas actions
export const SAVE_USER_EMAIL = 'SAVE_USER_EMAIL';
export const REQUEST_CURRENCIES_SUCCESS = 'REQUEST_CURRENCIES_SUCCESS';
export const REQUEST_CURRENCIES_ERROR = 'REQUEST_CURRENCIES_ERROR';

export const saveUserEmail = (payload) => ({ type: SAVE_USER_EMAIL, payload });

export const requestCurrenciesSuccess = (payload) => ({
  type: REQUEST_CURRENCIES_SUCCESS, payload,
});

export const requestCurrenciesError = ({ type: REQUEST_CURRENCIES_ERROR });
