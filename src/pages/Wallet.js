import React from 'react';
import Header from '../components/Header';
import FormExpenses from '../components/FormExpenses';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <FormExpenses />
      </>
    );
  }
}

export default Wallet;
