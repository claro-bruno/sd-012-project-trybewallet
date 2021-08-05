import fetchAPI from '../services/Apiservices';

// Coloque aqui suas action
export const USER_EMAIL = 'email';
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
export const FETCH_CURRENCIES_ERROR = 'FETCH_CURRENCIES_ERROR';
export const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS';

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
