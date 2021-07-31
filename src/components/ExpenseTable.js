import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import headerTable from '../helpers/headerTable';

class ExpenseTable extends React.Component {
  deleteExpense(id) {
    console.log(id);
  }

  renderEditTrashBtn(id) {
    return (
      <td>
        <button
          type="button"
          onClick={ () => {} }
        >
          <i className="bi bi-pencil-square" />
        </button>
        <button
          className="delete-expense"
          data-testid="delete-btn"
          type="button"
          onClick={ () => { console.log(id); } }
        >
          <i className="bi bi-trash-fill" />
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

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(ExpenseTable);
