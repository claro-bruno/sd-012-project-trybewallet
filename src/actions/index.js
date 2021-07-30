export const SET_USER = 'SET_USER';
export const CUR_WALLET = 'CUR_WALLET';
export const EXP_WALLET = 'EXP_WALLET';
export const DEL_WALLET = 'DEL_WALLET';

export const setUser = (email) => ({ type: SET_USER, email });
export const curWallet = (currencies) => ({ type: CUR_WALLET, currencies });
export const expWallet = (expenses) => ({ type: EXP_WALLET, expenses });
export const delWallet = (id) => ({ type: DEL_WALLET, id });

async function fetchCurrency() {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    return await response.json();
  } catch (message) {
    return console.error(message);
  }
}

export const fetchCoins = () => async (dispatch) => {
  const currency = await fetchCurrency();
  dispatch(curWallet(currency));
};

export const fetchWallet = (expenses) => async (dispatch) => {
  const currency = await fetchCurrency();
  const data = { ...expenses, exchangeRates: currency };
  dispatch(expWallet(data));
  return data;
};
