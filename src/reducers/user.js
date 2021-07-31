// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_USER } from '../actions';
// import { ASYNCACTION_TYPE1, ASYNCACTION_TYPE2  } from '../actions/ASYNCACTION'

const initialState = {
  email: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_USER:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default user;
