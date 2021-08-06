import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteRow } from '../actions';

class Table extends React.Component {
  constructor() {
    super();
    this.renderTable = this.renderTable.bind(this);
  }

  renderTable(expense) {
    const { eraseRow } = this.props;
    const sigle = expense.currency;
    const coinName = expense.exchangeRates[`${sigle}`].name;
    const cambio = coinName.split('/')[0];
    const conversionValue = expense.exchangeRates[`${sigle}`].ask;
    const convertedValue = expense.value * expense.exchangeRates[`${sigle}`].ask;
    return (
      <tr key={ expense.id } id={ `Row${expense.id}` }>
        <td>{expense.description}</td>
        <td>{expense.tag}</td>
        <td>{expense.method}</td>
        <td>{expense.value}</td>
        <td>{cambio}</td>
        <td>{parseFloat(conversionValue).toFixed(2)}</td>
        <td>{parseFloat(convertedValue).toFixed(2)}</td>
        <td>Real</td>
        <td>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ () => eraseRow(`${expense.id}`) }
          >
            Deletar
          </button>
        </td>
      </tr>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <div>
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
            { expenses.map(this.renderTable) }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  eraseRow: (id) => dispatch(deleteRow(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  })).isRequired,
  eraseRow: PropTypes.func.isRequired,
};
