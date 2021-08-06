export const GET_EMAIL = 'GET_EMAIL';
export const REQUEST_CURRENCIES_SUCCESS = 'REQUEST_CURRENCIES_SUCCESS';
export const REQUEST_CURRENCIES_ERROR = 'REQUEST_CURRENCIES_ERROR';
export const REQUEST_CURRENCIESII_SUCCESS = 'REQUEST_CURRENCIESII_SUCCESS';
export const REQUEST_CURRENCIESII_ERROR = 'REQUEST_CURRENCIESII_ERROR';



export const actionGetEmail = (email) => ({
  type: GET_EMAIL,
  email,
});

export const requestCurrenciesSuccess = (payload) => ({
  type: REQUEST_CURRENCIES_SUCCESS,
  payload,
});

export const requestCurrenciesError = (error) => ({
  type: REQUEST_CURRENCIES_ERROR,
  error,
});

export const requestCurrenciesIISuccess = (payload) => ({
  type: REQUEST_CURRENCIESII_SUCCESS,
  payload,
});

export const requestCurrenciesIIError = (error) => ({
  type: REQUEST_CURRENCIESII_ERROR,
  error,
});
