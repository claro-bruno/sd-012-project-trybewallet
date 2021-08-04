import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  // constructor() {
  //   super();
  //   this.calculateTotalValue = this.calculateTotalValue.bind(this);
  // }

  // calculateTotalValue() {
  //   const { expenses } = this.props;
  //   // const xablau = totalExpense.reduce((acc, { value, currency, exchangeRates }) => {
  //   //   const teste = value * (exchangeRates[currency].ask);
  //   //   acc += teste;
  //   //   return acc;
  //   // }, 0);
  //   const result = Math.round(expenses * 100) / 100;
  //   console.log(expenses);
  //   if (!result) return result;
  //   return 0;
  // }

  render() {
    const { email, totalExpense } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          Usuário:
          { email }
        </p>
        <p data-testid="total-field">
          Despesa Total: R$
          { totalExpense.toFixed(2) }
          {/* { this.calculateTotalValue() } */}
        </p>
        <p data-testid="header-currency-field">
          Moeda: BRL
        </p>
      </header>
    );
  }
}

Header.defaultProps = {
  totalExpense: 0,
};

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpense: PropTypes.number,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpense: state.wallet.totalExpense,
  expenses: state.wallet.totalExpense,
});

export default connect(mapStateToProps, null)(Header);
