import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import Header from '../components/Header';
import NewExpense from '../components/NewExpense';
import Table from '../components/Table';

class Wallet extends React.Component {
  totalExpenses() {
    const { expenses } = this.props;
    const total = expenses
      .reduce((acc, expense) => acc
      + parseFloat(expense.value)
      * parseFloat(expense.exchangeRates[expense.currency].ask), 0);
    return (Math.floor(total * 100) / 100);
  }

  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <Header
          email={ email }
          total={ this.totalExpenses() }
          currency="BRL"
        />
        <NewExpense />
        <Table expenses={ expenses } />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: Proptypes.string.isRequired,
  expenses: Proptypes.arrayOf(
    Proptypes.object.isRequired,
  ).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
