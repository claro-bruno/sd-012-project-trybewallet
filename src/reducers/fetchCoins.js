import { fetchCoinsError, fetchCoinsSuccess } from '../actions';

const URL = 'https://economia.awesomeapi.com.br/json/all';
const fetchCoins = () => async (dispatch) => {
  const getJson = await fetch(URL);
  if (!getJson.ok) return dispatch(fetchCoinsError());
  const coinsObj = await getJson.json();
  const coins = Object.keys(coinsObj)
    .filter((coin) => coin !== 'USDT');
  dispatch(fetchCoinsSuccess(coins));
};

export default fetchCoins;
