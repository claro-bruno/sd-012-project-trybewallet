import React from 'react';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';

class Wallet extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <ExpenseForm />
      </section>
    );
  }
}

export default Wallet;
