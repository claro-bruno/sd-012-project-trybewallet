import fetchAll from '../services/index';

const GET_USER_DATA = 'GET_USER_DATA';
export default GET_USER_DATA;
// * action type para da cotação das moedas atual
export const GET_COIN_ACHRONYMS_API = 'GET_COIN_ACHRONYMS_API';
// * type actions para adicionar e remover uma despesa
export const ADD_NEW_EXPENSE = 'ADD_NEW_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

// * action creator para obter as infos do usuário
export const getUserInfosCreator = (payload) => ({
  type: GET_USER_DATA,
  payload,
});

// * action creator para armazenar os dados vindos da API via thunk
export const getCoinAchronymsAPI = (payload) => ({
  type: GET_COIN_ACHRONYMS_API,
  payload,
});

// * action creator que faz a requisição para a API para obter os tipos de moedas
export const fetchAPI = () => async (dispatch) => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(url);
  const data = await response.json();
  const dataAsArray = Object.keys(data);
  const filteredData = dataAsArray.filter((value) => value !== 'USDT');
  dispatch(getCoinAchronymsAPI(filteredData));
};

// * action creator para adicionar uma nova despesa
export const getNewExpense = (value) => ({
  type: ADD_NEW_EXPENSE,
  payload: value,
});

// * action creator para fazer a requisição na API
// * Ela vai adicionar tanto o objeto 'exchangeRates' quanto as infos da despesa
export const addNewExpenseAndCurrencyQuote = (value) => async (dispatch) => {
  const data = await fetchAll();
  delete data.USDT;
  const expenseDetails = {
    ...value,
    exchangeRates: {
      ...data,
    },
  };
  dispatch(getNewExpense(expenseDetails));
};

export const deleteExpense = (value) => ({
  type: DELETE_EXPENSE,
  payload: value,
});
