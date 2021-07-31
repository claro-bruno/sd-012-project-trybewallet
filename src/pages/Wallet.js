import React from 'react';
import ExpensesForm from './WComponents/ExpensesForm';
import Header from './WComponents/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <ExpensesForm />
        </main>
      </div>
    );
  }
}

export default Wallet;
