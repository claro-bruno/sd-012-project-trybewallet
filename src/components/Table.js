import React from 'react';
import PropTypes from 'prop-types';

class Table extends React.Component {
  render() {
    const { expenses, deleteFromExpenses, toggleEditChange } = this.props;
    return (
      <div role="table">
        <div role="row">
          <span role="columnheader">Descrição</span>
          <span role="columnheader">Tag</span>
          <span role="columnheader">Método de pagamento</span>
          <span role="columnheader">Valor</span>
          <span role="columnheader">Moeda</span>
          <span role="columnheader">Câmbio utilizado</span>
          <span role="columnheader">Valor convertido</span>
          <span role="columnheader">Moeda de conversão</span>
          <span role="columnheader">Editar/Excluir</span>
        </div>
        { expenses.map((expense) => (
          <div key={ expense.id } role="row">
            <span role="cell">{ expense.description }</span>
            <span role="cell">{ expense.tag }</span>
            <span role="cell">{ expense.method }</span>
            <span role="cell">{ expense.value }</span>
            <span role="cell">
              { expense.exchangeRates[expense.currency].name.split('/')[0] }
            </span>
            <span role="cell">
              { parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }
            </span>
            <span role="cell">
              { (expense.value * expense.exchangeRates[expense.currency].ask).toFixed(2) }
            </span>
            <span role="cell">Real</span>
            <span role="cell">
              <button
                data-testid="edit-btn"
                type="button"
                onClick={ () => toggleEditChange(expense.id) }
              >
                Editar
              </button>
              <button
                data-testid="delete-btn"
                type="button"
                onClick={ () => deleteFromExpenses(expense.id) }
              >
                Excluir
              </button>
            </span>
          </div>)) }
      </div>);
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteFromExpenses: PropTypes.func.isRequired,
  toggleEditChange: PropTypes.func.isRequired,
};

export default Table;
