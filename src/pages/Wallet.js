import React, { Component } from 'react';
import Header from '../components/Header';
import AddExpenseForm from '../components/AddExpenseForm';
import ExpenseList from '../components/ExpenseList';

class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddExpenseForm />
        <ExpenseList />
      </div>
    );
  }
}

export default Wallet;
