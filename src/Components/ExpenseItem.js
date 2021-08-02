import React from 'react';
import PropTypes from 'prop-types';

class ExpenseItem extends React.Component {
  render() {
    const { expense } = this.props;
    const { description, tag, method, value, currency, exchangeRates } = expense;
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
          <button type="button">Excluir</button>
        </td>
      </tr>
    );
  }
}

ExpenseItem.propTypes = {
  expense: PropTypes.shape({
    description: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    exchangeRates: PropTypes.arrayOf(Object).isRequired,
  }).isRequired,
};

export default ExpenseItem;
