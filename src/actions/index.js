export const saveEmail = (value) => ({
  type: 'SAVE_EMAIL',
  value,
});

export const requestCurrencies = () => ({
  type: 'REQUEST_CURRENCIES',
});

export const getCurrencies = (result) => ({
  type: 'GET_CURRENCIES',
  currencies: result,
});

export const failedCurrencies = (err) => ({
  type: 'FAILED_CURRENCIES',
  err,
});

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(requestCurrencies());
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await response.json();
  const result = Object.keys(json).filter((currency) => currency !== 'USDT');
  try {
    dispatch(getCurrencies(result));
  } catch (err) {
    dispatch(failedCurrencies(err));
  }
};
