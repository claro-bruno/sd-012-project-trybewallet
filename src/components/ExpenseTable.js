import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import headerTable from '../helpers/headerTable';
import { expenseRemove } from '../actions/index';

class ExpenseTable extends React.Component {
  handleRemove(id) {
    const { deleteExpense } = this.props;
    deleteExpense(id);
  }

  renderEditTrashBtn(id) {
    return (
      <td>
        <button
          className="edit-expense"
          type="button"
          onClick={ () => {} }
        >
          <i className="bi bi-pencil-square" />
        </button>
        <button
          className="delete-expense"
          data-testid="delete-btn"
          type="button"
          onClick={ () => { this.handleRemove(id); } }
        >
          <i className="bi bi-trash" />
        </button>
      </td>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <table className="expense-table">
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
                  {Math
                    .round(
                      (Number(exchangeRates[currency].ask) + Number.EPSILON) * 100,
                    ) / 100 }
                </td>
                <td>
                  {Math
                    .round((Number((value).replace(',', '.')) * Number(
                      exchangeRates[currency].ask,
                    ) + Number.EPSILON) * 100) / 100 }
                </td>
                <td>Real</td>
                {this.renderEditTrashBtn(id)}
              </tr>
            )) }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(expenseRemove(id)),
});

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
