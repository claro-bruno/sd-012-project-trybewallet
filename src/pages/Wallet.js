import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import Header from '../components/Header';

// prettier-ignore
class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ExpenseForm />
      </>
    );
  }
}

export default Wallet;
