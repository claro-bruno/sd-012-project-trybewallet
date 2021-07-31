import React from 'react';
import Header from './WComponents/Header';
import ExpensesForm from './WComponents/ExpensesForm';
import DispensesTable from './WComponents/DispensesTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <ExpensesForm />
          <DispensesTable />
        </main>
      </div>
    );
  }
}

export default Wallet;
