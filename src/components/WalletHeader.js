import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletHeader extends React.Component {
  totalValue() {
    const { expenses } = this.props;
    return expenses.reduce((acc, curr) => {
      const value = curr.exchangeRates[curr.currency].ask * curr.value;
      acc += value;
      return acc;
    }, 0);
  }

  render() {
    const { email } = this.props;
    return (
      <header data-testid="email-field">
        <span>
          Email:
          { email }
        </span>
        <span data-testid="total-field">
          Total de gastos:
          { this.totalValue() }
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(WalletHeader);
