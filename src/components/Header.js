import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const totalExpenses = expenses.reduce((total, expense) => total + expense, 0);
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">{ totalExpenses }</span>
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
  expenses: PropTypes.arrayOf(Number).isRequired,
};

export default connect(mapStateToProps)(Header);
