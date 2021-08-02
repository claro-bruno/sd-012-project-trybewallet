import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionRemoveExpense } from '../actions';

const tableHeaders = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

class ExpenseTable extends React.Component {
  constructor() {
    super();
    this.totalValue = this.totalValue.bind(this);
  }

  totalValue() {
    const { expenses } = this.props;
    return expenses.reduce((acc, cur) => (
      acc + Number(cur.value) * Number(cur.exchangeRates[cur.currency].ask)), 0);
  }

  render() {
    const { expenses, removeExpense } = this.props;
    return (
      <table>
        <thead>
          <tr className="table-header">
            { tableHeaders.map((header) => (<th key={ header }>{ header }</th>)) }
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            const {
              id, description, tag, method, value, exchangeRates, currency } = expense;
            const currencyName = exchangeRates[currency].name.split('/');
            return (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{currencyName[0]}</td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>{Number(value * exchangeRates[currency].ask).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="edit-btn"
                    name="edit"
                  >
                    Editar
                  </button>
                  <button
                    id={ id }
                    type="button"
                    name="delete"
                    data-testid="delete-btn"
                    onClick={ () => removeExpense(id,
                      this.totalValue() - Number(value * exchangeRates[currency].ask)
                        .toFixed(2)) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>);
          })}
        </tbody>
      </table>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (id, value) => dispatch(actionRemoveExpense(id, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
