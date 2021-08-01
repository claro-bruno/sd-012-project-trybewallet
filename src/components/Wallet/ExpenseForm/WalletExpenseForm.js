import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import ExpenseValueInput from './ExpenseValueInput';
import ExpenseDescriptionInput from './ExpenseDescriptionInput';
import ExpenseCurrencyInput from './ExpenseCurrencyInput';
import ExpensePaymentMethodInput from './ExpensePaymentMethodInput';
import ExpenseTag from './ExpenseTag';
import AddExpenseButton from './AddExpenseButton';
import fetchCurrenciesForExpenses from '../../../fetchs/fetchCurrenciesForExpenses';

class WalletExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
    this.storeData = this.storeData.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  storeData() {
    const { state } = this;
    const { storeExpenseData } = this.props;
    storeExpenseData(state);
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
        <AddExpenseButton
          storeDataFunc={ this.storeData }
        />
      </form>
    );
  }
}

WalletExpenseForm.propTypes = {
  storeExpenseData: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  storeExpenseData: (data) => dispatch(fetchCurrenciesForExpenses(data)),
});

export default connect(null, mapDispatchToProps)(WalletExpenseForm);
