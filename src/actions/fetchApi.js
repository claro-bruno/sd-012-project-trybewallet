export const LOADING = 'LOADING';

export const API_SUCESS = 'API_SUCESS';

export const API_ERROR = 'API_ERROR';

const loading = () => ({
  type: LOADING,
});

const apiSucess = (response) => ({
  type: API_SUCESS,
  payload: response,
});

const apiError = (error) => ({
  type: API_ERROR,
  payload: error,
});

const fetchApi = () => async (dispatch) => {
  dispatch(loading());
  try {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await request.json();
    await dispatch(apiSucess(response));
  } catch (error) {
    dispatch(apiError(error.message));
  }
};

export default fetchApi;
