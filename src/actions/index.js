export const SAVE_USER_EMAIL = 'SAVE_USER_EMAIL';
export const REQUEST_CURRENCIES_SUCCESS = 'REQUEST_CURRENCIES_SUCCESS';
export const REQUEST_CURRENCIES_ERROR = 'REQUEST_CURRENCIES_ERROR';
export const REQUEST_CURRENCIESII_SUCCESS = 'REQUEST_CURRENCIESII_SUCCESS';
export const REQUEST_CURRENCIESII_ERROR = 'REQUEST_CURRENCIESII_ERROR';
export const EXCLUDE_EXPENSE = 'EXCLUDE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const saveUserEmail = (payload) => ({ type: SAVE_USER_EMAIL, payload });

export const requestCurrenciesSuccess = (payload) => ({
  type: REQUEST_CURRENCIES_SUCCESS, payload,
});

export const requestCurrenciesError = ({ type: REQUEST_CURRENCIES_ERROR });

export const requestCurrenciesIISuccess = (payload) => ({
  type: REQUEST_CURRENCIESII_SUCCESS, payload,
});

export const requestCurrenciesIIError = ({ type: REQUEST_CURRENCIESII_ERROR });

export const excludeExpense = (payload) => ({ type: EXCLUDE_EXPENSE, payload });

export const editExpense = (state) => ({ type: EDIT_EXPENSE, state });
