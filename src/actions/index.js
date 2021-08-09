import fetchAPI from '../services/Apiservices';

// Coloque aqui suas action
export const USER_EMAIL = 'email';
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
export const FETCH_CURRENCIES_ERROR = 'FETCH_CURRENCIES_ERROR';
export const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS';
export const STATE_XCHANGERATE_SUCCESS = 'STATE_XCHANGERATE_SUCCESS';
export const STATE_XCHANGERATE_ERROR = 'STATE_XCHANGERATE_ERROR';

const submitEmail = (payload) => ({ type: USER_EMAIL, payload });

export default submitEmail;

const fetchCurencies = () => ({ type: FETCH_CURRENCIES });
const fetchCurenciesError = (payload) => ({ type: FETCH_CURRENCIES_ERROR, payload });
const fetchCurenciesSuccess = (payload) => ({ type: FETCH_CURRENCIES_SUCCESS, payload });

export const actionFatchCurencies = () => async (dispatch) => {
  dispatch(fetchCurencies);

  try {
    const response = await fetchAPI();
    dispatch(fetchCurenciesSuccess(response));
  } catch (error) {
    dispatch(fetchCurenciesError(error));
  }
};

const dispatchStateToReduxsuccess = (expenses) => ({
  type: STATE_XCHANGERATE_SUCCESS,
  payload: expenses,
});
const dispatchStateToReduxerror = (error) => ({
  type: STATE_XCHANGERATE_ERROR,
  payload: error,
});

export const fetchcotations = (expenses) => async (dispatch) => {
  const endPoint = 'https://economia.awesomeapi.com.br/json/all';
  try {
    const response = await fetch(endPoint);
    const responseJSON = await response.json();
    dispatch(dispatchStateToReduxsuccess({ ...expenses, exchangeRates: responseJSON }));
    console.table(responseJSON);
  } catch (err) {
    dispatch(dispatchStateToReduxerror(err));
  }
};
