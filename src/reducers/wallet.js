import * as actionTypes from '../redux/actions/actionTypes';

const INTIIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
  onLoadingCurrencies: false,
  onLoadingRates: false,
};

const wallet = (state = INTIIAL_STATE, action) => {
  const { id: editedId } = action.editedItem ? action.editedItem : false;
  switch (action.type) {
  case actionTypes.GET_FETCH:
    return { ...state, [action.onLoading]: true };
  case actionTypes.GET_CURRENCIES_SUCESS:
    return { ...state, currencies: [...action.currencies], onLoadingCurrencies: false };
  case actionTypes.GET_ERROR:
    return { ...state, error: String(action.error), [action.onLoading]: false };
  case actionTypes.GET_RATES_SUCESS:
    return {
      ...state, expenses: [...state.expenses, action.expense], onLoadingRates: false };
  case actionTypes.REMOVE_ITEM:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => Number(id) !== Number(action.id)),
    };
  case actionTypes.EDIT_ITEM:
    return {
      ...state,
      expenses: [...state.expenses
        .filter(({ id }) => Number(id) !== Number(editedId)), action.editedItem]
        .sort(({ id: aId }, { id: bId }) => aId - bId) };

  default:
    return state;
  }
};

export default wallet;
