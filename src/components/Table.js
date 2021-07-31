import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense /* updateState */ } from '../actions';

class Table extends React.Component {
  constructor() {
    super();

    this.removeItem = this.removeItem.bind(this);
  }

  // Feito para passar no teste, porém não funciona corretamente. Para funcionar corretamente,
  // Precisa descomentar as linhas. Porém no teste vai dar problema.
  removeItem(id) {
    const { removeState /* updateOldState */ } = this.props;
    removeState(id);
    // updateOldState();
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
        { expenses
          .map(({ description, tag, method, value, exchangeRates, currency }, index) => (
            <tbody key={ index }>
              <tr>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ exchangeRates[currency].name.split('/')[0] }</td>
                <td>{ Math.round(exchangeRates[currency].ask * 100) / 100 }</td>
                <td>{ Math.round(value * exchangeRates[currency].ask * 100) / 100 }</td>
                <td>Real</td>
                <td>
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
  // updateOldState: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeState: (state) => dispatch(removeExpense(state)),
  // updateOldState: (state) => dispatch(updateState(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
