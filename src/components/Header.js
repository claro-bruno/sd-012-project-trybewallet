import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
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
        <div>
          <h1>TrybeWallet</h1>
          <p data-testid="email-field">{ email }</p>
        </div>
        <div>
          <p data-testid="total-field">
            {this.totalDispense()}
          </p>
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
// LER
const mapStateToProps = ({ user: { email }, wallet }) => ({
  email,
  expenses: wallet.expenses,
});
export default connect(mapStateToProps)(Header);
