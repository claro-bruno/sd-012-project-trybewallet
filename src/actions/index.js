import currencyAPI from '../APIs/currencyAPI';

// Action Types

export const LOGIN = 'USER_LOGIN';
export const REQUEST = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const GET_EXPENSES = 'GET_EXPENSES';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const ADD_TOTAL = 'ADD_TOTAL';
export const ADD_RATE = 'ADD_RATE';
export const EXP_DEL = 'EXP_DEL';

// Action Creators - Login Actions

export const newEmail = (payload) => ({
  type: LOGIN,
  payload,
});

// Action Creators - Wallet Actions

export const requestAPI = () => ({ type: REQUEST });

export const requestAPISuccess = (payload) => ({
  type: REQUEST_API_SUCCESS,
  payload,
});

export const requestError = (payload) => ({
  type: REQUEST_ERROR,
  payload,
});

// Fetch API Actions

export const fetchAPI = () => async (dispatch) => {
  dispatch(requestAPI());
  try {
    const data = await currencyAPI();
    return dispatch(requestAPISuccess(data));
  } catch (error) {
    return dispatch(requestError(error));
  }
};
