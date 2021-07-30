import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddExpense from '../components/AddExpense';
import ExpensesTable from '../components/ExpensesTable';
import { addEmail } from '../actions';

class Wallet extends React.Component {
  render() {
    const { user: { email }, wallet: { expenses } } = this.props;
    const total = expenses.reduce((sum, { exchangeRates, currency, value }) => (
      sum + (Number(exchangeRates[currency].ask) * Number(value))
    ), 0);
    return (
      <header>
        <div data-testid="email-field">{email}</div>
        <div data-testid="header-currency-field">BRL</div>
        <div data-testid="total-field">{total}</div>
        <AddExpense />
        <ExpensesTable />
      </header>
    );
  }
}

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

const mapStateToProps = (state) => ({ user: state.user, wallet: state.wallet });

const mapDispatchToProps = (dispatch) => ({
  sendToStore: (payload) => dispatch(addEmail(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
