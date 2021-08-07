import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderWallet extends Component {
  constructor() {
    super();

    this.calculateTotalExpenses = this.calculateTotalExpenses.bind(this);
  }

  calculateTotalExpenses() {
    const { expense } = this.props;

    if (expense.length !== 0) {
      const totalField = expense.reduce((total, expens) => (
        total + expens.value * expens.exchangeRates[expens.currency].ask), 0);
      return totalField.toFixed(2);
    }
    return 0;
  }

  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">{ userEmail }</h3>
        <span data-testid="total-field">{ this.calculateTotalExpenses() }</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expense: state.wallet.expenses,
});

export default connect(mapStateToProps)(HeaderWallet);

HeaderWallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expense: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
