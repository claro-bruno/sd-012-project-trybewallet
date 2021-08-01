import React from 'react';
import { string, shape, func } from 'prop-types';
import { connect } from 'react-redux';
import { rmvExpense } from '../../actions';

class ExpenseTableRow extends React.Component {
  render() {
    const { expense, rmv } = this.props;

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
        <td>Real</td>
        <td>
          <input
            data-testid="delete-btn"
            type="button"
            value="X"
            onClick={ () => rmv(expense.id) }
          />
        </td>
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
  rmv: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  rmv: (id) => dispatch(rmvExpense(id)),
});

export default connect(null, mapDispatchToProps)(ExpenseTableRow);
