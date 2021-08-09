import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.somation = this.somation.bind(this);
  }

  somation() {
    const { expenses } = this.props;
    if (!expenses.length) return '0';
    const total = expenses
      .map(({ value, exchangeRates, currency }) => +exchangeRates[currency]
        .ask * value)
      .reduce((acc, curr) => acc + curr, 0);
    return total.toFixed(2);
  }

  render() {
    const { email } = this.props;
    const currency = 'BRL';
    return (
      <div>
        <p data-testid="email-field">
          Email:
          {email}
        </p>
        <p data-testid="total-field">
          Dispesa Total:
          {this.somation()}
        </p>
        <p data-testid="header-currency-field">{currency}</p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
