import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import ExpensesTable from '../components/ExpensesTable';
import './wallet.css';

class Wallet extends React.Component {
  constructor() {
    super();

    this.sumTotalExpense = this.sumTotalExpense.bind(this);
  }

  sumTotalExpense() {
    const { expenses } = this.props;
    if (!expenses.length) return '0,00';
    const total = expenses
      .map(({ value, exchangeRates, currency }) => exchangeRates[currency].ask * value)
      .reduce((acc, curr) => acc + curr, 0);
    return total.toFixed(2);
  }

  render() {
    const { email } = this.props;

    return (
      <div>
        <header>
          <div className="logo">
            TrybeWallet
          </div>
          <div className="user-info">
            <p data-testid="email-field" className="user-email">
              Email:
              <span className="email">{email}</span>
            </p>
            <p data-testid="total-field">
              Despesa Total:
              <span className="total-sum">{this.sumTotalExpense()}</span>
            </p>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </header>
        <Form />
        <ExpensesTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
