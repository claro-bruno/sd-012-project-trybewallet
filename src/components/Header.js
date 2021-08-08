import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  sumTotal() {
    const { expenses } = this.props;
    let soma = 0;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      soma += exchangeRates[currency].ask * value;
    });
    return soma.toFixed(2);
  }

  render() {
    const { user } = this.props;
    return (
      <header className="headers">
        <p data-testid="email-field">{ user }</p>
        <div data-testid="total-field">{this.sumTotal()}</div>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  expenses: PropTypes.arrayOf.isRequired,
  user: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
