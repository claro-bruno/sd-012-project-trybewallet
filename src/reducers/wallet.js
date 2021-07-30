// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária
// import { ACTION_TYPE } from '../actions/ACTION';
// import { ASYNCACTION_TYPE1, ASYNCACTION_TYPE2  } from '../actions/ASYNCACTION'

const initialState = {
  key: 'value',
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case 'ACTION_TYPE':
    return { ...state, key: action.payload };
  default:
    return state;
  }
};

export default user;
