// Coloque aqui suas actions
export const userCase = 'loginInfos';
export const isRequest = 'isRequest';
export const doneRequest = 'doneRequest';

export const userAction = (value) => ({
  type: userCase,
  value,
});

export const requestAPI = () => ({ type: isRequest });

export const getCurrency = (value) => ({ type: doneRequest, value });

export const fetchCurrency = () => (async (dispatch) => {
  try {
    dispatch(requestAPI());
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const requestObj = await request.json();
    delete requestObj.USDT;
    const requestArr = Object.keys(requestObj);
    dispatch(getCurrency(requestArr));
  } catch (error) {
    return error;
  }
});
