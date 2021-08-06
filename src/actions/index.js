import { USER_EMAIL, GET_WALLET, GET_SUCESS, GET_FAILL } from './actionTypes';

export const actionEmail = (payload) => ({ type: USER_EMAIL, payload });

// ------------ Actions Wallet ----->n
export const getWallet = (payload) => ({ type: GET_WALLET, payload });
export const getSucess = (payload) => ({ type: GET_SUCESS, payload });
export const getFaill = (error) => ({ type: GET_FAILL, error });

export const fetchApiThunk = () => (dispatch) => {
  dispatch(getWallet());
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  fetch(endpoint)
    .then((data) => data.json())
    .then((json) => {
      // filtro com base no repositório da colega Juliana
      const currencie = Object.keys(json).filter((payload) => payload !== 'USDT');
      dispatch(getSucess(currencie));
    })
    .catch((error) => dispatch(getFaill(error)));
};
