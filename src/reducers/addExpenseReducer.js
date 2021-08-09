const INITIAL_STATE = {
  expenseValue: '',
  expenseDescription: '',
  currentExchange: '',
  paymentMethod: '',
  expenseCategory: '',
};

const addExpenseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case '':
    return '';
  default:
    return state;
  }
};

export default addExpenseReducer;
