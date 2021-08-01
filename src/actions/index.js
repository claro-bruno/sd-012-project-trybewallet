export const RETURN_EMAIL = 'RETURN_EMAIL';

export const loginAction = (payload) => ({
  type: RETURN_EMAIL,
  payload,
});

export const getCurrencys = () => ({ type: GET_CURRENCIES });

export const getCurrenciesSuccess = (payload) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload,
});

export const getCurrencysError = (error) => ({
  type: GET_CURRENCIES_ERROR,
  error,
});

export const fetchAPI = () => async (dispatch) => {
  dispatch(getCurrencys());
  try {
    const endpoint = 'https://economia.awesomeapi.com.br/json/all';
    const data = await fetch(endpoint);
    const dataCurrencies = await data.json();
    dispatch(getCurrenciesSuccess(dataCurrencies));
  } catch (err) {
    dispatch(getCurrencysError(err));
  }
};
