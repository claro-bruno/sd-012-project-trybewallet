import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;

    // Referência: Natalia Ribeiro - turma 11. Url: https://github.com/tryber/sd-011-project-trybewallet/pull/43/files
    const totalExpense = expenses
      .reduce((acc, { value, currency, exchangeRates }) => (
        acc + (Number(value * exchangeRates[currency].ask))), 0);

    return (
      <header className="wallet-header">
        <h4 data-testid="email-field">
          Email:
          { email }
        </h4>
        <div className="expenses-container">
          <h4 data-testid="total-field" className="totalExpense">
            Despesa Total:
            { totalExpense }
          </h4>
          <h4 data-testid="header-currency-field">
            BRL
          </h4>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = ({
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.object),
}).isRequired;

export default connect(mapStateToProps)(Header);
