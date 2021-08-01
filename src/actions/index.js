export const EMAIL_SUBMIT = 'EMAIL_SUBMIT';
export const EXPENSE_SUBMIT = 'EXPENSE_SUBMIT';
export const EXPENSE_FAIL = 'EXPENSE_FAIL';

export const actionEmail = (state) => ({ type: EMAIL_SUBMIT, state });

export const actionExpense = (state) => ({ type: EXPENSE_SUBMIT, state });
export const actionExpenseFail = () => ({ type: EXPENSE_FAIL });
