import React from 'react';
import ExpensesTable from './ExpensesTable';
import ExpensesTableBody from './ExpensesTableBody';

class WalletExpensesTable extends React.Component {
  render() {
    return (
      <table>
        <ExpensesTable />
        <ExpensesTableBody />
      </table>
    );
  }
}

export default WalletExpensesTable;
