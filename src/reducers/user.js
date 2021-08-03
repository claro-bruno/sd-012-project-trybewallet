import { USER_SUBMIT } from '../actions/index';

const initialState = {
  email: '',

};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
  case USER_SUBMIT:
    return { ...state, email: action.state.email };
  default:
    return state;
  }
};

export default UserReducer;
