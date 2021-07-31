import fetchApiEconomy from './fetchApiEconomy';

const saveApi = () => ({
  type: 'GET_API',
});

const saveApiSucess = (response) => ({
  type: 'GET_API_SUCESS',
  data: response,
});

const saveApiError = (error) => ({
  type: 'GET_API_ERROR',
  payload: error,
});

function actionSaveData() {
  return (dispatch) => {
    dispatch(saveApi());
    fetchApiEconomy()
      .then((json) => dispatch(saveApiSucess(json)),
        (error) => dispatch(saveApiError(error)));
  };
}

export default actionSaveData;
