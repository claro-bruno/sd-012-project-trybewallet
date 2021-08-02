import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  totalCurrencies() {
    const { expenses } = this.props;
    let initialValue = 0;
    expenses.forEach(({ exchangeRates, currency, value }) => {
      initialValue += (exchangeRates[currency].ask * value);
    });
    // Referência forEach com arrow funtcion
    // https://stackoverflow.com/questions/33763768/loop-through-array-of-values-with-arrow-function
    return initialValue.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header className="header">
        <div>
          <p data-testid="email-field">{ email }</p>
          <span data-testid="total-field">{ this.totalCurrencies() }</span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
