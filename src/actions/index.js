// Coloque aqui suas actions
import exchangeAPI from '../service/exchangeApi';
import { ADD_USER, CURRENCY_DATA } from './actionTypes';

const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

const dataCurrency = (data) => ({
  type: CURRENCY_DATA,
  data,
});

function fetchAPI() {
  return async (dispatch) => {
    const data = await exchangeAPI();
    dispatch(dataCurrency(data));
  };
}

export { addUser, dataCurrency, fetchAPI };
