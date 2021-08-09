import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FormWallet from '../components/FormWallet';

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
      <section className="wallet-section">
        <header>
          <span data-testid="email-field">
            E-mail:
            { email }
          </span>
          <span data-testid="total-field">
            Despesa total:
            { this.sumTotalExpense() }
          </span>
          <span data-testid="header-currency-field">
            Moedal atual: BRL
          </span>
        </header>
        <FormWallet />
      </section>
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
