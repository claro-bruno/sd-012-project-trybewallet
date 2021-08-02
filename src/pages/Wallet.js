/* eslint-disable max-lines-per-function */
import React from 'react';
import Header from '../Components/Header';
import ExpenseInput from '../Components/ExpenseInput';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ExpenseInput />
      </>
    );
  }
}

export default Wallet;
