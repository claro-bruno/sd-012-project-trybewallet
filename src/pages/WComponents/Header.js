import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.totalDispense = this.totalDispense.bind(this);
  }

  totalDispense() {
    const { expenses } = this.props;
    return expenses.reduce((acc, { value, currency, exchangeRates }) => {
      const { ask } = exchangeRates[currency];
      return acc + ask * value;
    }, 0).toFixed(2);
  }

  render() {
    const { email } = this.props;
    const currency = 'BRL';

    return (
      <header>
        {/* <img /> */}
        <div>
          <p data-testid="email-field">{ `Email: ${email}` }</p>
          <p data-testid="total-field">{ `Dispesa Total: ${this.totalDispense()}` }</p>
          <p data-testid="header-currency-field">{ currency }</p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ user: { email }, wallet }) => ({
  email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Header);
