// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_EMAIL } from "../actions/actions";

const INITIAL_STATE = {
  email: '',
  password: '',
}

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EMAIL:
    return {
      ...state,
      email: action.state,
    }

  default:
    return state
  }
}

export default user;