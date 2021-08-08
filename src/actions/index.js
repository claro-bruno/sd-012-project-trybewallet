export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_COINS = 'SAVE_COINS';

export const saveEmail = (payload) => (
  { type: SAVE_EMAIL, payload }
);

export const saveCoins = (payload) => (
  { type: SAVE_COINS, payload }
);

export function getCoins() {
  return (dispatch) => (
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => dispatch(saveCoins(json)))
  );
}
