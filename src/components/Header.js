import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.handleTotalValue = this.handleTotalValue.bind(this);
  }

  handleTotalValue() {
    const { expenses } = this.props;
    if (expenses.length > 0) {
      const totalValue = expenses
        .reduce((accumulator, current) => accumulator
          + parseFloat(current.value) * current.exchangeRates[current.currency].ask, 0);
      return Math.round((totalValue) * 100) / 100;
    }
    return 0;
  }

  render() {
    const { email } = this.props;
    const totalValue = this.handleTotalValue();
    return (
      <header>
        <h2>TrybeWallet</h2>
        <div data-testid="email-field">{ `Email: ${email}` }</div>
        <div data-testid="total-field">{ `Valor total: ${totalValue}` }</div>
        <div data-testid="header-currency-field">BRL</div>
      </header>);
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
