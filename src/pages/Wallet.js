import React, { Component } from 'react';
import Header from '../components/Header';
import AddExpenseForm from '../components/AddExpenseForm';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends Component {
  render() {
    return (
      <>
        <Header />
        <AddExpenseForm />
        <ExpenseTable />
      </>
    );
  }
}

export default Wallet;
