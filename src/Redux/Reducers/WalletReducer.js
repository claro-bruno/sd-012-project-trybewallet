const initialState = {
  currencies: [],
  expenses: [],
}


const WalletReducer = (state = initialState, action) => {
  switch (action.type) {
    case value:
      return state
      break;
  
    default:
      return state;
      break;
  }
}

export default WalletReducer;