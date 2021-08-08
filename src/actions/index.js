// Coloque aqui suas actions
export const ADD_MAIL = 'ADD_MAIL';
export const REQ_COIN = 'REQ_COIN';
export const REC_COIN = 'REC_COIN ';
export const FAI_COIN = 'FAI_COIN';

export const addMail = (email) => ({
  type: ADD_MAIL,
  payload: email,
});

export const reqCoin = () => ({
  type: REQ_COIN,
});

export const recCoin = (data) => ({
  type: REC_COIN,
  data,
});

export const failCoin = () => ({
  type: FAI_COIN,
});

export function fetchCoin() {
  return async (dispatch) => {
    dispatch(reqCoin());
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      return dispatch(recCoin(data));
    } catch (error) {
      return dispatch(failCoin());
    }
  };
}
