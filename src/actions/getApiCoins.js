export const GET_COINS = 'GET_COINS';
export const GET_COINS_SUCCESS = 'GET_COINS_SUCCESS';
export const GET_COINS_ERROR = 'GET_COINS_ERROR';

export const getCoins = () => ({ type: GET_COINS });

export const getCoinsSuccess = (coins) => ({ type: GET_COINS_SUCCESS, payload: coins });

export const getCoinsError = (error) => ({ type: GET_COINS_ERROR, error });

export const fetchAPI = () => async (dispatch) => {
  dispatch(getCoins());
  const END_POINT = 'https://economia.awesomeapi.com.br/json/all';
  fetch(END_POINT)
    .then((data) => data.json())
    .then((results) => dispatch(getCoinsSuccess(results)))
    .catch((error) => dispatch(getCoinsError(error)));
};
