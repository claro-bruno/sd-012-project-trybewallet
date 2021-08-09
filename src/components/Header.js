import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const total = expenses.reduce((acc, cur) => {
      const { value, currency, exchangeRates } = cur;
      acc += value * parseFloat(exchangeRates[currency].ask);
      return acc;
    }, 0);
    return (
      <header>
        <div data-testid="email-field">
          {`E-mail: ${email}`}
        </div>
        <div data-testid="total-field">
          Total: R$
          { total }
        </div>
        <div data-testid="header-currency-field">
          Câmbio: BRL
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapState(state) {
  return {
    email: state.user.email,
    expenses: state.wallet.expenses,
  };
}

export default connect(mapState)(Header);
