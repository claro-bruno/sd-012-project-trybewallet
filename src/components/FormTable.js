import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeExpense as removeExpenseAction } from '../actions';

class FormTable extends Component {
  componentDidUpdate() {
    const { getTotalValue } = this.props;
    getTotalValue();
  }

  render() {
    const { expenses, removeExpense } = this.props;
    return (
      <table className="table bg-light">
        <thead>
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Tag</th>
            <th scope="col">Método de pagamento</th>
            <th scope="col">Valor</th>
            <th scope="col">Moeda</th>
            <th scope="col">Câmbio utilizado</th>
            <th scope="col">Valor convertido</th>
            <th scope="col">Moeda de conversão</th>
            <th scope="col">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(
            ({ id, description, tag, method, value, exchangeRates, currency }) => (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{ Math.round(exchangeRates[currency].ask * 100) / 100 }</td>
                <td>{ Math.round(value * exchangeRates[currency].ask * 100) / 100 }</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    className="btn btn-danger"
                    onClick={ () => removeExpense(id) }
                  >
                    X
                  </button>
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    );
  }
}

FormTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeExpense: PropTypes.func.isRequired,
  getTotalValue: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (event) => dispatch(removeExpenseAction(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormTable);
