const initialState = {
  email:'',
  password:'',
  login: false,
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case value:
      return state
      break;
  
    default:
      return state;
      break;
  }
}

export default UserReducer;