import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { tableHeaders } from '../data';
import { removeExpense } from '../actions';

class ExpensesTable extends Component {
  render() {
    const { expenses, dispatchRemoveExpense } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header) => <th key={ header }>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {expenses.map(({
            description,
            tag,
            method,
            id,
            value,
            currency,
            exchangeRates,
          }) => (
            <tr
              key={ id }
            >
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>
                {exchangeRates[currency].name}
                {/* {exchangeRates[currency].name
                  .substring(0, exchangeRates[currency].name.indexOf('/'))} */}
              </td>
              <td>{(parseFloat(exchangeRates[currency].ask)).toFixed(2)}</td>
              <td>{(value * exchangeRates[currency].ask).toFixed(2)}</td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  onClick={ () => dispatchRemoveExpense(id) }
                  data-testid="delete-btn"
                >
                  X
                </button>
              </td>
            </tr>))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchRemoveExpense: (expenseId) => dispatch(removeExpense(expenseId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  dispatchRemoveExpense: PropTypes.func.isRequired,
};
