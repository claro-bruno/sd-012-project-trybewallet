import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense, editExpense } from '../actions';
import expenseTableHead from '../data/expenseTableHead';

const ExpenseTable = (props) => {
  const { expenses, removeExpenseValue, editExpenseValue } = props;

  return (
    <table>
      <thead>
        <tr>
          { expenseTableHead.map((curr) => (
            <th key={ curr } name={ curr }>{ curr }</th>
          ))}
        </tr>
      </thead>
      <tbody>
        { expenses.map((curr) => {
          const { id, description, tag, method, value, currency, exchangeRates } = curr;
          const roundedValue = (valueInput) => Math.round(valueInput * 100) / 100;
          return (
            <tr key={ id }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{ exchangeRates[currency].name.split('/')[0].toString() }</td>
              <td>{ roundedValue(exchangeRates[currency].ask).toFixed(2) }</td>
              <td>{ roundedValue(exchangeRates[currency].ask * value).toFixed(2) }</td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="edit-btn"
                  onClick={ () => editExpenseValue(curr) }
                >
                  Editar
                </button>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => removeExpenseValue(id) }
                >
                  Remove
                </button>
              </td>
            </tr>
          );
        }) }
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpenseValue: (id) => dispatch(removeExpense(id)),
  editExpenseValue: (payload) => dispatch(editExpense(payload)),
});

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  removeExpenseValue: PropTypes.func.isRequired,
  editExpenseValue: PropTypes.func.isRequired,
};

ExpenseTable.defaultProps = {
  expenses: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
