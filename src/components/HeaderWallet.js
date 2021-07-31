import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import trybeWalletLogo from '../images/logo-trybe-wallet.png';

class HeaderWallet extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const totalExpenses = expenses
      .reduce((total, expense) => {
        const { currency } = expense;
        const converter = Number((expense.value)
          .replace(',', '.')) * Number(expense
          .exchangeRates[currency].ask);
        total += converter;
        return total;
      }, 0);
    return (
      <header className="header-wallet">
        <img
          className="logo-wallet"
          src={ trybeWalletLogo }
          alt="trybe-wallet-logo"
        />

        <div className="info-wallet">
          <div className="email-wallet">
            Email:
            {' '}
            <span data-testid="email-field">{email}</span>
          </div>

          <div className="expenses-wallet">
            Despesa Total:
            {' '}
            <span
              data-testid="total-field"
            >
              {`R$ ${Math.round((totalExpenses + Number.EPSILON) * 100) / 100}`}
            </span>
            {' '}
            <span data-testid="header-currency-field">BRL</span>
          </div>

        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

HeaderWallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(HeaderWallet);
