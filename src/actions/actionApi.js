import fetchApiEconomy from './fetchApiEconomy';

export const GET_API = 'GET_API';

export const GET_API_SUCESS = 'GET_API_SUCESS';

export const GET_API_ERROR = 'GET_API_ERROR';

const getApi = () => ({
  type: GET_API,
});

const getApiSucess = (response) => ({
  type: GET_API_SUCESS,
  payload: response,
});

const getApiError = (error) => ({
  type: GET_API_ERROR,
  payload: error,
});

function actionApi() {
  return (dispatch) => {
    dispatch(getApi());
    return fetchApiEconomy()
      .then((json) => dispatch(getApiSucess(json)),
        (error) => dispatch(getApiError(error)));
  };
}

export default actionApi;
