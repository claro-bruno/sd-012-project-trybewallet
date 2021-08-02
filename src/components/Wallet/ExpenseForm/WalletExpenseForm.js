import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, objectOf } from 'prop-types';
import ExpenseValueInput from './ExpenseValueInput';
import ExpenseDescriptionInput from './ExpenseDescriptionInput';
import ExpenseCurrencyInput from './ExpenseCurrencyInput';
import ExpensePaymentMethodInput from './ExpensePaymentMethodInput';
import ExpenseTag from './ExpenseTag';
import AddExpenseButton from './AddExpenseButton';
import fetchCurrenciesForExpenses from '../../../fetchs/fetchCurrenciesForExpenses';
import EditExpenseButton from './EditExpenseButton';
import ExpenseTable from '../ExpenseTable/ExpenseTable';
import { editExpense } from '../../../actions';

class WalletExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',
      edit: false,
      idEdit: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.storeData = this.storeData.bind(this);
    this.enableEdit = this.enableEdit.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onEdit() {
    const { expenseEdit } = this.props;
    const { value, description, currency, method, tag, idEdit } = this.state;
    expenseEdit({ id: idEdit, value, description, currency, method, tag });
    this.setState({
      edit: false,
      idEdit: '',
    });
  }

  enableEdit(idEdit) {
    const { expenses } = this.props;
    const expenseEdit = expenses.find(({ id }) => id === idEdit);
    const { value, description, currency, method, tag } = expenseEdit;
    this.setState({ value, description, currency, method, tag, edit: true, idEdit });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  storeData() {
    const { value, description, currency, method, tag } = this.state;
    const { storeExpenseData } = this.props;
    storeExpenseData({ value, description, currency, method, tag });
  }

  render() {
    const { state } = this;
    return (
      <div>
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

        { state.edit ? <EditExpenseButton
          editExpenseFunc={ this.onEdit }
        /> : <AddExpenseButton
          storeDataFunc={ this.storeData }
        /> }
        <ExpenseTable
          editFunc={ this.enableEdit }
        />
      </div>
    );
  }
}

WalletExpenseForm.propTypes = {
  storeExpenseData: func.isRequired,
  expenseEdit: func.isRequired,
  expenses: arrayOf(objectOf).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  storeExpenseData: (data) => dispatch(fetchCurrenciesForExpenses(data)),
  expenseEdit: (data) => dispatch(editExpense(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletExpenseForm);
