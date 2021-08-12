import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, string } from 'prop-types';
import { headTable } from '../componentData/index';
import { removeExpenseAct } from '../actions/index';

class ExpenseTable extends Component {
  buttoneEdit(handleToggleEdit, idT) {
    return (
      <button
        type="button"
        data-testid="edit-btn"
        onClick={ () => handleToggleEdit(idT) }
      >
        Editar
      </button>
    );
  }

  buttonRemove(getIdToRemove, idT) {
    return (
      <button
        type="button"
        data-testid="delete-btn"
        onClick={ () => getIdToRemove(idT) }
      >
        Excluir
      </button>
    );
  }

  render() {
    const { expenses, getIdToRemove, handleToggleEdit } = this.props;
    return (
      <table>
        <thead>
          <tr>{headTable.map((title) => <th key={ title }>{ title }</th>)}</tr>
        </thead>
        <tbody>
          {expenses.map((e) => {
            const currencyCurrent = e.currency;
            const { name, ask } = e.exchangeRates[currencyCurrent];
            const idT = e.id;
            const descriptionT = e.description;
            const tagT = e.tag;
            const methodT = e.method;
            const valueT = e.value;

            const total = (+ask * e.value).toFixed(2);
            const priceRound = (Math.round((ask * 100)) / 100).toFixed(2);

            return (
              <tr key={ idT }>
                <td>{descriptionT}</td>
                <td>{tagT}</td>
                <td>{methodT}</td>
                <td>{valueT}</td>
                <td>{name}</td>
                <td>{priceRound}</td>
                <td>{total}</td>
                <td>Real</td>
                <td>
                  { this.buttonRemove(getIdToRemove, idT) }
                  { this.buttoneEdit(handleToggleEdit, idT) }
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
  getIdToRemove: (id) => dispatch(removeExpenseAct(id)),
});

ExpenseTable.propTypes = {
  expenses: arrayOf(string).isRequired,
  map: func.isRequired,
  getIdToRemove: func.isRequired,
  handleToggleEdit: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
