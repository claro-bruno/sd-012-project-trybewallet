import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import image from '../images/wallet.png';

class Header extends React.Component {
  render() {
    const { email, currentCurrency, expenses } = this.props;
    let total = 0;
    if (expenses.length > 0) {
      expenses.forEach((expense) => {
        const { value, exchangeRates } = expense;
        total += Number(value) * Number(exchangeRates[expense.currency].ask);
      });
    }
    return (
      <header>
        <div>
          <img className="wallet-img" src={ image } alt="wallet" />
        </div>
        <div className="header-info">
          <p data-testid="email-field">{ `Email: ${email}` }</p>
          <p data-testid="total-field">{` Valor: ${total.toFixed(2)} `}</p>
          <p data-testid="header-currency-field">{ `Moeda: ${currentCurrency}` }</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currentCurrency: state.wallet.currentCurrency,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  currentCurrency: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
