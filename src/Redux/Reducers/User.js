import { USER_SUBMIT } from '../Actions/userSubmit';

const initialState = {
  email: '',

};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
  case USER_SUBMIT:
    return { ...state, email: action.state };
  default:
    return state;
  }
};

export default UserReducer;
