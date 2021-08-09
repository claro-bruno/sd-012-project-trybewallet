import { SUM_EXPENSES } from './types';

const sumExpenses = () => (dispatch, getState) => {
  const { wallet: { expenses } } = getState();

  dispatch({
    type: SUM_EXPENSES,
    expenses,
  });
};

export default sumExpenses;
