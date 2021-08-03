import {
  CHANGE_USER_INFORMATION,
  CHANGE_WALLET_INFORMATION,
  GET_CURRENCIES,
  SET_CURRENCIES,
  SET_EXPENSE,
  REQUEST_CURRENCIES,
  FAILED_REQUEST,
} from './ActionTypes';

export const userInfo = (info) => ({
  type: CHANGE_USER_INFORMATION,
  info,
});

export const walletInfo = (info) => ({
  type: CHANGE_WALLET_INFORMATION,
  info,
});

export const setCurrencies = (selecteds) => ({
  type: SET_CURRENCIES,
  selecteds,
});

export const setExpense = (expense) => ({
  type: SET_EXPENSE,
  expense,
});

const getCurrencies = (json) => ({
  type: GET_CURRENCIES,
  payload: json,
});

function requestCurrencies() {
  return { type: REQUEST_CURRENCIES };
}

function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}

export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(requestCurrencies());
    const currencies = fetch('https://economia.awesomeapi.com.br/json/all')
      .then((r) => r.json()
        .then(
          (json) => dispatch(getCurrencies(json)),
          (error) => dispatch(failedRequest(error)),
        ));
    return currencies;
  };
}
