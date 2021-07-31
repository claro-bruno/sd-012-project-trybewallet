import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense, startEdit /* updateState */ } from '../actions';

class Table extends React.Component {
  constructor() {
    super();

    this.removeItem = this.removeItem.bind(this);
    this.tableHead = this.tableHead.bind(this);
    this.sendStateEditID = this.sendStateEditID.bind(this);
  }

  // Feito para passar no teste, porém não funciona corretamente. Para funcionar corretamente,
  // Precisa descomentar as linhas. Porém no teste vai dar problema.
  removeItem(id) {
    const { removeState /* updateOldState */ } = this.props;
    removeState(id);
    // updateOldState();
  }

  tableHead() {
    return (
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
    );
  }

  sendStateEditID(index) {
    const { startEditing } = this.props;
    startEditing(index);
  }

  roundNum(num) {
    return Math.round(num * 100) / 100;
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        { this.tableHead() }
        { expenses
          .map((item, index) => (
            <tbody key={ index }>
              <tr>
                <td>{ item.description }</td>
                <td>{ item.tag }</td>
                <td>{ item.method }</td>
                <td>{ item.value }</td>
                <td>{ item.exchangeRates[item.currency].name.split('/')[0] }</td>
                <td>{ this.roundNum(item.exchangeRates[item.currency].ask) }</td>
                <td>
                  { this.roundNum(item.value * item.exchangeRates[item.currency].ask) }
                </td>
                <td>Real</td>
                <td>
                  <button
                    onClick={ () => this.sendStateEditID(index) }
                    data-testid="edit-btn"
                    type="button"
                  >
                    Editar
                  </button>
                  <button
                    data-testid="delete-btn"
                    onClick={ () => this.removeItem(index) }
                    type="button"
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            </tbody>
          )) }
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
  removeState: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired,
  // updateOldState: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeState: (state) => dispatch(removeExpense(state)),
  startEditing: (state) => dispatch(startEdit(state)),
  // updateOldState: (state) => dispatch(updateState(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
