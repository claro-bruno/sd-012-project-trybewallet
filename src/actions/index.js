// Coloque aqui suas actions

export const getAPI = (value) => ({
  type: 'API_DATA',
  value,
});

export const fetchAPI = () => async (dispatch) => {
  let request = fetch('https://economia.awesomeapi.com.br/json/all');
  request = await request.json();
  dispatch(getAPI(request));
};

export const getUser = (data) => ({
  type: 'USER',
  email: data,
});
