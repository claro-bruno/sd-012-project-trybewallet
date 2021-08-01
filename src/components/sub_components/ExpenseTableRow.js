import React from 'react';
import { string, shape } from 'prop-types';

class ExpenseTableRow extends React.Component {
  render() {
    // const { description, tag, method, value, currency, exchangeRates } = this.props;
    const { expense } = this.props;

    const fmt = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return (
      <tr>
        <td>{expense.description}</td>
        <td>{expense.tag}</td>
        <td>{expense.method}</td>
        <td>{expense.value}</td>
        <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
        <td>{fmt.format(expense.exchangeRates[expense.currency].ask)}</td>
        <td>
          {fmt.format(
            parseFloat(expense.value)
              * parseFloat(expense.exchangeRates[expense.currency].ask),
          )}
        </td>
        <td>{expense.exchangeRates[expense.currency].name.split('/')[1]}</td>
      </tr>
    );
  }
}

ExpenseTableRow.propTypes = {
  expense: shape({
    description: string,
    tag: string,
    method: string,
    value: string,
    currency: string,
  }).isRequired,
};

export default ExpenseTableRow;
