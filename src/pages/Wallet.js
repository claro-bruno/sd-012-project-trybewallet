import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    const { email, expenses, editor, idToEdit } = this.props;
    return (
      <div>
        <Header
          email={ email }
          total={ this.totalExpenses() }
          currency="BRL"
        />
        <NewExpense
          editor={ editor }
          idToEdit={ idToEdit }
        />
        <Table expenses={ expenses } />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  editor: PropTypes.bool,
  idToEdit: PropTypes.number,
};

Wallet.defaultProps = {
  editor: false,
  idToEdit: 0,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  editor: state.wallet.editor,
  idToEdit: state.wallet.idToEdit,
});

export default connect(mapStateToProps)(Wallet);
