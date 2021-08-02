import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpenses } from '../actions';

class ExpenseItem extends React.Component {
  render() {
    const { expense, removeExpense } = this.props;
    const { id, description, tag, method, value, currency, exchangeRates } = expense;
    const currencyObject = exchangeRates[currency];
    const currencyName = (currencyObject.name).split('/')[0];
    const convertedValue = value * currencyObject.ask;
    return (
      <tr>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ value }</td>
        <td>{ currencyName }</td>
        <td>{ parseFloat(currencyObject.ask).toFixed(2) }</td>
        <td>{ parseFloat(convertedValue).toFixed(2) }</td>
        <td>Real</td>
        <td>
          <button data-testid="edit-btn" type="button">Editar</button>
          <button
            data-testid="delete-btn"
            onClick={ () => removeExpense(id) }
            type="button"
          >
            Excluir
          </button>
        </td>
      </tr>
    );
  }
}

ExpenseItem.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    exchangeRates: PropTypes.arrayOf(Object).isRequired,
  }).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (ID) => dispatch(removeExpenses(ID)),
});

export default connect(null, mapDispatchToProps)(ExpenseItem);
