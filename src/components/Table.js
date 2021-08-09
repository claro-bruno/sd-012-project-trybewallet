import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense } from '../actions';

class Table extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.editExpense = this.editExpense.bind(this);
  }

  handleClick({ target: { name, value } }) {
    const { handleRemoveExpense } = this.props;
    switch (name) {
    case 'edit':
      return this.editExpense(value);
    case 'delete':
      return handleRemoveExpense(value);
    default:
      return 0;
    }
  }

  editExpense(id) {
    console.log(id);
    document.querySelector('.menu-form').style.backgroundColor = 'rgb(10, 160, 105)';
    document.querySelector('.menu-form').style.color = 'rgb(40, 45, 55)';
    document.querySelector('.add-expense').style.backgroundColor = 'rgb(40, 45, 55)';
    document.querySelector('.add-expense').innerHTML = 'Editar despesa';
    document.querySelector('.edit-button').disabled = true;
    document.querySelector('.delete-button').disabled = true;
    document.querySelector('.delete-button')
      .style.backgroundColor = 'rgba(200, 30, 50, 0.5)';

    document.querySelector('.wallet-value').value = 60;
    document.querySelector('.wallet-currency').value = 'USD';
    document.querySelector('.wallet-payment-method').value = 'Dinheiro';
    document.querySelector('.wallet-tag').value = 'Alimentação';
    document.querySelector('.wallet-description').value = 'Disney';
  }

  render() {
    const { wallet: { expenses } } = this.props;
    return (
      <table className="table-container" cellSpacing="0" cellPadding="0">
        <thead>
          <tr className="row-header">
            <th className="column-header">Descrição</th>
            <th className="column-header">Tag</th>
            <th className="column-header">Método de pagamento</th>
            <th className="column-header">Valor</th>
            <th className="column-header">Moeda</th>
            <th className="column-header">Câmbio utilizado</th>
            <th className="column-header">Valor convertido</th>
            <th className="column-header">Moeda de conversão</th>
            <th className="column-header">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { expenses.map((expense) => {
            const { exchangeRates: { [expense.currency]: { name, ask } } } = expense;
            /* const formato = {
              minimumFractionDigits: 2,
              style: 'currency',
              currency: 'BRL',
            }; */

            return (
              <tr className="row-body" key={ expense.id }>
                <td className="column-body">{ expense.description }</td>
                <td className="column-body">{ expense.tag }</td>
                <td className="column-body">{ expense.method }</td>
                <td className="column-body">
                  { expense.value }
                  {/* { `${expense.currency} ${parseFloat(expense.value)
                    .toFixed(2).replace('.', ',')}` } */}
                </td>
                <td className="column-body">{ name }</td>
                <td className="column-body">
                  { parseFloat(ask).toFixed(2) }
                  {/* { parseFloat(ask).toLocaleString('pt-BR', formato) } */}
                </td>
                <td className="column-body">
                  { (expense.value * ask).toFixed(2) }
                  {/* { (expense.value * ask).toLocaleString('pt-BR', formato) } */}
                </td>
                <td className="column-body">Real</td>
                <td className="column-body">
                  <button
                    name="edit"
                    value={ expense.id }
                    type="button"
                    className="edit-button material-icons"
                    data-testid="edit-btn"
                    onClick={ this.handleClick }
                  >
                    edit
                  </button>
                  <button
                    name="delete"
                    value={ expense.id }
                    type="button"
                    className="delete-button material-icons"
                    data-testid="delete-btn"
                    onClick={ this.handleClick }
                  >
                    delete
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

const mapStateToProps = (state) => ({ wallet: state.wallet });

const mapDispatchToProps = (dispatch) => ({
  handleRemoveExpense: (id) => dispatch(removeExpense(id)),
});

Table.propTypes = {
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.shape({
      exchangeRates: PropTypes.shape(),
    })),
  }).isRequired,
  handleRemoveExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
