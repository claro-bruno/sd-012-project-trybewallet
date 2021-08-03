export const GET_EMAIL = 'GET_EMAIL';
export const REQUEST_CURRENCIES_BEGIN = 'REQUEST_CURRENCIES_BEGIN';
export const REQUEST_CURRENCIES_SUCCESS = 'REQUEST_CURRENCIES_SUCCESS';
export const REQUEST_CURRENCIES_ERROR = 'REQUEST_CURRENCIES_ERROR';

export const actionGetEmail = (email) => ({
  type: GET_EMAIL,
  email,
});

export const requestCurrenciesBegin = () => ({
  type: REQUEST_CURRENCIES_BEGIN,
});

export const requestCurrenciesSuccess = (moeda) => ({
  type: REQUEST_CURRENCIES_SUCCESS,
  moeda,
});

export const requestCurrenciesError = (error) => ({
  type: REQUEST_CURRENCIES_ERROR,
  error,
});
