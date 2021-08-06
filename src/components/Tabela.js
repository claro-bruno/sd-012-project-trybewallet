import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions';

class Tabela extends React.Component {
  constructor(props) {
    super(props);

    this.tableFunc = this.tableFunc.bind(this);
  }

  tableKeys() {
    const arrayFields = [
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

    return (
      <tr>
        {arrayFields.map((element, index) => <th key={ index }>{ element }</th>)}
      </tr>
    );
  }

  conversionQuote(expense) {
    const quoteConversion = (parseFloat(expense.exchangeRates[expense.currency].ask)
    * parseFloat(expense.value));
    return quoteConversion.toFixed(2);
  }

  handleRemove(event, expense, exclusion, expenses) {
    event.preventDefault();
    if (expenses.length !== 0) {
      const exclusionExpense = [...expenses].filter((exp) => exp.id !== expense.id);
      exclusion(exclusionExpense);
    }
  }

  tableFunc() {
    const { expenses, remove } = this.props;
    return (
      expenses.map(
        (expense) => (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{expense.value}</td>
            <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
            <td>
              {parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2)}
            </td>
            <td>{this.conversionQuote(expense)}</td>
            <td>Real</td>
            <td id={ expense.id }>
              <button type="button">Editar</button>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ (event) => this.handleRemove(event, expense, remove, expenses) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ),
      )
    );
  }

  render() {
    const { expenses, remove } = this.props;

    return (
      <table>
        <thead>
          {this.tableKeys()}
        </thead>
        <tbody>
          {this.tableFunc(expenses, remove)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (despesas) => dispatch(deleteExpense(despesas)),
});

Tabela.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  remove: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Tabela);
