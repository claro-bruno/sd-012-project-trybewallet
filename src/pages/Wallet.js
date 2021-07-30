import React, { Component } from 'react';
import Header from '../components/Header';
import AddExpenseForm from '../components/AddExpenseForm';

class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddExpenseForm />
      </div>
    );
  }
}

export default Wallet;
