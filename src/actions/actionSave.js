import fetchApiEconomy from './fetchApiEconomy';

export const SAFE_DATA = 'SAFE_DATA';

const actionSaveObj = (info) => ({
  type: SAFE_DATA,
  payload: info,
});

function actionSave(info) {
  return async (dispatch) => {
    const expenses = { ...info, exchangeRates: await fetchApiEconomy() };
    dispatch(actionSaveObj(expenses));
  };
}

export default actionSave;
