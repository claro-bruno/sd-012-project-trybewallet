export const loginChange = (value) => ({
  type: 'ADD_LOGIN', value,
});

export const walletChange = (fetchResponse, obj) => ({
  type: 'WALLET_CHANGE',
  ...obj,
  exchangeRates: fetchResponse,
});

export const walletChangeError = (err) => ({
  type: 'WALLET_ERROR',
  value: err,
});

export const fetchAPI = (expensesObj) => async (dispatch) => {
  const endPoint = 'https://economia.awesomeapi.com.br/json/all';
  let result = await fetch(endPoint);
  result = await result.json();
  try {
    dispatch(walletChange(result, expensesObj));
  } catch (err) {
    dispatch(walletChangeError(err));
  }
};
