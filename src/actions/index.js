export const GET_CURRENCY = 'GET_CURRENCY';
export const GET_CURRENCY_ERROR = 'GET_CURRENCY_ERROR';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';
const endpoint = 'https://economia.awesomeapi.com.br/json/all';

export const actGetEmail = (email) => ({ type: 'GET_EMAIL', payload: email });
export const getCurrency = () => ({ type: GET_CURRENCY });
export const getCurrencySuccess = (payload) => ({
  type: GET_CURRENCY_SUCCESS,
  payload: { shouldMount: true, payload,
  } });
export const getCurrencyError = (error) => ({
  type: GET_CURRENCY_ERROR,
  payload: { shouldMount: false, error },
});

const fetchAPI = async () => {
  const response = await fetch(endpoint);
  const result = response.json();
  delete result.USDT;
  return result;
};

export const GetCurrenciesThunk = () => async (dispatch) => {
  await fetchAPI();
  dispatch(getCurrency());
  try {
    await fetchAPI();
    dispatch(getCurrencySuccess());
  } catch (error) {
    await fetchAPI();
    dispatch(getCurrencyError());
  }
};
