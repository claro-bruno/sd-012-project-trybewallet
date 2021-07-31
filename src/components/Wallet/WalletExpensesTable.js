import React from 'react';
import ExpensesTableRowHead from './ExpensesTableRowHead';
import ExpensesTableRowsBody from './ExpensesTableRowsBody';

class WalletExpensesTable extends React.Component {
  render() {
    return (
      <table>
        <ExpensesTableRowHead />
        <ExpensesTableRowsBody />
      </table>
    );
  }
}

export default WalletExpensesTable;
