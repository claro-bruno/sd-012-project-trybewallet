import { PEGOU_AS_MOEDAS } from '../reducers/wallet';

const actionDentroDaFetch = (state) => ({
  type: PEGOU_AS_MOEDAS,
  state,
});

const usandoAfetch = () => async (dispatch) => {
  const resultFetch = await fetch('https://economia.awesomeapi.com.br/json/all');
  const resultJson = await resultFetch.json();
  dispatch(actionDentroDaFetch(resultJson));
};

export default usandoAfetch;
