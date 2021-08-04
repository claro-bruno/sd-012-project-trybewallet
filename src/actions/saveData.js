import requestApi from '../data/requestApi';

export const SAVE_DATA = 'SAVE_DATA';

const saveDataAction = (response) => ({
  type: SAVE_DATA,
  payload: response,
});

function saveData(jonas) {
  return async (dispatch) => {
    const random = { ...jonas, exchangeRates: await requestApi() };
    dispatch(saveDataAction(random));
  };
}

export default saveData;
