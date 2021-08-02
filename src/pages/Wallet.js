import React from 'react';

import Header from '../Components/Header';
import ExpenseForm from '../Components/ExpenseForm';
import ExpenseTable from '../Components/ExpenseTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ExpenseForm />
        <ExpenseTable />
      </div>
    );
  }
}

export default Wallet;
