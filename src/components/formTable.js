import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionDeleteExpenses } from '../actions';

class FormTable extends React.Component {
  constructor() {
    super();
    this.deleteExpense = this.deleteExpense.bind(this);
  }

  deleteExpense(id) {
    const { deleteExp } = this.props;
    deleteExp(id);
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
        <tbody>
          {expenses.map((expense) => {
            const { id, currency, description,
              tag, method, value, exchangeRates } = expense;
            return (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{(exchangeRates[currency].name).split('/')[0]}</td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>{Number(exchangeRates[currency].ask * value).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => this.deleteExpense(id) }
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

FormTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExp: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExp: (payload) => dispatch(actionDeleteExpenses(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormTable);
