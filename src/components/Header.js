import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const total = expenses.reduce((acc, { value, currency, exchangeRates }) => {
      const exchangeRate = parseFloat(exchangeRates[currency].ask);
      acc += value * exchangeRate;
      return acc;
    }, 0);

    const roundedTotal = (Math.round(total * 100) / 100).toFixed(2);

    return (
      <header>
        <span data-testid="email-field">
          Email:
          { email }
        </span>
        <span data-testid="total-field">
          Despesa total: R$
          { roundedTotal }
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

Header.propTypes = {
  email: propTypes.string.isRequired,
  expenses: propTypes.arrayOf(propTypes.shape({
    value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
    currency: propTypes.string.isRequired,
    exchangeRates: propTypes.shape({
      USD: propTypes.shape({
        ask: propTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  })).isRequired,
};

export default connect(mapStateToProps)(Header);
