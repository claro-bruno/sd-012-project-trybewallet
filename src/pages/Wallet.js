import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddExpenseForm from '../component/AddExpenseForm';
import { getCurrency } from '../actions';
import ExpenseTable from '../component/expenseTable';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.total = this.total.bind(this);
  }

  total() {
    const { expenses } = this.props;
    return expenses.reduce((acc, { value, currency, exchangeRates }) => {
      acc += parseFloat(value) * parseFloat(exchangeRates[currency].ask);
      return acc;
    }, 0);
  }

  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <span data-testid="email-field">{`Email: ${email}`}</span>
          <span data-testid="total-field">
            {`Despesa Total: R$ ${this.total().toFixed(2)}`}
          </span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <AddExpenseForm />
        <ExpenseTable total={ this.total } />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  currency: (data) => dispatch(getCurrency(data)),
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
