import { PEGOU_AS_MOEDAS } from '../reducers/wallet';

const actionDentroDaFetch = (state) => ({
  type: PEGOU_AS_MOEDAS,
  state,
});

const usandoAfetch = () => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((result) => result.json())
  .then((result) => dispatch(actionDentroDaFetch({
    loading: false,
    moedas: Object.keys(result) })));

export default usandoAfetch;
