export const SET_LOGIN_VALUE = 'SET_LOGIN_VALUE';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_FAIL = 'GET_CURRENCIES_FAIL';
// export const GET_COTATION = 'GET_COTATION';
// export const GET_COTATION_SUCCESS = 'GET_COTATION_SUCCESS';
// export const GET_COTATION_FAIL = 'GET_COTATION_FAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export const setLoginValue = (value) => (
  {
    type: SET_LOGIN_VALUE, value,
  }
);

export const getCurrencies = () => (
  {
    type: GET_CURRENCIES,
  }
);

export const getCurrenciesSuccess = (currencies) => (
  {
    type: GET_CURRENCIES_SUCCESS,
    currencies,
  }
);

export const getCurrenciesFail = (err) => (
  {
    type: GET_CURRENCIES_FAIL,
    payload: err,
  }
);

// export const getCotation = () => (
//   {
//     type: GET_COTATION,
//   }
// );

// export const getCotationSuccess = (cotation) => (
//   {
//     type: GET_COTATION_SUCCESS,
//     cotation,
//   }
// );

// export const getCotationFail = (err) => (
//   {
//     type: GET_COTATION_FAIL,
//     payload: err,
//   }
// );

const failedRequest = (error) => ({ type: 'FAILED_REQUEST', payload: error });

export const addExpense = (payload, json) => ({
  type: 'ADD_EXPENSE',
  payload,
  newFetch: json,
});

export const currencyThunk = () => (dispatch) => {
  dispatch(getCurrencies());
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  fetch(endpoint)
    .then((response) => response.json())
    .then((json) => {
      const currencies = Object.keys(json).filter((currency) => currency !== 'USDT');
      dispatch(getCurrenciesSuccess(currencies));
    })
    .catch((err) => dispatch(getCurrenciesFail(err)));
};

export const fetchRates = (payload) => (
  (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((r) => r.json()
      .then((json) => dispatch(addExpense(payload, json))))
    .catch((error) => dispatch(failedRequest(error)))
);

// export const cotationThunk = (chosen) => (dispatch) => {
//   dispatch(getCotation());
//   const endpoint = `https://economia.awesomeapi.com.br/json/${chosen}`;
//   fetch(endpoint)
//     .then((response) => response.json())
//     .then((json) => dispatch(getCotationSuccess(json)))
//     .catch((err) => dispatch(getCotationFail(err)))
// }
