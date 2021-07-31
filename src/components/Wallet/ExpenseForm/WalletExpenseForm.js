import React, { Component } from 'react';
import ExpenseValueInput from './ExpenseValueInput';
import ExpenseDescriptionInput from './ExpenseDescriptionInput';
import ExpenseCurrencyInput from './ExpenseCurrencyInput';
import ExpensePaymentMethodInput from './ExpensePaymentMethodInput';
import ExpenseTag from './ExpenseTag';
import AddExpenseButton from './AddExpenseButton';

class WalletExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <ExpenseValueInput
          handleChange={ this.handleChange }
        />
        <ExpenseDescriptionInput
          handleChange={ this.handleChange }
        />
        <ExpenseCurrencyInput
          handleChange={ this.handleChange }
        />
        <ExpensePaymentMethodInput
          handleChange={ this.handleChange }
        />
        <ExpenseTag
          handleChange={ this.handleChange }
        />
        <AddExpenseButton />
      </form>
    );
  }
}

export default WalletExpenseForm;
