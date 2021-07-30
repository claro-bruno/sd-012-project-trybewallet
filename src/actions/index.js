export const LOGIN = 'LOGIN';
export const SUCCESS_REQUEST = 'SUCCESS_REQUEST';
export const REQUEST_API = 'REQUEST_API';
const API_URL = 'https://economia.awesomeapi.com.br/json/all';

export const login = (email) => ({
  type: LOGIN, payload: email,
});

export function requestAPI() {
  return {
    type: REQUEST_API,
  };
}

export function getAPI(data) {
  return {
    type: SUCCESS_REQUEST,
    payload: data,
  };
}

export function fetchAPI() {
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch(API_URL)
      .then((response) => response.json())
      .then((json) => Object.keys(json).filter(((code) => code !== 'USDT')))
      .then((data) => dispatch(getAPI(data)));
  };
}
