// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = [];

function walletReducer(state = initialState, action) {
  switch (action.type) {
  case 'ADD':
    return [...state, action.data];
  case 'DELETE':
    return state.filter((element) => element !== action.value);
  default:
    return state;
  }
}

export default walletReducer;
