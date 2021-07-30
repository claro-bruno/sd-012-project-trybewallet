import React from 'react';
import Header from '../Components/Header';
import ExpenseForm from '../Components/ExpenseForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ExpenseForm />
      </div>
    );
  }
}

export default Wallet;
