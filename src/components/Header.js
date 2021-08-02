import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 0,
    };
    this.getTotalValue = this.getTotalValue.bind(this);
  }

  getTotalValue() {
    const { expenses } = this.props;
    

    const totalValue = Math.round(expenses.reduce((acc, expense) => {
      const { value, currency, exchangeRates } = expense;
      const { ask } = exchangeRates[currency];
      return acc += parseFloat(value) * parseFloat(ask);
    }, 0) * 100)/ 100;
    return totalValue;
  }

  render() {
    const { userEmail } = this.props;
    const { getTotalValue } = this;
    return (
      <header>
        <h1>Weballet</h1>
        <p data-testid="email-field">{ userEmail }</p>
        <p data-testid="total-field">{ getTotalValue() }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
