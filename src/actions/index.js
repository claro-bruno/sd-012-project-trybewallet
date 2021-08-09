export const GET_CURRENCY = 'GET_CURRENCY';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';
export const GET_CURRENCY_ERROR = 'GET_CURRENCY_SUCCESS';
const endpoint = 'https://economia.awesomeapi.com.br/json/all';

export const actGetEmail = (email) => ({ type: 'GET_EMAIL', payload: email });
export const getCurrency = () => ({ type: GET_CURRENCY });
export const getCurrencySuccess = (payload) => ({
  type: GET_CURRENCY_SUCCESS,
  payload,
});

export const getCurrencyError = (payload) => ({
  type: GET_CURRENCY_ERROR,
  payload,
});

const fetchAPI = async () => {
  const response = await fetch(endpoint);
  const result = response.json();
  delete result.USDT;
  console.log(result);
  return result;
};

export const getCurrenciesThunk = () => async (dispatch) => {
  dispatch(getCurrency());
  try {
    dispatch(getCurrencySuccess(await fetchAPI()));
  } catch (error) {
    dispatch(getCurrencyError(error));
  }
};
