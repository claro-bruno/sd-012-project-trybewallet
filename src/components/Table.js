import React from 'react';
import PropTypes from 'prop-types';

class Table extends React.Component {
  render() {
    const { expenses, deleteFromExpenses, handleToggleEdit } = this.props;
    const categogies = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    return (
      <div id="table" role="table">
        <div className="table-categories" role="row">
          { categogies.map((category) => (
            <span key={ category } role="columnheader">
              { category }
            </span>)) }
        </div>
        { expenses.map((expense) => (
          <div key={ expense.id } className="table-row" role="row">
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
                onClick={ () => handleToggleEdit(expense.id) }
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
  handleToggleEdit: PropTypes.func.isRequired,
};

export default Table;
