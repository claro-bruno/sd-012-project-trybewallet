import userLogin from './userAction';
import { REQUEST_API, REQUEST_API_SUCCESS, LOGIN } from './actionTypes';

export const emailLogin = (email) => ({
  type: LOGIN,
  email,
});

export const requestApi = () => ({
  type: REQUEST_API,
});

export const requestApiSuccess = (data) => ({
  type: REQUEST_API_SUCCESS,
  data,
});

export const fetchApi = () => async (dispatch) => {
  dispatch(requestApi());
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const result = await response.json(response);
  dispatch(requestApiSuccess(Object.keys(result).filter((curr) => curr !== 'USDT')));
};

export {
  userLogin,
};
