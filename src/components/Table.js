import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { deleteExpense } from '../actions';

class Table extends React.Component {
  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    const { expenses, removeExpense } = this.props;
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    removeExpense(newExpenses);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { expenses.map(({
            id, value, description, currency, method, tag, exchangeRates,
          }) => {
            const exchangeRate = parseFloat(exchangeRates[currency].ask);
            const roundedRate = (Math.round((exchangeRate) * 100) / 100).toFixed(2);
            const total = (Math.round((value * exchangeRate) * 100) / 100).toFixed(2);
            return (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ exchangeRates[currency].name }</td>
                <td>{ roundedRate }</td>
                <td>{ total}</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => this.handleDelete(id) }
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (newExpenses) => dispatch(deleteExpense(newExpenses)),
});

Table.propTypes = {
  expenses: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number.isRequired,
    value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
    description: propTypes.string.isRequired,
    currency: propTypes.string.isRequired,
    method: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    exchangeRates: propTypes.shape({
      USD: propTypes.shape({
        name: propTypes.string.isRequired,
        ask: propTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  })).isRequired,
  removeExpense: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
