import { SAVE_EMAIL, GET_CURRENCIES, FAILED_REQUEST, FETCH_API } from './types';

export const actionSaveEmail = (payload) => ({ type: SAVE_EMAIL, payload });

const getCurrencies = (payload) => ({ type: GET_CURRENCIES, payload });

const fetchAPI = () => ({ type: FETCH_API });

const failedRequest = (payload) => ({ type: FAILED_REQUEST, payload });

export const fetchCurrencies = () => {
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  return (dispatch) => {
    dispatch(fetchAPI());
    return fetch(endpoint)
      .then((response) => response.json())
      .then((json) => dispatch(getCurrencies(Object.keys(json))))
      .catch((error) => failedRequest(error));
  };
};
