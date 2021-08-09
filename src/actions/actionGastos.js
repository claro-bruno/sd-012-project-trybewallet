import { PEGOU_GASTOS } from '../reducers/wallet';

const actionGastos = (state, total) => ({
  type: PEGOU_GASTOS,
  state,
  total,
});

export default actionGastos;
