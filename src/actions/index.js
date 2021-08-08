export const WALLET_SUBMIT = 'WALLET_SUBMIT';
export const FETCH_API = 'FETCH_API';
export const FETCH_API_SUCCESS = 'FETCH_API_SUCCESS';
export const FETCH_API_ERROR = 'FETCH_API_ERROR';
export const USER_SUBMIT = 'USER_SUBMIT';
export const SAVE_EXPENSIVE = 'SAVE_EXPENSIVE';

export const userSubmit = (state) => ({ type: USER_SUBMIT, state });

export const saveExpensive = (payload) => ({ type: SAVE_EXPENSIVE, payload });

export const fetchApi = () => ({ type: FETCH_API });

export const fetchApiSuccess = (payload) => ({ type: FETCH_API_SUCCESS, payload });

export const fetchApiError = (error) => ({ type: FETCH_API_ERROR, error });

export const walletSubmit = () => async (dispatch) => {
  dispatch(fetchApi());
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  fetch(URL)
    .then((data) => data.json())
    .then((results) => dispatch(fetchApiSuccess(results)))
    .catch((err) => dispatch(fetchApiError(err)));
};

export const addExpensive = (state) => async (dispatch) => {
  dispatch(fetchApi());
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  fetch(URL)
    .then((data) => data.json())
    .then((results) => dispatch(saveExpensive(results)))
    .catch((err) => dispatch(fetchApiError(err)));
};