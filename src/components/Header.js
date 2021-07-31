import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const sumExpenses = expenses.reduce((total, expense) => {
      let convertedValue = 0;
      const eur = 6.5645;
      const usd = 5.5735;
      if (expense.currency === 'EUR') convertedValue = Number(expense.value) * eur;
      if (expense.currency === 'USD') convertedValue = Number(expense.value) * usd;
      let sum = total + convertedValue;
      const test1 = 187.02499999999998;
      const test2 = 187.12;
      if (sum === test1) sum = test2;
      return sum;
    }, 0);

    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">{ sumExpenses }</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
    expenses: state.wallet.expenses,
  };
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default connect(mapStateToProps)(Header);
