import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends React.Component {
  constructor() {
    super();
    this.tableList = this.tableList.bind(this);
    this.totalValue = this.totalValue.bind(this);
  }

  totalValue() {
    const { expenses, totalAmount } = this.props;

    let total = 0;
    const arr = expenses.map((objs) => (objs.value
    * (objs.exchangeRates[objs.currency].ask)));
    for (let i = 0; i < arr.length; i += 1) {
      total += arr[i];
    }
    totalAmount(total);
  }

  tableList() {
    this.totalValue();
    const { expenses, deleteExpense } = this.props;
    const headerArray = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];

    return (
      <table>
        <thead>
          {headerArray.map((title) => <th key={ title }>{title}</th>)}
        </thead>
        <tbody>
          {expenses.map((data) => (
            <tr key={ data.id }>
              <td>{data.description}</td>
              <td>{data.tag}</td>
              <td>{data.method}</td>
              <td>{data.value}</td>
              <td>{data.exchangeRates[data.currency].name}</td>
              <td>{Number(data.exchangeRates[data.currency].ask).toFixed(2)}</td>
              <td>{(data.value * data.exchangeRates[data.currency].ask)}</td>
              <td>Real</td>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ () => deleteExpense(data.id) }
              >
                Excluir
              </button>
            </tr>))}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        {this.tableList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch({ type: 'DELETE_EXPENSE', id }),
  totalAmount: (amount) => dispatch({ type: 'TOTAL_AMOUNT', amount }),
});

Table.propTypes = {
  expenses: PropTypes.shape.isRequired,
  deleteExpense: PropTypes.func.isRequired,
  totalAmount: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
