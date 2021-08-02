import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.teste = this.teste.bind(this);
  }

  teste() {
    const { expenses } = this.props;
    const expense = expenses.reduce((acc, { value, currency, exchangeRates }) => {
      const bill = value * (exchangeRates[currency].ask);
      acc += bill;
      return acc;
    }, 0);
    return expense;
  }

  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          Email:
          { userEmail }
        </p>
        <p data-testid="total-field">
          Despesa Total:
          <span data-testid="header-currency-field">
            { this.teste().toFixed(2) }
            BRL
          </span>
        </p>
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
  expenses: PropTypes.arrayOf(PropTypes.obj).isRequired,
};

export default connect(mapStateToProps)(Header);
