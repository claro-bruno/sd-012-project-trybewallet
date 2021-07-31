// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const GET_COINS = 'GET_COINS';
export const SEND_VALUES = 'SEND_VALUES';

export const actionUserData = (credentials) => ({ type: USER_LOGIN, credentials });

export const getCoins = (coins) => ({ type: GET_COINS, coins });

export const fetchCoins = () => (
  (dispatch) => (
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((coins) => Object.keys(coins))
      .then((keys) => keys.filter((currencies) => currencies !== 'USDT'))
      .then((currencies) => dispatch(getCoins(currencies)))
  )
);

export const sendValuesToStore = (values) => ({ type: SEND_VALUES, values });
