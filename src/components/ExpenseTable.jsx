import React from 'react';
import { connect } from 'react-redux';

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
  // componentDidUpdate() {
  //   this.renderExpenses();
  // }

  // renderExpenses() {
  //   const { expenses } = this.props;

  // }

  render() {
    const { expenses } = this.props;
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
                    // onClick={ ({ target }) => this.handleClick(target, expense) }
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    name="delete"
                    data-testid="delete-btn"
                    // onClick={ ({ target }) => this.handleClick(target, id) }
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

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpenseTable);
