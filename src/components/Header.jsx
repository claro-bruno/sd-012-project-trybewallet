import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { emailSetted, valueTotal } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ `Email: ${emailSetted}` }</p>
        <p data-testid="total-field">{`Total: ${valueTotal}`}</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailSetted: state.user.email,
  valueTotal: state.wallet.expenses
    .reduce((acc,
      { value,
        exchangeRates,
        currency }) => (acc + Number(value) * Number(exchangeRates[currency].ask)), 0),
});

export default connect(mapStateToProps)(Header);
