import React from 'react';
import { string, shape, func } from 'prop-types';
import { connect } from 'react-redux';
import { rmvExpense, edtExpense } from '../../actions';

class ExpenseTableRow extends React.Component {
  render() {
    const { expense, rmv, edt } = this.props;

    const fmt = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return (
      <tr key={ expense.id }>
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
        <td className="btns-td">
          <input
            data-testid="delete-btn"
            className="btn btn-danger"
            type="button"
            value="Excluir"
            onClick={ () => rmv(expense.id) }
          />
          <input
            data-testid="edit-btn"
            className="btn btn-warning"
            type="button"
            value="Editar"
            onClick={ () => edt(expense) }
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
  edt: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  rmv: (id) => dispatch(rmvExpense(id)),
  edt: (expense) => dispatch(edtExpense(expense)),
});

export default connect(null, mapDispatchToProps)(ExpenseTableRow);
