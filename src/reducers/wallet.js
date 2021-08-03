import { FETCH_API } from "../actions";
import { FETCH_API_SUCCESS } from "../actions";
import { FETCH_API_ERROR } from "../actions";

const initialState = {
  currencies: [],
  expenses: [],
  error: null,
  isLoading: false,
};

const WalletReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_API:
    return {...state, isLoading: true};
  case FETCH_API_SUCCESS:
    return {error:null, currencies: action.payload , isLoading: false};
  case FETCH_API_ERROR:
    return {error:action.error, isLoading: false};
  default:
    return state;
  }
};

export default WalletReducer;
