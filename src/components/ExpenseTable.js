import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import headerTable from '../helpers/headerTable';
import { expenseRemove, expenseEdit } from '../actions/index';

class ExpenseTable extends React.Component {
  renderEditAndTrashBtn(id) {
    const { deleteExpense, editExpense, edit } = this.props;
    return (
      <td>
        <button
          className="edit-expense"
          data-testid="edit-btn"
          type="button"
          onClick={ () => { editExpense(id); } }
          disabled={ edit }
        >
          <i className="bi bi-pencil-square" />
        </button>
        <button
          className="delete-expense"
          data-testid="delete-btn"
          type="button"
          onClick={ () => { deleteExpense(id); } }
        >
          <i className="bi bi-trash" />
        </button>
      </td>
    );
  }

  render() {
    const { expenses, darkmode } = this.props;
    return (
      <table className={ `expense-table ${darkmode ? 'expense-table-darkmode' : ''}` }>
        <thead>
          <tr className="table-title">
            {
              headerTable
                .map((item) => <th key={ item }>{item}</th>)
            }
          </tr>
        </thead>
        <tbody>
          { expenses
            .map(({ id, description, tag, method, currency, value, exchangeRates }) => (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>
                  { Math
                    .round(
                      (Number(value.replace(',', '.')) + Number.EPSILON) * 100,
                    ) / 100 }
                </td>
                <td>{ exchangeRates[currency].name }</td>
                <td>
                  {Number(exchangeRates[currency].ask).toFixed(2) }
                </td>
                <td>
                  {Math
                    .round((Number((value).replace(',', '.')) * Number(
                      exchangeRates[currency].ask,
                    ) + Number.EPSILON) * 100) / 100 }
                </td>
                <td>Real</td>
                {this.renderEditAndTrashBtn(id)}
              </tr>
            )) }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  edit: state.wallet.edit,
  darkmode: state.user.darkmode,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(expenseRemove(id)),
  editExpense: (id) => dispatch(expenseEdit(id)),
});

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
  edit: PropTypes.bool,
  darkmode: PropTypes.bool,
};

ExpenseTable.defaultProps = {
  edit: false,
  darkmode: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
