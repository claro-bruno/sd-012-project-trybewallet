// Coloque aqui suas actions
import exchangeAPI from '../service/exchangeApi';
import { ADD_EXPENSE, ADD_USER, CURRENCY_DATA, DELETE_ITEM } from './actionTypes';

const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

const dataCurrency = (data) => ({
  type: CURRENCY_DATA,
  data,
});

const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

const deleteItem = (item) => ({
  type: DELETE_ITEM,
  item,
});

function fetchAPI() {
  return async (dispatch) => {
    const data = await exchangeAPI();
    dispatch(dataCurrency(data));
  };
}

export { addUser, dataCurrency, fetchAPI, addExpense, deleteItem };
