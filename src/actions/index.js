export const ADD_EMAIL = 'ADD_EMAIL';
export const GET_COINS = 'GET_COINS';
export const FETCH_COIN = 'FETCH_COIN';

export const addEmail = (userMail) => ({
  type: ADD_EMAIL,
  payload: userMail,
});

export const getCoins = (currencies) => ({
  type: GET_COINS,
  payload: currencies,
});

export const fetchCoins = () => ({
  type: FETCH_COIN,
});

export const fetchCoinInfo = () => {
  const end = 'https://economia.awesomeapi.com.br/json/all';
  return (dispatch) => {
    dispatch(fetchCoins());
    return fetch(end)
      .then((res) => res.json())
      .then((response) => dispatch(getCoins(Object.keys(response))));
  };
};
