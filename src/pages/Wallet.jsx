import React from 'react';
import Header from '../components/Header';
import AddExpenses from '../components/AddExpenses';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AddExpenses />
      </>
    );
  }
}

export default Wallet;
