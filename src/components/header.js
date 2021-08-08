import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();
    this.totalField = this.totalField.bind(this);
  }

  totalField() {
    const { expenses } = this.props;
    let sum = 0;
    expenses.forEach(({ currency, value, exchangeRates }) => {
      sum += exchangeRates[currency].ask * value;
    });
    return sum.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <div data-testid="email-field">{ email }</div>
        <div data-testid="total-field">{this.totalField()}</div>
        <div data-testid="header-currency-field">BRL</div>

      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapSateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapSateToProps)(Header);
