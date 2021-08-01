// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_API,
  REQUEST_API_SUCCESS,
  REQUEST_API_ERROR,
} from '../actions';

const INITIAL_STATE = {
  currencies: {},
  isFetching: false,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isFetching: true,
    };
  case REQUEST_API_SUCCESS:
    return {
      ...state,
      isFetching: false,
      currencies: action.payload,
    };
  case REQUEST_API_ERROR:
    return {
      ...state,
      isFetching: false,
      currencies: Error,
    };
  default:
    return state;
  }
}

export default wallet;
