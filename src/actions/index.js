// Coloque aqui suas actions

export const getAPI = (value) => ({
  type: 'API_DATA',
  value,
});

export const fetchAPI = () => async (dispatch) => {
  let request = await fetch('https://economia.awesomeapi.com.br/json/all');
  request = await request.json();
  const resultKeys = Object.keys(request).filter((elm) => elm !== 'USDT');
  try {
    return dispatch(getAPI(resultKeys));
  } catch (error) {
    return dispatch(getAPI(error));
  }
};

export const getUser = (data) => ({
  type: 'USER',
  email: data,
});
