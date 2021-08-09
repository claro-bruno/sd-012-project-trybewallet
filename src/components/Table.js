import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionDeleteExpense } from '../actions';

class Table extends Component {
  constructor(props) {
    super(props);

    this.renderTHead = this.renderTHead.bind(this);
  }

  renderTHead() {
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

  render() {
    const { expenses, deleteExpense } = this.props;
    return (
      <table>
        { this.renderTHead() }
        <tbody>
          {
            expenses.map((exp) => (
              <tr key={ exp.id }>
                <td>{ exp.description }</td>
                <td>{ exp.tag }</td>
                <td>{ exp.method }</td>
                <td>{ exp.value }</td>
                <td>{ exp.exchangeRates[exp.currency].name }</td>
                <td>{ parseFloat(exp.exchangeRates[exp.currency].ask).toFixed(2) }</td>
                <td>
                  {
                    (exp.value * parseFloat(exp.exchangeRates[exp.currency].ask))
                      .toFixed(2)
                  }
                </td>
                <td>Real</td>
                <td>
                  <button
                    data-testid="delete-btn"
                    id={ exp.id }
                    type="button"
                    onClick={ () => deleteExpense(exp.id) }
                  >
                    Editar/Excluir
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    expenses: state.wallet.expenses,
  };
}

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(actionDeleteExpense(id)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
