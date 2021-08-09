import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class HeaderWallet extends Component {
  render() {
    const { email, expenses } = this.props;
    let total = 0;
    if (expenses.length > 0) {
      total = expenses
        .reduce((acc, { value, exchangeRates, currency }) => (
          acc + (Number(value) * Number(exchangeRates[currency].ask))), 0);
    }
    return (
      <header className="navbar navbar-light">
        <p data-testid="email-field">{email}</p>
        <span data-testid="total-field">{`Total: ${total.toFixed(2)}`}</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

HeaderWallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(HeaderWallet);
