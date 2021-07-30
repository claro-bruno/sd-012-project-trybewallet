// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {
  email: '',
  password: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
  case 'LOGIN':
    return action.state;
  default:
    return state;
  }
}

export default userReducer;
