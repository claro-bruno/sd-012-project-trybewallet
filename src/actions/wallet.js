export const LOADING = 'LOADING';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';
export const REGISTER_EXPENSE = 'REGISTER_EXPENSE';

export const loading = () => ({
  type: LOADING,
});

export const apiSuccess = (response) => ({
  type: API_SUCCESS,
  payload: response,
});

export const apiError = (error) => ({
  type: API_ERROR,
  payload: error,
});

export const fetchApi = () => async (dispatch) => {
  dispatch(loading());
  try {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await request.json();
    await dispatch(apiSuccess(response));
  } catch (error) {
    dispatch(apiError(error.message));
  }
};

export const registerExpense = (expense) => ({
  type: REGISTER_EXPENSE,
  payload: expense,
});
