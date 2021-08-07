import React from 'react';
import Header from '../components/Header';
import NewExpense from '../components/NewExpense';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <NewExpense />
      </>
    );
  }
}

export default Wallet;
