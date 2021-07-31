import React, { Component } from 'react';
import ExpenseValueInput from './ExpenseValueInput';
import ExpenseDescriptionInput from './ExpenseDescriptionInput';
import ExpenseCurrencyInput from './ExpenseCurrencyInput';
import ExpensePaymentMethodInput from './ExpensePaymentMethodInput';
import ExpenseTag from './ExpenseTag';

class WalletExpenseForm extends Component {
  render() {
    return (
      <form>
        <ExpenseValueInput />
        <ExpenseDescriptionInput />
        <ExpenseCurrencyInput />
        <ExpensePaymentMethodInput />
        <ExpenseTag />
      </form>
    );
  }
}

export default WalletExpenseForm;
